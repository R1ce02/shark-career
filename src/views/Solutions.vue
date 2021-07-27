<template>
  <div class="container pt-3">
    <h1 class="greytxt">Our Solutions</h1>
    <div class="row">
      <div class="col-md-3 mb-3">
        <div class="list-group" id="list-tab" role="tablist">
          <a
            class="list-group-item list-group-item-action active"
            id="list-home-list"
            data-bs-toggle="list"
            href="#list-home"
            role="tab"
            aria-controls="list-home"
            >IT Migration and Re-Platforming</a
          >
          <a
            class="list-group-item list-group-item-action"
            id="list-profile-list"
            data-bs-toggle="list"
            href="#list-profile"
            role="tab"
            aria-controls="list-profile"
            >Testmanagement</a
          >
          <a
            class="list-group-item list-group-item-action"
            id="list-messages-list"
            data-bs-toggle="list"
            href="#list-messages"
            role="tab"
            aria-controls="list-messages"
            >EBM Suite</a
          >
          <a
            class="list-group-item list-group-item-action"
            id="list-settings-list"
            data-bs-toggle="list"
            href="#list-settings"
            role="tab"
            aria-controls="list-settings"
            >EAI (Enterprise Application Integration)</a
          >
        </div>
      </div>
      <div class="col-md-9">
        <div class="tab-content" id="nav-tabContent">
          <div
            class="tab-pane fade show active"
            id="list-home"
            role="tabpanel"
            aria-labelledby="list-home-list"
          >
            <div class="card mb-3" >
              <div class="card-body">
                <h5 class="title card-title ">Moderate and scaleable migration risk and costs</h5>
                <p class="card-text">
                    <ul class="fa-ul">
                        <li ><span class="fa-li"><i class="fas fa-check"></i></span>1:1 migration, fully automated without any manual reworking</li>
                        <li ><span class="fa-li"><i class="fas fa-check"></i></span>Proven project experience ranges from re-platforming to code conversion</li>
                        <li ><span class="fa-li"><i class="fas fa-check"></i></span>Multiple generation cycles per day are provided</li>
                        <li ><span class="fa-li"><i class="fas fa-check"></i></span>No interruption of daily business</li>
                        <li ><span class="fa-li"><i class="fas fa-check"></i></span>Minimal Code Freeze Periods (all time record: 1 day!)</li>
                        <li ><span class="fa-li"><i class="fas fa-check"></i></span>Automatic test generation tools are embedded: capture/replay , regression testing, performance benchmarking</li>
                    </ul>
                </p>
              </div>
            </div>

            <div class="card mb-3" >
              <div class="card-body">
                <h5 class="title card-title"> Solution completeness with the best of breed automated conversion </h5>
                <p class="card-text">
                    <ul class="fa-ul">
                        <li ><span class="fa-li"><i class="fas fa-check"></i></span>Transformation of 3 and 4 GL source languages (CSP/VAGEN, Smalltalk, Cobol, PL/I, BMS/CICS), Assembler, RPG into Java, C#, C/C++</li>
                        <li ><span class="fa-li"><i class="fas fa-check"></i></span>Mainframe environments (z/OS, VSE, BS2000) to Linux, AIX, HP-UUX</li>
                        <li ><span class="fa-li"><i class="fas fa-check"></i></span>Middleware substition (CICS, IMS, CTG, LU6.2, UTM) by SHARK Migration Architecture, Jboss, Websphere, SAP NetWeaver</li>
                        <li ><span class="fa-li"><i class="fas fa-check"></i></span>Data Migration (Oracle, DB2, VSAM, SESAM, Leasy , DL1) to Oracle, DB2, SAP HANA, PostgreSQL, MySQL</li>
                    </ul>
                </p>
              </div>
            </div>

            <div class="card mb-3" >
              <div class="card-body">
                <h5 class="title card-title">Contributed to skill evolution and employee development program</h5>
                <p class="card-text">
                    <ul class="fa-ul">
                        <li ><span class="fa-li"><i class="fas fa-check"></i></span>Low Learning curve by providing the original source code as a comment in front of the correspondent migrated code line</li>
                        <li ><span class="fa-li"><i class="fas fa-check"></i></span>Graduates with a state of the art IT-education are able to maintain the new system without special training</li>
                        <li ><span class="fa-li"><i class="fas fa-check"></i></span>No re-training for end users necessary! The look and feel of the applications stay the same with the enhancement of an intuitive graphic user interface</li>
                    </ul>
                </p>
              </div>
            </div>

            <div class="card" >
              <div class="card-body">
                <h5 class="title card-title">Optimal Target Environment provides IT consolidation and simplification</h5>
                <p class="card-text">
                    <ul class="fa-ul">
                        <li ><span class="fa-li"><i class="fas fa-check"></i></span>A flexible Java / C# Framework is embedded within the SHARK Migration Architecture and integrates with the individual OO Architecture of the customer</li>
                        <li ><span class="fa-li"><i class="fas fa-check"></i></span>Simpler, lower cost integration leveragging modern middleware and SOA</li>
                        <li ><span class="fa-li"><i class="fas fa-check"></i></span>The complete integration into the underlying data base is self-evident</li>
                    </ul>
                </p>
              </div>
            </div>
          </div>
          <div
            class="tab-pane fade"
            id="list-profile"
            role="tabpanel"
            aria-labelledby="list-profile-list"
          >
            <div class="card mb-3" >
              <div class="card-body">
                <h5 class="title card-title">Unit-Tests</h5>
                <p class="card-text">
                     During the Unit Test all generated source code parts are completely (C1-Test) technically tested.
                </p>
              </div>
            </div>
            <div class="card mb-3" >
              <div class="card-body">
                <h5 class="title card-title">Regressionstests (Capture/Replay)</h5>
                <p class="card-text">
                    All user interactions within the production environmant are recorded during a defined period (capture) and reproduced on the new target platform (replay). During the evaluation phase it is verified whether errors occure, that means states of the GUI, database and output formats are queried. 
                </p>
              </div>
            </div>

            <div class="card mb-3" >
              <div class="card-body">
                <h5 class="title card-title">Integration Tests</h5>
                <p class="card-text">
                    Integration tests are compareable to the quality assurance phase of a project. This includes all testing activities on the complete system, including the connected interfaces. The tests are performed in a controlled test environment (controlled release handover, defined database situations).                 </p>
              </div>
            </div>

             <div class="card mb-3" >
              <div class="card-body">
                <h5 class="title card-title">Performancetests using Flooder</h5>
                <p class="card-text">
                    The performance targets which have been defined during the analysis phase are reviewed and simulated with any number of users.  
                </p>
              </div>
            </div>
          </div>
          <div
            class="tab-pane fade"
            id="list-messages"
            role="tabpanel"
            aria-labelledby="list-messages-list"
          >
            <div class="card mb-3" >
              <div class="card-body">
                <h5 class="title card-title">Analysis Tool Set</h5>
                <p class="card-text">
                     Business process analysis, organisation analysis, data modelling and design for individual applications or for efficient implementation of any standard ERP system (e.g.: Oracle E-Business Suite)
                </p>
              </div>
            </div>
            <div class="card mb-3" >
              <div class="card-body">
                <h5 class="title card-title">Configurator Tool Set</h5>
                <p class="card-text">
                    Tool for the definition and calculation of complex bills of materials – capable of full integration into your internal solutions (individual or standard ERP systems).                 
                </p>
              </div>
            </div>
            <div class="card mb-3" >
              <div class="card-body">
                <h5 class="title card-title">Reporting Tool Set</h5>
                <p class="card-text">
                    Thanks to the individual design option and the integration of documents of any kind (project plans, logs, Word, Excel, etc.), the flexible Report Writer offers custom-made “up to date” documentation for all project participants, managers, departments, analysts and IT architects.                
                </p>
              </div>
            </div>
          </div>
          <div
            class="tab-pane fade"
            id="list-settings"
            role="tabpanel"
            aria-labelledby="list-settings-list"
          >
            <div class="card mb-3" >
              <div class="card-body">
                <h5 class="title card-title">Reporting Tool Set</h5>
                <p class="card-text">
                    Our EAI-project for the Generali Group is an successful example for a seamless integration of different heterogeneous IT generations (NT, AIX, IBM S/390, OMVS).<br>
                    <br>
                    The solution was based on multi tier architecture using distributed objects and included the following features:
                    <ul class="fa-ul">
                        <li class=""><span class="fa-li"><i class="fas fa-check"></i></span>Integration of the existing legacy systems</li>
                        <li ><span class="fa-li"><i class="fas fa-check"></i></span>Secure communication (7/24 availability) by caching temporarily non available backend system (e.g. mainframe, UNIX)</li>
                        <li ><span class="fa-li"><i class="fas fa-check"></i></span>Mapping to convert different formats</li>
                        <li ><span class="fa-li"><i class="fas fa-check"></i></span>Interfaces to different applications</li>
                        <li ><span class="fa-li"><i class="fas fa-check"></i></span>Naming and security protocols</li>
                        <li ><span class="fa-li"><i class="fas fa-check"></i></span>Transaction processing, logging, backtracking and recovery</li>
                        <li ><span class="fa-li"><i class="fas fa-check"></i></span>XML-specified reusable metadata repository</li>
                    </ul>      
                    An interface layer (resource pool) provided the database connection. Different database systems have been serviced e.g. DB2, Oracle, SQL-Server, Adabas <br>
                    <br>
                    There is communication across servers, which also allows full surveillance of remote servers and centralised software deployment. All available system builds are stored on the software server. The maintenance of the central system builds in the repository also follows XML-standard. 
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
</style>