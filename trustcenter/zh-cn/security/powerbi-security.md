
---
layout: TrustCenterPageCN
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
                                          <h3 class="box-title" bi:type="title" bi:title="t1" style="color: #FFFFFF;">Power BI安全性</h3>
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
            <div class="span bp0-col-1-1 bp1-col-1-1 bp2-col-1-1 bp3-col-1-1"><a target="_self" class="mscom-link" href="../default-cn.html">信任中心</a> // 
               <a target="_self" class="mscom-link" href="../security/default-cn.html">安全性</a> // Power BI 安全性
            </div>
         </div>
         <div id="ContentWrapper" data-cols="2" data-view1="1" data-view2="2" data-view3="2" data-view4="2" class="row-fluid subpageBody">
            <div class="span bp0-col-1-1 bp2-col-2-1 bp3-col-2-1 bp1-col-2-2">
               <p style="font-size:28px;">利用安全的客户数据可视化云解决方案保护您的客户数据和报告</p>
               <p>由世纪互联运营的 Power BI 是一套基于云的商业分析工具，您可以放心地使用它来分析客户数据、发布报告和分享见解。</p>
               <p><a href="../cloudservices/powerbi.html" style="font-size:24px;">Power BI 概述</a></p>
               <p>Power BI 服务以 <a href="azuresecurity.html">Azure</a> 为基础，能够从 Azure 平台强大的安全技术中受益。Power BI 采用分离式前端与后端集群、网关和安全的客户数据存储结构来保护您的信息。认证过程可将未授权用户拒之门外；无论是存储状态还是传输状态下，客户数据加密技术均能保证客户数据的机密性。同时，Power BI 还可在云端或本地整合您企业所有的客户数据。</p>
               <p>Power BI 服务受<a href="http://www.21vbluecloud.com/office365/O365-AgreeWebDir/">世纪互联运营的 Office 365 在线服务标准协议</a>和<a href="http://www.21vbluecloud.com/office365/O365-Privacy/">世纪互联运营的 Office 365 和 Power BI 隐私声明</a>的约束。</p>
               <label id="identity_Secure">安全身份</label>
               <p>由世纪互联运营的 Power BI 以 Azure 为基础，采用 <a href="https://www.azure.cn/home/features/identity/">Azure 活动目录</a>（Azure AD）身份与访问管理机制以确保只有已授权的用户方可访问企业环境、数据与报告。</p>
               <p>Power BI 将 Azure 活动目录作为身份验证和授权标识库。用户通过安全的（HTTPS）网站登录享受 Power BI 服务，用户浏览器和 Power BI 服务之间的所有通讯记录均被加密。Azure 流量管理器负责接收请求，核查用户的 DNS 记录，确定最近的 Power BI 部署位置，最终回复其网络前端（WFE）集群的 IP 地址。</p>
               <p>用户被转入世纪互联在线服务进行登录，经认证后重新转入距离最近的网络前端集群。用户登录后，该集群将浏览器储存的信息与 Azure 活动目录比对来确认用户已订购 Power BI 服务，最终返还一个 Azure 活动目录安全令牌。网络前端集群将返还该令牌、会话信息以及相应的后端集群网址。用户浏览器会下载必要的文件，实现与 Power BI 服务的交互。后续交互活动将通过后端集群进行，并需要使用用户的 Azure 活动目录令牌。</p>
               <ul style="list-style-type:disc">
                  <li>如需了解更多关于 Azure 流量管理器的流量路由操作，请阅读 Azure 流量管理器流量路由方式相关文档。</li>
                  <li>Azure 内容分发网络（CDN）提供必要文件的下载服务，如需了解更多内容，请观看 Azure 内容分发网络资料视频。</li>
               </ul style="list-style-type:disc">
               <p style="font-size:28px" id="infrastructure_Secure">安全基础架构</p>
               <p>由于世纪互联运营的 Power BI 以 Azure 为基础，因而采用了 Azure 安全基础架构，该基础架构凭借最佳的安全实践与技术，保护客户数据在中国大陆的数据中心内部以及互联网上的传输。</p>
               <p style="font-size:20px">架构</p>
               <p>Power BI 的架构设计旨在保护您的数据。Power BI 配置在世界各个数据中心中，且每一个配置均由两种集群组成</p>
               <ul style="list-style-type:disc">
                  <li><strong>网络前端集群</strong>所有用户在获取Power BI中的任何信息之前必须连入网络前端。网络前端集群中的服务器对用户进行认证，通过Azure活动目录存储用户身份并授权允许其进行数据访问。Azure 流量管理器找到最近的 Power BI 部署位置，并通过其前端集群进行登录与认证管理。</li>
                  <li><strong>后端集群</strong>所有后续活动与数据访问均通过后端集群进行。后端集群控制着显示板、可视化、数据集、报告、数据存储、数据连接与数据刷新活动。后端集群具有 Azure  应用程序接口管理、网关、演示、客户数据、后台作业处理和数据传送等多种功能。</li>
               </ul>
               <p>可与用户实现直接交互的只有网关和 Azure 应用程序接口管理，二者皆可通过互联网进行访问。这些角色可实现认证、授权、分布式拒绝服务（DDoS）防御、带宽节流、负载均衡、路由及其他安全、性能和可用性功能。用户可获取的角色与仅系统能取得的角色之间存在明显的界限。</p>
               <p style="font-size:20px">威胁管理</p>
               <p><a href="../security/threatmanagement.html">Azure 多极威胁管理</a>手段借助侵入检测、分布式拒绝服务攻击预防、渗透测试、数据分析学和机器学习来持续增强防御能力、减少风险，对由世纪互联运营的  Power BI 实施保护。</p>
               <p style="font-size:20px">物理安全</p>
               <p>无论从物理角度还是逻辑角度，由世纪互联运营的 Power BI 均与世界其他地区的微软云服务实现了完全隔离，数据中心位于中国大陆，由深度防御安全体系层层保护。该防御安全体系包括周边防护、摄影机、安保人员、安全入口和实时通讯网络，防御范围从该设施的每个区域延续至每一个物理服务器单元。</p>
               <label id="apps_and_data_Secure">安全应用程序与数据</label>
               <p>客户数据经世纪互联企业网关运营的 Power BI 传输时均被加密。上传的客户数据通常被送至 Azure Blob 存储器中，系统自带的所有元数据和人工资料均被存储在 Azure SQL 数据库中。</p>
               <p>Power BI 服务可处理存储后的客户数据（非当前处理客户数据）和处理中的客户数据（当前因用户或服务而被访问或更新的数据）。客户数据分为两类：</p>
               <ul style="list-style-type:disc">
                  <li>通过直接查询被访问的客户数据</li>
                  <li>通过直接查询不能被访问的客户数据</li>
               </ul>
               <p>直接查询被直接翻译为基础数据源的本机语言。非直接查询不包括基础数据源凭证。直接查询与其他查询之间的区别决定了 Power BI 服务对存储后的数据的处理方式，并能确定查询自身是否已被加密。</p>
               <p>Power BI 使用 Azure 存储服务作为 Blob 存储，采用 Azure SQL Database 存储系统自身生成及使用的元数据。用户无法直接连入这些存储库中——用户需要首先与网关相连，网关会向其他功能部件（如演示部件）发送数据请求，演示部件便会将请求呈现在显示板上。</p>
               <p>用户仅在获得授权后方可访问客户数据，而授权决定则取决于用户的身份。不过，用户在访问客户数据时须保护其共享的所有客户数据（在静态报告中尤其如此）。</p>
               <ul style="list-style-type:disc">
                  <li><strong>静态报告</strong>创建静态报告时，客户数据被固定在报告中——与 PDF 文件类似。（无法通过向 Power BI 系统发送“回叫信号”来观看报告中的可视化数据）</li>
                  <li><strong>动态报告</strong>客户数据并非真实存在于动态报告中；相反，动态报告通过从 SQL 服务器分析服务中获取客户数据得以生成，并借助 Power BI 分析服务连接器连入 SQL 服务器中。</li>
               </ul>
               <p>授权用户可与未经授权的用户共享静态报告的内容。然而，用户仅能在得到认证和授权后才可获取动态报告的内容。借助 HTTPS 将数据源连接至 Power BI 服务，所有由 Power BI 请求和传输的客户数据均在传输过程中被加密。</p>
            </div>
            <div class="span bp0-col-1-1 bp2-col-2-1 bp3-col-2-1 bp1-col-2-2 bp0-clear bp1-clear">
               <div id="SideBarWrapper" data-cols="1" data-view1="1" data-view2="1" data-view3="1" data-view4="1" class="row-fluid">
                  <div id="HelpfulInformation" class="span bp0-col-1-1 bp1-col-1-1 bp2-col-1-1 bp3-col-1-1">
                     <h1>更多信息</h1>
                     <label><a target="_self" class="mscom-link" href="http://wacnppe.blob.core.chinacloudapi.cn/marketing-resource/documents/%E7%94%B1%E4%B8%96%E7%BA%AA%E4%BA%92%E8%81%94%E8%BF%90%E8%90%A5%E7%9A%84%20Power%20BI%20%E5%AE%89%E5%85%A8%E7%99%BD%E7%9A%AE%E4%B9%A6_May2017.pdf">由世纪互联运营的 Power BI 安全白皮书</a></label><br/>
                     <!-- <label><a target="_self" class="mscom-link" href="https://www.azure.cn/home/features/identity/">Active Directory</a></label><br/>
                     <label><a target="_self" class="mscom-link" href="https://www.azure.cn/documentation/services/identity/">Active Directory 文档</a></label><br/>
                     <label><a target="_self" class="mscom-link" href="https://www.azure.cn/home/features/multi-factor-authentication/">多重身份验证</a></label><br/>
                     <label><a target="_self" class="mscom-link" href="#">Office 365 安全与合规白皮书</a></label><br/> -->
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
</div>
<div class="row-fluid" data-view4="1" data-view3="1" data-view2="1" data-view1="1" data-cols="1">
   <div class="span bp0-col-1-1 bp1-col-1-1 bp2-col-1-1 bp3-col-1-1"></div>
</div>
