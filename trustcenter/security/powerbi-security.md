---
layout: TrustCenterPage
---
<div class="row-fluid">
   <div class="span">
      <div>
         <div id="HeroWrapper" data-cols="1" data-view1="1" data-view2="1" data-view3="1" data-view4="1" class="row-fluid wider hero grid-container">
            <div class="span bp0-col-1-1 bp1-col-1-1 bp2-col-1-1 bp3-col-1-1">
               <div bi:type="slideshow" class="slideshow slideshow-hero hero" xmlns:bi="urn:schemas-microsoft-com:mscom:bi">
                  <ul bi:type="list" class="slides">
                     <li id="slide-1" bi:index="0" selectBi="">
                        <div class="heroitem light-foreground" bi:type="heroitem">
                           <div class="media" bi:parenttitle="t1">
                              <a href="" bi:track="False" bi:titleflag="t1" bi:index="0">
                                 <div data-picture="" data-alt="You are in control of your data" data-disable-swap-below="">
                                    <div data-src="https://c.s-microsoft.com/en-us/CMSImages/MS_TrustCenter_Privacy_Header.jpg?version=dc9c5b9b-c334-7922-892a-15c2cd65053d"></div>
                                    <noscript></noscript>
                                 </div>
                              </a>
                           </div>
                           <div class="text" bi:type="cta">
                              <div class="text-container">
                                 <div class="box" style="background: rgba(0,0,0,.85); color: #FFFFFF;">
                                    <ul bi:type="list" class="headerCaption subpageHeaderCaption">
                                       <li class="box-title">
                                          <h3 class="box-title" bi:type="title" bi:title="t1" style="color: #FFFFFF;">Power BI security</h3>
                                       </li>
                                       <li class="box-actions box-description"><a target="_self" class="mscom-link" href=""></a></li>
                                    </ul>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </li>
                  </ul>
                  <div class="navigation international" bi:track="false">
                     <div class="grid-container settop" data-title-text="Go To Slide "></div>
                  </div>
                  <div class="prev-next" bi:track="false"><button class="prev"><span class="icon-left" aria-hidden="true"></span><span class="screen-reader-text">Previous</span></button><button class="next"><span class="icon-right" aria-hidden="true"></span><span class="screen-reader-text">Next</span></button></div>
                  <div id="play-pause" class="play-pause" style="display:none">
                     <div class="pause"><button id="pauseButton" class="pause_button"><span class="icon-pause" aria-hidden="true"></span><span class="screen-reader-text">Pause</span></button></div>
                     <div class="play"><button id="playButton" class="play_button"><span class="icon-play" aria-hidden="true"></span><span class="screen-reader-text">Play</span></button></div>
                  </div>
               </div>
            </div>
         </div>
         <div id="BreadcrumbWrapper" data-cols="1" data-view1="1" data-view2="1" data-view3="1" data-view4="1" class="row-fluid grid-container mscom-grid-container breadcrumbs">
            <div class="span bp0-col-1-1 bp1-col-1-1 bp2-col-1-1 bp3-col-1-1"><a target="_self" class="mscom-link" href="../default.html">Trust Center</a> // 
               <a target="_self" class="mscom-link" href="../security/default.html">Security </a> // Power BI security
            </div>
         </div>
         <div id="ContentWrapper" data-cols="2" data-view1="1" data-view2="2" data-view3="2" data-view4="2" class="row-fluid subpageBody">
            <div class="span bp0-col-1-1 bp2-col-2-1 bp3-col-2-1 bp1-col-2-2">
               <p style="font-size:28px;font-weight:500;">Protect your Customer Data and reports with a secure cloud solution for Customer Data visualization</p>
               <p>Power BI operated by 21Vianet is a cloud-based suite of business analytics tools that you can trust to help you analyze Customer Data, publish reports, and share insights.</p>
               <p><a href="../cloudservices/powerbi.html" style="font-size:24px;">Get an overview of Power BI</a></p>
               <p>The Power BI service is built on <a href="azuresecurity.html">Azure</a>, which means that it benefits from the Azure platform’s robust security technologies. Power BI uses separate front-end and back-end clusters, the Gateway role, and a secure Customer Data storage architecture to help protect your information. The authentication process keeps unauthorized users out. And encryption of Customer Data, at rest and in transit, preserves confidentiality. Power BI can unify all your organization’s data, in the cloud or on premises.</p>
               <p>The Power BI service is governed by the <a href="http://www.21vbluecloud.com/office365/O365-AgreeWebDir/">21Vianet Online Standard Agreement for Office 365</a> and the <a href="http://www.21vbluecloud.com/office365/O365-Privacy/">Privacy Statement for Office 365 and Power BI Operated by 21Vianet</a>.</p>
               <p style="font-size:26px;font-weight:500;" id="identity_Secure">Secure identity</p>
               <p>Power BI operated by 21Vianet is built on Azure, and uses the<a href="https://www.azure.cn/home/features/identity/"> Azure Active Directory</a> (Azure AD) identity and access management mechanisms to help ensure that only authorized users can access the environment, data, and reports.</p>
               <p>Power BI uses Azure AD as an identity repository for authentication and authorization. Users sign in to the Power BI service via a secure (HTTPS) website, and all communications between the user’s web browser and Power BI service are encrypted. The<a href="https://www.azure.cn/home/features/traffic-manager/"> Azure Traffic Manager </a>receives the request, checks the user’s DNS record, determines the location of the nearest Power BI deployment, and responds with the IP address of that web front end (WFE) cluster.</p>
               <p>The user is redirected to the 21Vianet Online Services to sign in, is authenticated, and is redirected to the nearest WFE cluster, which inspects the cookie obtained when the user signed in, checks with Azure AD to authenticate the Power BI service subscription, and returns an Azure AD security token. The WFE cluster returns the token, session information, and the web address of the appropriate back-end cluster. The user’s browser downloads files necessary to interact with the Power BI service. Subsequent interactions are through the back-end cluster, and include the user’s Azure AD token.</p>
               <ul style="list-style-type:disc">
                  <li>To learn more about how the Azure Traffic Manager performs traffic routing, <a href="https://www.azure.cn/documentation/articles/traffic-manager-routing-methods/">read the Azure documentation </a>on Traffic Manager traffic-routing methods.</li>
                  <li>To learn more about the Azure Content Delivery Network (CDN), from which necessary files are downloaded,<a href="https://www.azure.cn/documentation/services/cdn/"> watch the Azure documentation CDN videos.</a></li>
               </ul>
               <Secure infrastructure  id="infrastructure_Secure">Secure infrastructure</p>
               <p>Because Power BI operated by 21Vianet is built on Azure, it employs Azure infrastructure security, which relies on best security practices and technologies to protect Customer Data as it travels within datacenters located exclusively in mainland China and across the Internet. </p>
               <p style="font-szie:20px">Architecture</p>
               <p>The Power BI architecture is designed to help protect your data. Power BI is deployed in datacenters around the world, and each deployment consists of two clusters:
               <ul style="list-style-type:disc">
                  <li><strong>WFE cluster. </strong>All users connect to the WFE before accessing any information in Power BI. Servers in the WFE cluster authenticate users, using Azure AD to store user identities and authorize access to data. The Azure Traffic Manager finds the nearest Power BI deployment, and that WFE cluster manages login and authentication.</li>
                  <li><strong>Back-end cluster.</strong> All subsequent activity and access to data is handled through the back-end cluster. It manages dashboards, visualizations, datasets, reports, data storage, data connections, and data refresh activities. The back-end cluster hosts many roles, including Azure API Management, Gateway, Presentation, Customer Data, Background Job Processing, and Data Movement.</li>
               </ul>
               <p>Users directly interact only with the Gateway role and Azure API Management, which are accessible through the Internet. These roles perform authentication, authorization, distributed denial-of-service (DDoS) protection, bandwidth throttling, load balancing, routing, and other security, performance, and availability functions. There is a distinct boundary between the roles that users can access and the roles that are accessible only by the system.</p>
               <p style="font-szie:20px">Threat management</p>
               <p>The <a href="../security/threatmanagement.html">Azure multipronged threat management </a>approach protects Power BI operated by 21Vianet by using intrusion detection, DDoS attack prevention, penetration testing, data analytics, and machine learning to constantly strengthen its defense and reduce risks.</p>
               <p style="font-szie:20px">Physical security</p>
               <p>Power BI operated by 21Vianet is physically and logically entirely isolated from Microsoft Cloud services in other regions of the world, which datacenter located in mainland China are protected by layers of defense-in-depth security that include perimeter fencing, video cameras, security personnel, secure entrances, and real-time communications networks, continuing from every area of the facility to each physical server unit.</p>
               <p style="font-size:26px;font-weight:500;" id="apps_and_data_Secure">Secure apps and data</p>
               <p>Customer Data transferred through the Power BI operated by 21Vianet Enterprise Gateway is encrypted. Uploaded Customer Data is typically sent to Azure Blob storage, and all metadata and artifacts for the system itself are stored in an Azure SQL database.</p>
               <p>The Power BI service handles Customer Data at rest (not currently being acted upon) and Customer Data in process (being actively accessed or updated by users or the service). Customer Data is divided into two categories: </p>
               <ul style="list-style-type:disc">
                  <li>Customer Data accessed by direct query</li>
                  <li>Customer Data not accessed by direct query</li>
               </ul>
               <p>Direct queries are directly translated to the native language of an underlying data source. Non-direct queries do not include credentials for the underlying data. The distinction between a direct query and other queries determines how the Power BI service handles the data at rest, and whether the query itself is encrypted.</p>
               <p>Power BI uses<a href="https://www.azure.cn/home/features/storage"> Azure Storage</a> for Blob storage and <a href="https://www.azure.cn/home/features/sql-database/">Azure SQL Database </a>for metadata that the system generates and uses. The user never connects directly to these storage repositories—all user connections are made to the Gateway role, which then forwards requests for data to other roles, such as the Presentation role, which is used to render the dashboard.</p>
               <p>Only authorized users can access Customer Data, with authorization decisions based on the user’s identity. However, when users access Customer Data, it becomes their responsibility to secure any Customer Data they share (particularly in the case of static reports).</p>
               <ul style="list-style-type:disc">
                  <li><strong>Static reports.</strong> When a static report is created, the Customer Data is fixed in the report—similarly to a PDF. (There is no “callback” to the Power BI system to view the data visualized in the report.)</li>
                  <li><strong>Dynamic reports.</strong> With a dynamic report, the Customer Data doesn’t actually reside in the report; instead, the report is generated by pulling Customer Data from SQL Server Analysis Services, using the Power BI Analysis Service Connector Power BI Analysis Service Connector to connect to SQL Server.</li>
               </ul>
               <p>With static reports, authorized users can share reports with unauthorized users. With dynamic reports, users can see reports only if they are authenticated and authorized.All Customer Data requested and transmitted by Power BI is encrypted in transit by using HTTPS to connect from the data source to the Power BI service.</p>
              </div> 
            <!--<div class="span bp0-col-1-1 bp2-col-2-1 bp3-col-2-1 bp1-col-2-2 bp0-clear bp1-clear">
               <div id="SideBarWrapper" data-cols="1" data-view1="1" data-view2="1" data-view3="1" data-view4="1" class="row-fluid">
                  <div id="HelpfulInformation" class="span bp0-col-1-1 bp1-col-1-1 bp2-col-1-1 bp3-col-1-1">
                     <h1>Helpful information</h1>
                     <label><a target="_self" class="mscom-link" href="https://www.azure.cn/home/features/identity/">Azure Active Directory</a></label><br/>
                     <label><a target="_self" class="mscom-link" href="https://www.azure.cn/documentation/services/identity/">Azure Active Directory documentation</a></label><br/>
                     <label><a target="_self" class="mscom-link" href="https://www.azure.cn/home/features/multi-factor-authentication/">Multi-Factor Authentication</a></label><br/>
                     <label><a target="_self" class="mscom-link" href="#">Security In Office 365 Whitepaper</a></label><br/>
                  </div>
               </div>
            </div>-->
         </div>
      </div>
   </div>
</div>
<div class="row-fluid" data-view4="1" data-view3="1" data-view2="1" data-view1="1" data-cols="1">
   <div class="span bp0-col-1-1 bp1-col-1-1 bp2-col-1-1 bp3-col-1-1"></div>
</div>
