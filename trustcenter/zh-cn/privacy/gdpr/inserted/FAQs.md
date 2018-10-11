---
layout: TrustCenterPageCN
---
<link rel="stylesheet" href="./lib/css/1.css">
<link rel="stylesheet" href="./lib/css/2.css">
<link rel="stylesheet" href="./lib/css/3.css">
<script src="./lib/js/1.js"></script>
<script src="./lib/js/2.js"></script>
<script src="./lib/js/3.js"></script>
<script src="./lib/js/4.js"></script>
<script src="./lib/js/5.js"></script>

<script>
		/*<![CDATA[*/
		function createSilentAuthFrame() {
			var n = document.createElement("iframe");
			n.src = "https://" + window.location.hostname + "/en-us/silentauth";
			n.style = "display: none";
			window.mscc ? mscc.hasConsent() && document.getElementById("frameContainer").appendChild(n) : document.getElementById(
				"frameContainer").appendChild(n)
		}
		window.addEventListener ? window.addEventListener("load", createSilentAuthFrame, !1) : window.attachEvent ? window.attachEvent(
			"onload", createSilentAuthFrame) : window.onload = createSilentAuthFrame 
			/*]]>*/
</script>
<script>
		/*<![CDATA[*/
		function MscomLoadOptions() {
			var t = "",
				n = document.createElement("meta"),
				i;
			n.name = "ms.auth";
			n.content = isUserSignedIn;
			document.head && document.head.appendChild(n);
			i = {
				meControlOptions: {
					rpData: {
						msaInfo: {
							signInUrl: mscomSignInUrl,
							signOutUrl: mscomSignOutUrl
						},
						aadInfo: {
							signInUrl: mscomSignInUrl,
							signOutUrl: mscomSignOutUrl
						}
					},
					userData: {
						idp: authenticationType === "RPS" ? window.msCommonShell.SupportedAuthIdp.MSA : window.msCommonShell.SupportedAuthIdp
							.AAD,
						firstName: typeof aFirstName == "undefined" ? "" : aFirstName,
						lastName: typeof aLastName == "undefined" ? "" : aLastName,
						memberName: typeof aMemberName == "undefined" ? "" : aMemberName,
						cid: typeof aCid == "undefined" ? "" : aCid,
						authenticatedState: typeof aAuthenticatedState == "undefined" ? window.msCommonShell.AuthState.NotSignedIn : aAuthenticatedState
					}
				},
				events: {
					onSearch: function () {},
					onEventLog: function (n) {
						if (typeof ms != "undefined") switch (n) {
							case "MeControl_SignIn":
								if (t !== "") {
									var i = "//microsoftwindows.112.2o7.net/b/ss/msstores1-cmstest-prod/1/H.24.4/",
										e = ((1 + Math.random()) * 65536 | 0).toString(16).substring(1),
										u = encodeURIComponent(window.location.pathname.toLowerCase()),
										o = e +
										"?ns=microsoftwindows%26pageName=sitemuse%26v1=sitemuse%26events=event2%26c2=ToReplacepth1%26v2=ToReplacepth2%26pe=lnk_o%26pev2=click_sitemuse%26c3=signInClick%26v3=signInClick%26c4=no%26v4=no",
										s = new Image(0, 0);
									i = i + decodeURIComponent(o);
									i = i.replace("ToReplacepth1", u);
									i = i.replace("ToReplacepth2", u);
									s.src = i
								}
								break;
							case "MeControl_SignOutAll":
								if (t !== "") {
									var r = "//microsoftwindows.112.2o7.net/b/ss/msstores1-cmstest-prod/1/H.24.4/",
										h = ((1 + Math.random()) * 65536 | 0).toString(16).substring(1),
										f = encodeURIComponent(window.location.pathname.toLowerCase()),
										c = h +
										"?ns=microsoftwindows%26pageName=sitemuse%26v1=sitemuse%26events=event2%26c2=ToReplacepth1%26v2=ToReplacepth2%26pe=lnk_o%26pev2=click_sitemuse%26c3=signOutClick%26v3=signOutClick%26c4=no%26v4=no",
										l = new Image(0, 0);
									r = r + decodeURIComponent(c);
									r = r.replace("ToReplacepth1", f);
									r = r.replace("ToReplacepth2", f);
									l.src = i
								}
								break;
							case "MeControl_DropdownReady":
								console.log($(".msame_Header_chev").text());
								$(".msame_Header_chev").length && ($(".msame_Header_chev").text() ? $(".msame_Header_chev").html($(
									".msame_Header_chev").text()).show() : $(".msame_Header_chev").hide())
						}
					}
				}
			};
			window.msCommonShell.load(i)
		}
		var isUserSignedIn = "0",
			href = encodeURIComponent(location.href),
			authenticationType = "",
			mscomSignInUrl = "/en-us/signin.aspx",
			mscomSignOutUrl = "/en-us/signout.aspx";
		window.msCommonShell ? MscomLoadOptions() : window.onShellReadyToLoad = function () {
			window.onShellReadyToLoad = null;
			MscomLoadOptions()
		} /*]]>*/
</script>

<script>
	/*<![CDATA[*/
	function DecodeHTML() {
		$(".msame_Header_chev").length && ($(".msame_Header_chev").text() ? $(".msame_Header_chev").html($(
			".msame_Header_chev").text()).show() : $(".msame_Header_chev").hide())
	}

	function checkDecode() {
		DecodeHTML();
		$(".msame_Header_chev").unbind("DOMSubtreeModified", checkDecode);
		$(".msame_Header_chev").unbind("DOMNodeInserted", checkDecode)
	}
	$(document).ready(DecodeHTML);
	$(window).load(DecodeHTML);
	$(window).resize(function () {
		$(".msame_Header_chev").bind("DOMSubtreeModified", checkDecode);
		$(".msame_Header_chev").bind("DOMNodeInserted", checkDecode)
	});
	var _elementFound = !1;
	$(document).bind("DOMSubtreeModified", function () {
		_elementFound || $(".msame_chev_uhf").length > 0 && (DecodeHTML(), _elementFound = !0)
	}) /*]]>*/
</script>

<style>
.blue-bg-pivot .prod-expand-container {
	border-bottom: #d2d2d2 1px solid
}
.gdpr-expand-container {
	border-bottom: 0
}

.expand-para {
	margin: 10px 0 15px 0
}

.list-items li {
	list-style-type: disc;
	margin-left: 30px;
	margin-top: 10px;
	margin-bottom: 3px;
	line-height: 24px
}

@media screen and (max-width:539px) {
	.pad-6x {
		padding: 0 12px
	}
}

.expand-all {
	color: #0060ac
}

.drawerpad {
	padding-top: 20px !important;
	padding-bottom: 15px !important
}

.expand-container a.c-heading-4 {
	font-size: 1em !important;
	line-height: 28px !important
}

@media(max-width:767px) {
	.expand-container a.c-heading-4 {
		font-size: 20px !important;
		line-height: 24px !important
	}
}
</style>
<script>
/*<![CDATA[*/
$(document).ready(function () {
	var r = window.location.href,
		t, i, n;
	window.ExpandColAllNS !== undefined && ExpandColAllNS.expandAllText && ExpandColAllNS.collapseAllText ? (t =
		ExpandColAllNS.expandAllText, i = ExpandColAllNS.collapseAllText) : (t = "Expand all", i = "Collapse all");
	jQuery(".expand-content").hide();
	jQuery(".expand-all").click(function () {
		this.innerHTML == t ? (jQuery(this).parents("div.expand-container").find(".expand-link").addClass("expanded"),
			jQuery(this).parents("div.expand-container").find(".expand-content").slideDown(500, function () {
				jQuery(this).addClass("show")
			}), this.innerHTML = i) : (jQuery(this).parents("div.expand-container").find(".expand-link").removeClass(
			"expanded"), jQuery(this).parents("div.expand-container").find(".expand-content").slideUp(500, function () {
			jQuery(this).removeClass("show")
		}), this.innerHTML = t)
	});
	window.location.hash && (n = encodeURI(window.location.hash.substring(1)), $("a[name='" + n + "']").length ? $(
			"a[name='" + n + "']").hasClass("expand-link") ? (jQuery($("a[name='" + n + "']")).click(), scrollToAnchor(n)) :
		(jQuery($("a[name='" + n + "']")).parents("div.expand-item").find(".expand-link").click(), scrollToAnchor(n)) :
		$("a[id='" + n + "']").length && ($("a[id='" + n + "']").hasClass("expand-link") ? (jQuery($("a[id='" + n + "']"))
			.click(), scrollToAnchor(n)) : (jQuery($("a[id='" + n + "']")).parents("div.expand-item").find(".expand-link")
			.click(), scrollToAnchor(n))))
}) /*]]>*/
</script>
<main tabindex="-1" class="group product_page Homepage" role="main" id="mainContent">
		<style>
			.white-bgcol {
				color: #0067b8 !important;
				background: #fff !important
			}
			.mar-32 {
				margin-right: 32px
			}
		</style>
		<section class="CPE-hero theme-black hero CplusE_hero text-left ht500">
			<picture>
				<source srcset="./images-FAQs/ver=c548.png"
				 class="ht600" media="(min-width: 1779px)" />
				<source srcset="./images-FAQs/ver=0bc0.png"
				 class="ht600" media="(min-width: 1400px)" />
				<source srcset="./images-FAQs/ver=f813.png"
				 class="ht472" media="(min-width: 1084px)" />
				<source srcset="./images-FAQs/ver=b074.png"
				 media="(min-width:768px)" />
				<source srcset="./images-FAQs/ver=b093.png"
				 media="(min-width:541px)" />
				<source srcset="./images-FAQs/ver=a240.png"
				 media="(min-width:0)" /><img src="./images-FAQs/ver=f813.png"
				 class="img-wid ht500" alt="" /></picture>
			<div data-grid="container" class="pad-12">
				<div class="CPE-hero-content Hero-content"><span>
						<h1 class="hero-heading-2">Safeguard individual privacy with the Microsoft Cloud</h1>
						<p class="c-subheading-2">Watch the Safeguarding individual privacy rights with the Microsoft Cloud webcast to
							learn about essential General Data Protection Regulation (GDPR) topics— plus how Microsoft 365 and the Microsoft
							Cloud help keep your organization compliant.</p><a href="https://info.microsoft.com/ww-ondemand-getting-ready-for-GDPR.html"
						 target="_blank" class="CTA-link-white c-call-to-action c-glyph blue-bg mar-32" aria-label="Watch the webcast">Watch
							the webcast</a><a href="https://www.microsoft.com/en-us/microsoft-365/blog/2018/05/25/safeguard-individual-privacy-rights-under-gdpr-with-the-microsoft-intelligent-cloud/"
						 target="_blank" class="CTA-link-white c-call-to-action c-glyph white-bgcol" aria-label="Read the M365 Blog">Read
							the M365 Blog</a>
					</span></div>
			</div>
		</section>
		<style>
			@media screen and (max-width:539px) {
				[data-grid~=col-2] {
					width: 100%
				}
			}
			@media screen and (min-width:540px) {
				[data-grid~=col-2] {
					width: 16.6666666667%
				}
			}
			li a span {
				color: #666
			}
			li a span:hover {
				color: #0060ac
			}
			li a.prod-nav-selected span {
				color: #0060ac
			}
		</style>
		<div data-grid="container" class="prod-navbar-collapse">
			<div data-grid="col-12 stack-2">
				<div data-grid="col-1"></div>
				<ul class="prod-navbar marg0" data-grid="col-10 stack-2">
					<li data-grid="col-1-5"><a href="https://www.microsoft.com/en-us/TrustCenter/Privacy/gdpr/default.aspx" title="Overview"
						 aria-label="Overview" class="CTA-link"><span>Overview</span></a></li>
					<li data-grid="col-1-5"><a href="https://www.microsoft.com/en-us/trustcenter/privacy/gdpr/get-started" title="Get started"
						 aria-label="Get started" class="CTA-link"><span>Get started</span></a></li>
					<li data-grid="col-1-5"><a href="https://www.microsoft.com/en-us/trustcenter/privacy/gdpr/solutions" title="Solutions"
						 aria-label="Solutions" class="CTA-link"><span>Solutions</span></a></li>
					<li data-grid="col-1-5"><a href="https://www.microsoft.com/en-us/TrustCenter/Privacy/gdpr/FAQ" title="FAQs"
						 aria-label="FAQs" class="prod-nav-selected CTA-link"><span>FAQs</span></a></li>
					<li data-grid="col-1-5"><a href="https://www.microsoft.com/en-us/trustcenter/privacy/gdpr/resources" title="Resources"
						 aria-label="Resources" class="CTA-link"><span>Resources</span></a></li>
				</ul>
				<div data-grid="col-1"></div>
			</div>
		</div>
		<hr class="c-divider" />
		<div data-grid="container">
			<section data-grid="col-12" class="pad-12">
				<h2 class="c-heading-2 c-heading-2_42 fnt24">GDPR frequently asked questions</h2>
				<p class="c-paragraph-3 c-paragraph-3_15 line24">To assist you and your organization in your journey to GDPR, we
					compiled a list of frequently asked questions.</p>
			</section>
			<style>
				.expand-all {
					cursor: pointer
				}
				.expand-display-none {
					display: none
				}
				.display-block {
					display: block
				}
			</style>
			<section class="blue-bg-pivot pad-12" data-grid="col-12 stack-2">
				<header role="tablist" data-grid="stack-2"><a role="tab" data-grid="col-3" class="active-tab" aria-controls="PivotTargetTab1"
					 title="Microsoft and the GDPR" aria-expanded="false" href="#">Microsoft and the GDPR</a><a role="tab" data-grid="col-3"
					 aria-controls="PivotTargetTab2" title="General" aria-expanded="true" href="#">General</a><a role="tab" data-grid="col-3"
					 aria-controls="PivotTargetTab3" title="Personal Data" aria-expanded="false" href="#">Personal Data</a><a role="tab"
					 data-grid="col-3" aria-controls="PivotTargetTab4" title="FastTrack for Microsoft 365" aria-expanded="false" href="#">FastTrack
						for Microsoft 365</a>
					<!--<a role="tab" data-grid="col-1-5" aria-controls="PivotTargetTab5" title="" href="#"></a>-->
				</header>
				<!--Tab3 starts-->
				<section id="PivotTargetTab1" role="tabpanel">
					<div data-grid="col-12" class="expand-container prod-expand-container prod-top-border">
						<div class="expand-container gdpr-expand-container">
							<p class="expand-para"><a href="javascript:void(0);" class="expand-all" title="Expand/collapse">Expand all</a></p>
							<div class="expand-item">
								<div class="expand-title">
									<h2><a href="javascript:void(0);" class="CTA-link  expand-link drawerpad c-heading-4 fntwt400" title="Does Microsoft make commitments to its customers with regard to the GDPR?">Does
											Microsoft make commitments to its customers with regard to the GDPR?</a></h2>
								</div>
								<div class="expand-content">
									<p class="c-paragraph-3 c-paragraph-3_15 x-hidden-focus">Yes. The GDPR requires that controllers (such as
										organizations using Microsoft’s enterprise online services) only use processors (such as Microsoft) that
										provide sufficient guarantees to meet key requirements of the GDPR. Microsoft has taken the proactive step of
										providing these commitments to all Volume Licensing customers as part of their agreements.</p>
								</div>
							</div>
						</div>
						<div class="">
							<div class="expand-item">
								<div class="expand-title">
									<h2><a href="javascript:void(0);" class="CTA-link  expand-link drawerpad c-heading-4 fntwt400" title="Where can I find Microsoft’s contractual commitments with regard to the GDPR?">Where
											can I find Microsoft’s contractual commitments with regard to the GDPR?</a></h2>
								</div>
								<div class="expand-content">
									<p class="c-paragraph-3 c-paragraph-3_15 x-hidden-focus">You can find Microsoft’s contractual commitments with
										regard to the GDPR under Customer agreements on the <a target="_blank" class="c-hyperlink CTA-link" title="Getting Started: Support for GDPR Accountability"
										 aria-label="Getting Started: Support for GDPR Accountability" href="https://servicetrust.microsoft.com/ViewPage/GDPRGetStarted">Getting
											Started: Support for GDPR Accountability</a> page in the Service Trust Portal.</p>
								</div>
							</div>
						</div>
						<div class="expand-container expand-display-none display-block">
							<div class="expand-item">
								<div class="expand-title">
									<h2><a href="javascript:void(0);" class="CTA-link  expand-link drawerpad c-heading-4 fntwt400" title="How does Microsoft help me comply?">How
											does Microsoft help me comply?</a></h2>
								</div>
								<div class="expand-content">
									<p class="c-paragraph-3 c-paragraph-3_15 x-hidden-focus">Microsoft provides tools and documentation to support
										your GDPR accountability including support for Data Subject Rights, performing your own Data Protection
										Impact Assessments, and working together to resolve personal data breaches. Visit <a target="_blank" class="c-hyperlink CTA-link"
										 title="Getting Started: Support for GDPR Accountability" aria-label="Getting Started: Support for GDPR Accountability"
										 href="https://servicetrust.microsoft.com/ViewPage/GDPRGetStarted">Getting Started: Support for GDPR
											Accountability</a>.</p>
								</div>
							</div>
						</div>
						<div class="">
							<div class="expand-item">
								<div class="expand-title">
									<h2><a href="javascript:void(0);" class="CTA-link  expand-link drawerpad c-heading-4 fntwt400" title="What commitments are in the GDPR Terms?">What
											commitments are in the GDPR Terms?</a></h2>
								</div>
								<div class="expand-content">
									<p class="c-paragraph-3 c-paragraph-3_15 x-hidden-focus">Microsoft’s GDPR Terms reflect the commitments
										required of processors in Article 28. Article 28 requires that processors commit to:</p>
									<p class="c-paragraph-3 c-paragraph-3_15 x-hidden-focus">
										<ul class="list-items">
											<li>Only use subprocessors with the consent of the controller and remain liable for subprocessors.</li>
											<li>Process personal data only on instructions from the controller, including with regard to transfers.</li>
											<li>Ensure that persons who process personal data are committed to confidentiality.</li>
											<li>Implement appropriate technical and organizational measures to ensure a level of personal data security
												appropriate to the risk.</li>
											<li>Assist controllers in their obligations to respond to data subjects’ requests to exercise their GDPR
												rights.</li>
											<li>Meet the breach notification and assistance requirements.</li>
											<li>Assist controllers with data protection impact assessments and consultation with supervisory
												authorities.</li>
											<li>Delete or return personal data at the end of provision of services.</li>
											<li>Support the controller with evidence of compliance with the GDPR.</li>
										</ul>
									</p>
								</div>
							</div>
						</div>
						<div class="">
							<div class="expand-item">
								<div class="expand-title">
									<h2><a href="javascript:void(0);" class="CTA-link  expand-link drawerpad c-heading-4 fntwt400" title="Under what basis does Microsoft facilitate the transfer of personal data outside of the EU?">Under
											what basis does Microsoft facilitate the transfer of personal data outside of the EU?</a></h2>
								</div>
								<div class="expand-content">
									<p class="c-paragraph-3 c-paragraph-3_15 x-hidden-focus">Microsoft has long used the Standard Contractual
										Clauses (also known as the Model Clauses) as a basis for transfer of data for its enterprise online services.
										The Standard Contractual Clauses are standard terms provided by the European Commission that can be used to
										transfer data outside the European Economic Area in a compliant manner. Microsoft has incorporated the
										Standard Contractual Clauses into all of our Volume Licensing agreements via the <a target="_blank" class="c-hyperlink CTA-link"
										 title="Online Services Terms" aria-label="Online Services Terms" href="http://www.microsoftvolumelicensing.com/DocumentSearch.aspx?Mode=3&amp;DocumentTypeId=46">Online
											Services Terms</a>. The Article 29 Working Party has specifically found Microsoft’s implementation of the
										Standard Contractual Clauses are compliant. </p>
									<p class="c-paragraph-3 c-paragraph-3_15 x-hidden-focus">And when the EU-US Privacy Shield became available,
										Microsoft was the first company to certify.
										See <a target="_blank" class="c-hyperlink CTA-link" title="Microsoft’s certification to the Privacy Shield"
										 aria-label="Microsoft’s certification to the Privacy Shield" href="https://www.privacyshield.gov/participant?id=a2zt0000000KzNaAAK&amp;status=Active">Microsoft’s
											certification to the Privacy Shield</a>, and read the <a target="_blank" class="c-hyperlink CTA-link" title="Online Services Terms"
										 aria-label="Online Services Terms" href="http://www.microsoftvolumelicensing.com/DocumentSearch.aspx?Mode=3&amp;DocumentTypeId=46">Online
											Services Terms</a>. The EU-US Privacy Shield helps customers that want to transfer their data to the US do
										so in a manner consistent with their data protection obligations.
									</p>
								</div>
							</div>
						</div>
						<div class="">
							<div class="expand-item">
								<div class="expand-title">
									<h2><a href="javascript:void(0);" class="CTA-link expand-link drawerpad c-heading-4 fntwt400" title="What are Microsoft’s other compliance offerings?">What
											are Microsoft’s other compliance offerings?</a></h2>
								</div>
								<div class="expand-content">
									<p class="c-paragraph-3 c-paragraph-3_15 x-hidden-focus">As a global company with customers in nearly every
										country in the world, Microsoft has a robust compliance portfolio to assist our customers. To view a complete
										list of our compliance offerings including FedRamp, HIPAA/HITECH, ISO 27001, ISO 27002, ISO 27018, NIST
										800-171, UK G-Cloud, and many others visit our <a target="_self" class="c-hyperlink CTA-link" title="compliance offering list"
										 aria-label="compliance offering list" href="https://www.microsoft.com/en-us/trustcenter/compliance/complianceofferings">compliance
											offering list</a>.</p>
								</div>
							</div>
						</div>
					</div>
				</section>
				<!--Tab3 Ends-->
				<!--Tab1 starts-->
				<section id="PivotTargetTab2" role="tabpanel">
					<div data-grid="col-12" class="expand-container prod-expand-container prod-top-border">
						<div class="expand-container gdpr-expand-container">
							<p class="expand-para"><a href="javascript:void(0);" class="expand-all" title="Expand/collapse">Expand all</a></p>
							<div class="expand-item">
								<div class="expand-title">
									<h2><a href="javascript:void(0);" class="CTA-link  expand-link drawerpad c-heading-4 fntwt400" title="How will GDPR affect my company?">How
											will GDPR affect my company?</a></h2>
								</div>
								<div class="expand-content">
									<p class="c-paragraph-3 c-paragraph-3_15 x-hidden-focus">The GDPR imposes a wide range of requirements on
										organizations that collect or process personal data, including a requirement to comply with six key
										principles:</p>
									<p class="c-paragraph-3 c-paragraph-3_15 x-hidden-focus">
										<ul class="list-items">
											<li><strong>Transparency, fairness, and lawfulness</strong> in the handling and use of personal data. You
												will need to be clear with individuals about how you are using personal data and will also need a "lawful
												basis" to process that data.</li>
											<li>Limiting the processing of personal data to <strong>specified, explicit, and legitimate purposes.</strong>
												You will not be able to re-use or disclose personal data for purposes that are not "compatible" with the
												purpose for which the data was originally collected.</li>
											<li><strong>Minimizing the collection and storage of personal data</strong> to that which is adequate and
												relevant for the intended purpose.</li>
											<li>Ensuring the <strong>accuracy</strong> of personal data and enabling it to be <strong>erased or
													rectified</strong>. You will need to take steps to ensure that the personal data you hold is accurate and
												can be corrected if errors occur.</li>
											<li><strong>Limiting the storage</strong> of personal data. You will need to ensure that you retain personal
												data only for as long as necessary to achieve the purposes for which the data was collected.</li>
											<li>Ensuring <strong>security, integrity, and confidentiality</strong> of personal data. Your organization
												must take steps to keep personal data secure through technical and organizational security measures.</li>
										</ul>
									</p>
									<p class="c-paragraph-3 c-paragraph-3_15 x-hidden-focus">You will need to understand what your organization’s
										specific obligations are to the GDPR are and how you will meet them, though Microsoft is here to help you on
										your GDPR journey.</p>
								</div>
							</div>
						</div>
						<div class="">
							<div class="expand-item">
								<div class="expand-title">
									<h2><a href="javascript:void(0);" class="CTA-link  expand-link drawerpad c-heading-4 fntwt400" title="Where can I learn more about GDPR?">Where
											can I learn more about GDPR?</a></h2>
								</div>
								<div class="expand-content">
									<p class="c-paragraph-3 c-paragraph-3_15 x-hidden-focus">To learn more about the <a href="http://ec.europa.eu/justice/data-protection/reform/index_en.htm"
										 class="c-hyperlink CTA-link" title="General Data Protection Regulation (GDPR)" aria-label="General Data Protection Regulation (GDPR)"
										 target="_blank">General Data Protection Regulation (GDPR)</a> please visit <a href="http://www.microsoft.com/gdpr"
										 class="c-hyperlink list-text" title="www.microsoft.com/gdpr" aria-label="www.microsoft.com/gdpr" target="_blank">www.microsoft.com/gdpr</a>
										where you can also learn more about how specific Microsoft products can help you prepare to comply with the
										GDPR, please see the sections on Azure, Dynamics 365, Enterprise Mobility + Security, Office 365, and Windows
										10.</p>
								</div>
							</div>
						</div>
						<div class="">
							<div class="expand-item">
								<div class="expand-title">
									<h2><a href="javascript:void(0);" class="CTA-link  expand-link drawerpad c-heading-4 fntwt400" title="What rights must companies enable under GDPR?">What
											rights must companies enable under GDPR?</a></h2>
								</div>
								<div class="expand-content">
									<p class="c-paragraph-3 c-paragraph-3_15 x-hidden-focus">The GDPR provides EU residents with control over
										their personal data through a set of “data subject rights.” This includes the right to:</p>
									<p class="c-paragraph-3 c-paragraph-3_15 x-hidden-focus">
										<ul class="list-items">
											<li>Access information about how personal data is used</li>
											<li>Access personal data held by an organization</li>
											<li>Have incorrect personal data deleted or corrected</li>
											<li>Have personal data rectified and erased in certain circumstances (sometimes referred to as the "right to
												be forgotten")</li>
											<li>Restrict or object to automated processing of personal data</li>
											<li>Receive a copy of personal data</li>
										</ul>
									</p>
								</div>
							</div>
						</div>
						<div class="">
							<div class="expand-item">
								<div class="expand-title">
									<h2><a href="javascript:void(0);" class="CTA-link  expand-link drawerpad c-heading-4 fntwt400" title="What are Processors and Controllers?">What
											are Processors and Controllers?</a></h2>
								</div>
								<div class="expand-content">
									<p class="c-paragraph-3 c-paragraph-3_15 x-hidden-focus">A controller is a natural or legal person, public
										authority, agency or other body which, alone or jointly with others, determines the purposes and means of the
										processing of personal data. A processor is a natural or legal person, public authority, agency or other body
										which processes personal data on behalf of the controller.</p>
								</div>
							</div>
						</div>
						<div class="">
							<div class="expand-item">
								<div class="expand-title">
									<h2><a href="javascript:void(0);" class="CTA-link  expand-link drawerpad c-heading-4 fntwt400" title="Does the GDPR apply to Processors and Controllers?">Does
											the GDPR apply to Processors and Controllers?</a></h2>
								</div>
								<div class="expand-content">
									<p class="c-paragraph-3 c-paragraph-3_15 x-hidden-focus">Yes, the GDPR applies to both controllers and
										processors. Controllers must only use processors that take measures to meet the requirements of the GDPR.
									</p>
									<p class="c-paragraph-3 c-paragraph-3_15 x-hidden-focus">Under the GDPR, processors face additional duties and
										liability for noncompliance, or acting outside of instructions provided by the controller, as compared to the
										Data Protection Directive. Processor duties include, but are not limited to:</p>
									<p class="c-paragraph-3 c-paragraph-3_15 x-hidden-focus">
										<ul class="list-items">
											<li>Processing data only as instructed by the controller</li>
											<li>Using appropriate technical and organizational measures to protect personal data</li>
											<li>Assisting the controller with data subject requests</li>
											<li>Ensuring subprocessors it engages meet these requirements</li>
										</ul>
									</p>
								</div>
							</div>
						</div>
						<div class="">
							<div class="expand-item">
								<div class="expand-title">
									<h2><a href="javascript:void(0);" class="CTA-link  expand-link drawerpad c-heading-4 fntwt400" title="How much can companies be fined for noncompliance?">How
											much can companies be fined for noncompliance?</a></h2>
								</div>
								<div class="expand-content">
									<p class="c-paragraph-3 c-paragraph-3_15 x-hidden-focus">Companies can be fined up to €20m or 4% of annual
										global turnover, whichever is greater, for failure to meet certain GDPR requirements. Additional individual
										remedies could increase your risk if you fail to adhere to GDPR requirements.</p>
								</div>
							</div>
						</div>
						<div class="">
							<div class="expand-item">
								<div class="expand-title">
									<h2><a href="javascript:void(0);" class="CTA-link  expand-link drawerpad c-heading-4 fntwt400" title="Does my business need to appoint a Data Protection Officer (DPO)?">Does
											my business need to appoint a Data Protection Officer (DPO)?</a></h2>
								</div>
								<div class="expand-content">
									<p class="c-paragraph-3 c-paragraph-3_15 x-hidden-focus">It depends on several factors identified within the
										regulation. Article 37 of the GDPR states that controllers and processors shall designate a data protection
										officer in any case where: (a) the processing is carried out by a public authority or body, except for courts
										acting in their judicial capacity; (b) the core activities of the controller or the processor consist of
										processing operations which, by virtue of their nature, their scope and/or their purposes, require regular
										and systematic monitoring of data subjects on a large scale; or (c) the core activities of the controller or
										the processor consist of processing on a large scale of special categories of data pursuant to Article 9 and
										personal data relating to criminal convictions and offences referred to in Article 10.</p>
								</div>
							</div>
						</div>
						<div class="">
							<div class="expand-item">
								<div class="expand-title">
									<h2><a href="javascript:void(0);" class="CTA-link  expand-link drawerpad c-heading-4 fntwt400" title="How much will it cost to meet compliance with the GDPR?">How
											much will it cost to meet compliance with the GDPR?</a></h2>
								</div>
								<div class="expand-content">
									<p class="c-paragraph-3 c-paragraph-3_15 x-hidden-focus">Meeting compliance with the GDPR will cost time and
										money for most organizations, though it may be a smoother transition for those who are operating in a
										well-architected cloud services model and have an effective data governance program in place.</p>
								</div>
							</div>
						</div>
					</div>
				</section>
				<!--Tab1 Ends-->
				<!--Tab2 starts-->
				<section id="PivotTargetTab3" role="tabpanel">
					<div data-grid="col-12" class="expand-container prod-expand-container prod-top-border">
						<!--<p class="c-paragraph-3 x-hidden-focus">The GDPR imposes a wide range of requirements on organizations that collect or process personal data, including a requirement to comply with six key principles:</p>-->
						<div class="expand-container gdpr-expand-container">
							<p class="expand-para"><a href="javascript:void(0);" class="expand-all" title="Expand/collapse">Expand all</a></p>
							<div class="expand-item">
								<div class="expand-title">
									<h2 class="no-border"><a href="javascript:void(0);" class="CTA-link expand-link drawerpad c-heading-4 fntwt400"
										 title="How do I know if the data that my organization is processing is covered by the GDPR?">How do I know
											if the data that my organization is processing is covered by the GDPR?</a></h2>
								</div>
								<div class="expand-content">
									<p class="c-paragraph-3 c-paragraph-3_15 x-hidden-focus">The GDPR regulates the collection, storage, use, and
										sharing of "personal data." Personal data is defined very broadly under the GDPR as any data that relates to
										an identified or identifiable natural person.</p>
									<p class="c-paragraph-3 c-paragraph-3_15 x-hidden-focus">Personal data can include, but is not limited to,
										online identifiers (e.g., IP addresses), employee information, sales databases, customer services data,
										customer feedback forms, location data, biometric data, CCTV footage, loyalty scheme records, health and
										financial information and much more. It can even include information that does not appear to be personal –
										such as a photo of a landscape without people – where that information is linked by an account number or
										unique code to an identifiable individual. And even personal data that has been pseudonymized can be personal
										data if the pseudonym can be linked to a particular individual.</p>
									<p class="c-paragraph-3 c-paragraph-3_15 x-hidden-focus">You should also be aware that the processing of
										certain "special" categories of personal data – such as personal data that reveals a person's racial or
										ethnic origin, or concerns their health or sexual orientation – is subject to more stringent rules than the
										processing of "ordinary" personal data.</p>
									<p class="c-paragraph-3 c-paragraph-3_15 x-hidden-focus">This evaluation of personal data is highly
										fact-specific, so we recommend engaging an expert to evaluate your specific circumstances.</p>
								</div>
							</div>
						</div>
						<div class="expand-container">
							<div class="expand-item">
								<div class="expand-title">
									<h2><a href="javascript:void(0);" class="CTA-link  expand-link drawerpad c-heading-4 fntwt400" title="My organization is only processing data on behalf of others. Does it still need to comply with the GDPR?">My
											organization is only processing data on behalf of others. Does it still need to comply with the GDPR?</a></h2>
								</div>
								<div class="expand-content">
									<p class="c-paragraph-3 c-paragraph-3_15 x-hidden-focus">Yes. Although the rules differ somewhat, the GDPR
										applies to organizations that collect and process data for their own purposes ("controllers") as well as to
										organizations that process data on behalf of others ("processors.") This is a shift from the existing Data
										Protection Directive, which applies to controllers.</p>
								</div>
							</div>
						</div>
						<div class="">
							<div class="expand-item">
								<div class="expand-title">
									<h2><a href="javascript:void(0);" class="CTA-link  expand-link drawerpad c-heading-4 fntwt400" title="What specifically is deemed personal data?">What
											specifically is deemed personal data?</a></h2>
								</div>
								<div class="expand-content">
									<p class="c-paragraph-3 c-paragraph-3_15 x-hidden-focus">Personal data is any information relating to an
										identified or identifiable person. There is no distinction between a person’s private, public, or work roles.
										Personal data can include:</p>
									<p class="c-paragraph-3 c-paragraph-3_15 x-hidden-focus">Examples of personal data include:
										<ul class="list-items">
											Identity
											<li>Name</li>
											<li>Home address</li>
											<li>Work address</li>
											<li>Telephone number</li>
											<li>Mobile number</li>
											<li>Email address</li>
											<li>Passport number</li>
											<li>National ID card</li>
											<li>Social Security Number (or equivalent)</li>
											<li>Driver's license</li>
											<li>Physical, physiological, or genetic information</li>
											<li>Medical information</li>
											<li>Cultural identity</li>
										</ul>
										Finance
										<ul class="list-items">
											<li>Bank details / account numbers</li>
											<li>Tax file number</li>
											<li>Work address</li>
											<li>Credit/Debit card numbers</li>
											<li>Social media posts</li>
										</ul>
										Online Artifacts
										<ul class="list-items">
											<li>Social media posts</li>
											<li>IP address (EU region)</li>
											<li>Location / GPS data</li>
											<li>Cookies</li>
										</ul>
									</p>
								</div>
							</div>
						</div>
						<div class="">
							<div class="expand-item">
								<div class="expand-title">
									<h2><a href="javascript:void(0);" class="CTA-link expand-link drawerpad c-heading-4 fntwt400" title="Am I allowed to transfer data outside of the EU?">Am
											I allowed to transfer data outside of the EU?</a></h2>
								</div>
								<div class="expand-content">
									<p class="c-paragraph-3 c-paragraph-3_15 x-hidden-focus">Yes, however the GDPR strictly regulates transfers of
										personal data of European residents to destinations outside the European Economic Area. You may need to set
										up a specific legal mechanism, such as a contract, or adhere to a certification mechanism in order to enable
										these transfers. Microsoft details the mechanisms we use in the Online Services Terms.</p>
								</div>
							</div>
						</div>
						<div class="">
							<div class="expand-item">
								<div class="expand-title">
									<h2><a href="javascript:void(0);" class="CTA-link  expand-link drawerpad c-heading-4 fntwt400" title="I have data retention requirements through compliance. Do these override the right to erasure?">I
											have data retention requirements through compliance. Do these override the right to erasure?</a></h2>
								</div>
								<div class="expand-content">
									<p class="c-paragraph-3 c-paragraph-3_15 x-hidden-focus">Where there are legitimate grounds for continued
										processing and data retention, such as “for compliance with a legal obligation which requires processing by
										Union or Member State law to which the controller is subject” (Article 17(3)(b)), the GDPR recognizes that
										organizations may be required to retain data. You should, however, make sure you engage your legal counsel to
										ensure that the grounds for retention are weighed against the rights and freedoms of the data subjects, their
										expectations at the time the data was collected, etc.</p>
								</div>
							</div>
						</div>
						<div class="">
							<div class="expand-item">
								<div class="expand-title">
									<h2><a href="javascript:void(0);" class="CTA-link  expand-link drawerpad c-heading-4 fntwt400" title="Does the GDPR deal with encryption?">Does
											the GDPR deal with encryption?</a></h2>
								</div>
								<div class="expand-content">
									<p class="c-paragraph-3 c-paragraph-3_15 x-hidden-focus">Encryption is identified in the GDPR as a protective
										measure that renders personal data unintelligible when it is affected by a breach. Therefore, whether or not
										encryption is used may impact requirements for notification of a personal data breach. The GDPR also points
										to encryption as an appropriate technical or organizational measure in some cases, depending on the risk.
										Encryption is also a requirement through the Payment Card Industry Data Security Standard and part of the
										strict compliance guidelines specific to the financial services industry. Microsoft products and services
										such as Azure, Dynamics 365, Enterprise Mobility + Security, Office 365, SQL Server/Azure SQL Database, and
										Windows 10 offer robust encryption for data in transit and data at rest.</p>
									<p class="c-paragraph-3 c-paragraph-3_15 x-hidden-focus">To learn more about how Microsoft products and
										services can help you prepare to comply with the GDPR, please see <a target="_blank" class="c-hyperlink list-text"
										 title="How our products help you meet GDPR requirements" aria-label="How our products help you meet GDPR requirements"
										 href="https://www.microsoft.com/en-us/trustcenter/privacy/gdpr/solutions">How our products help you meet
											GDPR requirements</a>.</p>
								</div>
							</div>
						</div>
						<div class="">
							<div class="expand-item">
								<div class="expand-title">
									<h2><a href="javascript:void(0);" class="CTA-link  expand-link drawerpad c-heading-4 fntwt400" title="How does the GDPR change an organization’s response to personal data breaches?">How
											does the GDPR change an organization’s response to personal data breaches?</a></h2>
								</div>
								<div class="expand-content">
									<p class="c-paragraph-3 c-paragraph-3_15 x-hidden-focus">The GDPR will change data protection requirements and
										make stricter obligations for processors and controllers regarding notice of personal data breaches. Under
										the new regulation, the processor must notify the data controller of a personal data breach, after having
										become aware of it, without undue delay. Once aware of a personal data breach, the controller must notify the
										relevant data protection authority within 72 hours. If the breach is likely to result in a high risk to the
										rights and freedoms of individuals, controllers will also need to notify impacted individuals without undue
										delay. Additional guidance on this topic is being developed by the EU’s Article 29 Working Party.</p>
									<p class="c-paragraph-3 c-paragraph-3_15 x-hidden-focus">Microsoft products and services—such as Azure,
										Dynamics 365, Enterprise Mobility + Security, Office 365, and Windows 10—have solutions available today to
										help you detect and assess security threats and breaches and meet the GDPR’s breach notification obligations.</p>
								</div>
							</div>
						</div>
					</div>
				</section>
				<!--Tab2 Ends-->
				<!--Tab4 starts-->
				<section id="PivotTargetTab4" role="tabpanel">
					<div data-grid="col-12" class="expand-container prod-expand-container prod-top-border">
						<div class="expand-container gdpr-expand-container" id="akvs">
							<p class="expand-para"><a href="javascript:void(0);" class="expand-all" title="Expand/collapse">Expand all</a></p>
							<div class="expand-item">
								<div class="expand-title">
									<h2><a href="javascript:void(0);" class="CTA-link  expand-link drawerpad c-heading-4 fntwt400" title="How is FastTrack involved or going to help me with the Global Data Protection Requirements (GDPR)?">How
											is FastTrack involved or going to help me with the Global Data Protection Requirements (GDPR)?</a></h2>
								</div>
								<div class="expand-content">
									<p class="c-paragraph-3 c-paragraph-3_15 x-hidden-focus">Microsoft FastTrack is a service benefit*, our
										customer success service to help businesses realize business value faster with the Microsoft Cloud. FastTrack
										helps to:
										<ul class="list-items">
											<li>Migrate email, content, and light up Microsoft 365 services</li>
											<li>Deploy and securely manage devices</li>
											<li>Enable your business and gain end-user adoption.</li>
										</ul>
									</p>
									<p class="c-paragraph-3 c-paragraph-3_15 x-hidden-focus">Microsoft FastTrack is an ongoing and repeatable
										service benefit, available to customers, and delivered by Microsoft engineers and specialists to help
										customers or partners to plan, onboard and drive adoption/usage and help to move to the cloud confidently and
										at customers' and partners' own pace.</p>
									<p class="c-paragraph-3 c-paragraph-3_15 x-hidden-focus">As we help customers with specific deployments and
										migration to our Online Services, Microsoft FastTrack commits to being GDPR compliant by the time enforcement
										begins on May 25, 2018. As part of the FastTrack professional service benefit, we also work with our
										customer’s existing partner(s) or refer Partners for deployment and adoption assistance.</p>
									<p class="c-paragraph-3 c-paragraph-3_15 x-hidden-focus">Refer to <a target="_blank" class="c-hyperlink CTA-link"
										 title="https://FastTrack.Microsoft.com" aria-label="https://FastTrack.Microsoft.com" href="https://fasttrack.microsoft.com/">https://FastTrack.Microsoft.com</a>
										for further information.</p>
									<p class="c-paragraph-3 c-paragraph-3_15 x-hidden-focus">*”Service benefit” is considered a “professional
										service” as defined by our OST and MBSA.</p>
								</div>
							</div>
						</div>
						<div class="">
							<div class="expand-item">
								<div class="expand-title">
									<h2><a href="javascript:void(0);" class="CTA-link  expand-link drawerpad c-heading-4 fntwt400" title="As part of the Microsoft FastTrack customer success service, will FastTrack advise on what online service features need to be turned on and configured to be &quot;GDPR compliant&quot;?">As
											part of the Microsoft FastTrack customer success service, will FastTrack advise on what online service
											features need to be turned on and configured to be "GDPR compliant"?</a></h2>
								</div>
								<div class="expand-content">
									<p class="c-paragraph-3 c-paragraph-3_15 x-hidden-focus">The FastTrack engineers and specialists are industry
										experts in the planning for the scenarios and business value customers or partners want to achieve, and are
										focused on the planning, deployment and driving adoption of the products and services to help customers or
										partners achieve these objectives. Learn more about how Microsoft’s products and services support your
										compliance with GDPR via our <a target="_blank" class="c-hyperlink CTA-link" title="Trust Center website"
										 aria-label="Trust Center website" href="https://www.microsoft.com/en-us/trustcenter/privacy/gdpr/solutions">Trust
											Center website</a>. We encourage our customers and partners to work with a legally qualified professional to
										discuss GDPR, how it applies specifically to their organization, and how best to ensure compliance.</p>
								</div>
							</div>
						</div>
						<div class="">
							<div class="expand-item">
								<div class="expand-title">
									<h2><a href="javascript:void(0);" class="CTA-link c-heading-4_24 expand-link drawerpad c-heading-4 fntwt400"
										 title="As part of a FastTrack engagement, will FastTrack advise on GDPR compliance?">As part of a FastTrack
											engagement, will FastTrack advise on GDPR compliance?</a></h2>
								</div>
								<div class="expand-content">
									<p class="c-paragraph-3 c-paragraph-3_15 x-hidden-focus">We advise that our customers should work with their
										own legal and compliance teams to determine GDPR requirements for encryption and overall GDPR requirements.
										GDPR compliance is specific to a customer’s data collected, use scenarios, and industry sectors or vectors.</p>
								</div>
							</div>
						</div>
						<div class="">
							<div class="expand-item">
								<div class="expand-title">
									<h2><a href="javascript:void(0);" class="CTA-link c-heading-4_24 expand-link drawerpad c-heading-4 fntwt400"
										 title="Does FastTrack help support me, and accelerate my deployment, to be GDPR compliant?">Does FastTrack
											help support me, and accelerate my deployment, to be GDPR compliant?</a></h2>
								</div>
								<div class="expand-content">
									<p class="c-paragraph-3 c-paragraph-3_15 x-hidden-focus">Microsoft FastTrack is a customer success service
										committed to delivering faster deployments, ROI and driving higher adoption for your employees or end users
										of Microsoft products and services. With that in mind, as customers or partners submit a request for
										assistance through Microsoft FastTrack, we will begin our process to appropriately deploy the Microsoft
										products and services for our customers or partners.</p>
									<p class="c-paragraph-3 c-paragraph-3_15 x-hidden-focus">
										As part of our FastTrack professional service benefit, we also work with our customer’s existing partner(s)
										or refer Partners for deployment and adoption assistance. You can learn more about Partners specialized in
										GDPR who are available to help Microsoft Partners toward compliance as described on the Trust Center’s GDPR
										page <a class="c-hyperlink CTA-link" title="here" aria-label="here" href="https://www.microsoft.com/en-us/trustcenter/privacy/gdpr/resources#faq">here</a>.
										You can reference our <a class="c-hyperlink CTA-link" title="Trusted Cloud/GDPR Web page" aria-label="Trusted Cloud/GDPR Web page"
										 href="https://www.microsoft.com/en-us/TrustCenter/Privacy/gdpr/default.aspx">Trusted Cloud/GDPR Web page</a>
										to assess your readiness for the GDPR and how you can accelerate GDPR compliance with the Microsoft Cloud,
										and use
										<a target="_blank" class="c-hyperlink CTA-link" title="Microsoft FastTrack" aria-label="Microsoft FastTrack"
										 href="https://fasttrack.microsoft.com/">Microsoft FastTrack</a> for deployment assistance.</p>
								</div>
							</div>
						</div>
					</div>
				</section>
			</section>
			<!--GDPR Resources pivot section     -->
			<style>
				.security-own-pivot.prod_resource .webinar-slider .c-flipper {
					float: left;
				}
				.padd-r {
					padding-right: 10px
				}
				.padd-l {
					padding-left: 10px;
				}
			</style>
		</div>
		<div data-grid="col-12" class="m-banner prod-banner prod-martop-48 pad-12">
			<div data-grid="col-12">
				<div data-grid="container">
					<h2 class="c-heading-3 c-heading-3_38 fnt24">Assess your readiness for the GDPR today</h2>
					<!--<p class="c-paragraph-1 line24"></p>-->
					<div data-grid="col-12 stack-3" class="link-div prod-marbottom-70"><a target="_blank" href="https://assessment.microsoft.com/gdpr-compliance"
						 class="tc-hyper-action CTA-link c-glyph x-hidden-focus" title="Take the assessment" aria-label="Take the assessment"><span
							 class="x-hidden-focus">Take the assessment</span></a></div>
				</div>
			</div>
		</div>
	</main>