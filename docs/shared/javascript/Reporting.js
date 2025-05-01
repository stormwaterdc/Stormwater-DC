# Home

placeholder

/* Container */
<div id="dossierContainer"></div>
/* First, we need to load the JavaScript Library for the MicroStrategy Embedding SDK. */

<script src="https://demo.microstrategy.com/MicroStrategyLibrary/javascript/embeddinglib.js"></script>
<script type="text/javascript">

/* Generate the complete URL for the Dossier */
//var dossierUrl = baseRestURL + '/app/' + projectID + '/' + dossierID;
var dossierUrl = "https://public.tableau.com/views/FY20ProposedBudgetDashboardMayoralSubmission/District-wideSummary?:embed=y&:showVizHome=no&:host_url=https%3A%2F%2Fpublic.tableau.com%2F&:embed_code_version=3&:tabs=no&:toolbar=yes&:animate_transition=yes&:display_static_image=no&:display_spinner=no&:display_overlay=yes&:display_count=yes&:loadOrderID=0";

/* Populate div with Dossier: */
microstrategy.dossier.create({
	/* This is the document's <div> container where the Dossier should be placed. */
	placeholder: document.getElementById("dossierContainer"),
	url: dossierUrl,
    /* The following parameters define the appearance of the Dossier.
	E.g. is the navigation or collaboration bar displayed, do right-click actions work, etc. */
	disableNotification: true,
	enableResponsive: true,

	/* And parameters for the user authentication. */
	/* In case we didn't want the dossier to load automatically for everyone */
	/* and wanted the user to log in we would skip that part. */

	enableCustomAuthentication: true,
	customAuthenticationType: microstrategy.dossier.CustomAuthenticationType.AUTH_TOKEN,
	getLoginToken: login

}).then(function(dossier) {
	/* Code to execute after the Dossier has finished loading... */
});

[//]: # ()
[//]: # ([//]: # &#40;<figure class="mdx-video" markdown>&#41;)
[//]: # (  <div id = "dossierContainer" )

[//]: # (    style = "width: 100%; height : 600px; position: relative; overflow: hidden;">)

[//]: # (    <iframe src="https://public.tableau.com/views/FY20ProposedBudgetDashboardMayoralSubmission/District-wideSummary?:embed=y&:showVizHome=no&:host_url=https%3A%2F%2Fpublic.tableau.com%2F&:embed_code_version=3&:tabs=no&:toolbar=yes&:animate_transition=yes&:display_static_image=no&:display_spinner=no&:display_overlay=yes&:display_count=yes&:loadOrderID=0" )

[//]: # (    style="position:fixed;  width:100%; height:200%")

[//]: # (    ></iframe>)

[//]: # (</div>)

[//]: # ()
[//]: # ([//]: # &#40;  <figcaption markdown>&#41;)