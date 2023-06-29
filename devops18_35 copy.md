# DevOps Interview Questions


<details>
 <summary>18.What is your favourite scripting language for DevOps?</summary>
  <p>In DevOps, we use diferent scripting languages for diferent purposes. There is no single language that can work in all the scenarios. Some of the popular scripting languages that we use are as folows:</p>
    <ol>
        <li><b>Bash :</b>On Unix based systems we use Bash shel scripting for automating tasks.</li>
        <li><b>Python :</b> For complicated programming and large modules we use Python. We can easily use a wide variety of standard libraries with Python.</li>
        <li><b>Groovy :</b> This is a Java based scripting language. We need JVM instaled in an environment to use Groovy. It is very powerful and it provides very powerful features.</li>
        <li><b>Perl :</b> This is another language that is very useful for text parsing. We use it in web applications.</li>
    </ol>
</details>

<details>
 <summary>19.What is Multi-factor authentication?</summary>
  <p>In security implementation, we use Multi-factor authentication (MFA). In MFA, a user is authenticated by multiple means before giving access to a resource or service. It is different from simple user/  password based authentication.</p>
  <p>The most popular implementation of MFA is Two-factor authentication. In most of the organizations, we use username/password and an RSA token as two factors for authentication.</p>
  <p>With MFA, the system becomes more secure and it cannot be easily hacked.</p>   
</details>


<details>
 <summary>20.What are the main benefits of Nagios?</summary>
  <p>Nagios is open source software to monitor systems, networks and infrastructure. The main benefits of Nagios are as folows:</p>
    <ol>
        <li><b>Monitor :</b>DevOps can configure Nagios to monitor IT infrastructure components, system metrics and network protocols.</li>
        <li><b>Alert :</b> Nagios will send alerts when a critical component in infrastructure fails.</li>
        <li><b> Response :</b> DevOps acknowledges alerts and takes corrective actions.</li>
        <li><b>Report :</b> Periodicaly Nagios can publish/send reports on outages, events and SLAs etc.</li>
        <li><b>Maintenance :</b>During maintenance windows, we can also disable alerts.</li>
        <li><b>Planning :</b>Based on past data, Nagios helps in infrastructure planning and upgrades.</li>
    </ol>
</details>


<details>
 <summary>21.What is State Stalking in Nagios?</summary>
  <p>State Stalking is a very useful feature. Though all the users do not use it all the time, it is very helpful when we want to investigate an issue</p>
  <p>In State Stalking, we can enable stalking on a host. Nagios will monitor the state of the host very carefuly and it will log any changes in the state.</p>
  <p>By this we can identify what changes might be causing an issue on the host.</p>   
</details>

<details>
 <summary>22.What are the main features of Nagios?</summary>
  <p>Some of the main features of Nagios are as folows:</p>
    <ol>
        <li><b>Visibility :</b>Nagios provides a centralized view of the entire IT infrastructure.</li>
        <li><b>Monitoring :</b>We can monitor all the mission critical infrastructure components with Nagios.</li>
        <li><b>Proactive Planning :</b>With Capacity Planning and Trending we can proactively plan to scale up or scale down the infrastructure.</li>
        <li><b>Extendable :</b>Nagios is extendable to a third party tools in APIs.</li>
        <li><b>Multi-tenant :</b>Nagios supports multi-tenants architecture.</li>
    </ol>
</details>


<details>
 <summary>23.What is Puppet?</summary>
  <p>Puppet Enterprise is a DevOps software platform that is used for automation of infrastructure operations. It runs on Unix as well as on Windows.</p>
  <p>We can define system configuration by using Puppet’s language or RubyDSL</p>
  <p>The system configuration described in Puppet’s language can be distributed to a target system by using RESTAPI calls.</p>   
</details>


<details>
 <summary>24.What is the architecture of Puppet?</summary>
  <p>Puppet is Open Source software. It is based on Client-server architecture. It is a Model Driven system. The client is also called Agent. And server is called Master.</p>
  <p>It has folowing architectural components:</p>
    <ol>
        <li><b>Configuration Language :</b> Puppet provides a language that is used to configure Resources. We have to specify what Action has to be applied to which Resource.</br>The Action has three items for each Resource: type, title and list of attributes of a resource. Puppet code is written in Manifests files.</li>
        <li><b>Resource Abstraction :</b>We can create Resource Abstraction in Puppet so that we can configure resources on different platforms. Puppet agent uses a Facter for passing the information of an environment to Puppet server. In Facter we have information about IP, hostname, OS etc of the environment</li>
        <li><b>Transaction :</b>In Puppet, Agent sends Facter to Master server. Master sends back the catalog to Client. Agent applies any configuration changes to system. Once all changes are applied, the result is sent to Server</li>
    </ol>
</details>


<details>
 <summary>25.What are the main use cases of Puppet Enterprise?</summary>
  <p>We can use Puppet Enterprise for folowing scenarios:</p>
    <ol>
        <li><b>Node Management :</b>We can manage a large number of nodes with Puppet.</li>
        <li><b>Code Management :</b>With Puppet we can define Infrastructure as code. We can review, deploy, and test the environment configuration for Development, Testing and Production environments.</li>
        <li><b>Reporting & Visualization :</b>: Puppet provides Graphical tools to visualize and see the exact status of infrastructure configuration.</li>
        <li><b>Provisioning Automation :</b>With Puppet we can automate deployment and creation of new servers and resources. So users and business can get their infrastructure requirements completed very fast with Puppet</li>
        <li><b>Orchestration :</b>For a large Cluster of nodes, we can orchestrate the complete process by using Puppet. It can follow the order in which we want to deploy the infrastructure environments.</li>
        <li><b>Automation of Configuration :</b>With Configuration automation, the chances of manual errors are reduced. The process becomes more reliable with this.</li>
    </ol>
</details>


<details>
 <summary>26.What is the use of Kubernetes?</summary>
  <p>We use Kubernetes for automation of large-scale deployment of Containerized applications.</p>
  <p>It is an open source system based on concepts similar to Google’s deployment process of milions of containers.</p>
  <p>It can be used on cloud, on-premise datacenter and hybrid infrastructure.</p>  
  <p>In Kubernetes we can create a cluster of servers that are connected to work as a single unit. We can deploy a containerized application to all the servers in a cluster without specifying the machine name.</p>
  <p>We have to package applications in such a way that they do not depend on a specific host.</p> 
</details>


<details>
 <summary>27.What is the architecture of Kubernetes?</summary>
  <p>The architecture of Kubernetes consists of following components:</p>
    <ol>
        <li><b>Master :</b> There is a master node that is responsible for managing the cluster. Master performs folowing functions in a cluster.</li>
              <ol>
              <li>Scheduling Applications</li>
              <li>Maintaining desired state of applications </li>
              <li>Scaling applications </li>
              <li>Applying updates to applications</li>
              </ol>
        <li><b>Nodes :</b>A Node in Kubernetes is responsible for running an application. The Node can be a Virtual Machine or a Computer in the cluster. There is software called Kubelet on each node.This software is used for managing the node and communicating with the Master node in cluster.</li>
        <li>There is a Kubernetes API that is used by Nodes to communicate with the Master. When we deploy an application on Kubernetes, we request Master to start application containers on Nodes.</li>
    </ol>
</details>


<details>
 <summary>28.How does Kubernetes provide high availability of applications in a Cluster?</summary>
  <p>In a Kubernetes cluster, there is a Deployment Controler. This controler monitors the instances created by Kubernetes in a cluster. Once a node or the machine hosting the node goes down, Deployment Controler will replace the node.</p>
  <p>It is a self-healing mechanism in Kubernetes to provide high availability of applications.</p>
  <p>Therefore in Kubernetes cluster, Kubernetes Deployment Controler is responsible for starting the instances as well as replacing the instances in case of a failure.</p>  
</details>


<details>
 <summary>29.Why Automated Testing is a must requirement for DevOps?</summary>
  <p>In DevOps approach we release software with high frequency to production. We have to run tests to gain confidence on the quality of software deliverables.</p>
  <p>Running tests manualy is a time taking process. Therefore, we first prepare automation tests and then deliver software. This ensures that we catch any defects early in our process.</p>
</details>


<details>
 <summary>30.What is Chaos Monkey in DevOps?</summary>
  <p>Chaos Monkey is a concept made popular by Netflix. In Chaos Monkey, we intentionaly try to shut down the services or create failures. By failing one or more services, we test the reliability and recovery mechanism of the Production architecture.</p>
  <p>It checks whether our applications and deployment have survival strategy built into it or not.</p>
</details>


<details>
 <summary>31.How do you perform Test Automation in DevOps?</summary>
  <p>We use Jenkins to create automated flows to run Automation tests. The first part of test automation is to develop test strategy and test cases. Once automation test cases are ready for an application, we have to plug these into each Build run.In each Build we run Unit tests, Integration tests and Functional tests.</p>
  <p>With a Jenkins job, we can automate all these tasks. Once all the automated tests pass, we consider the build as green. This helps in deployment and release processes to build confidence on the application software.</p>
</details>


<details>
 <summary>32.What are the main services of AWS that you have used?</summary>
  <p>We use folowingmainservices ofAWS inour environment:</p>
    <ol>
        <li><b>EC2 :</b>This is the Elastic Compute Cloud by Amazon. It is used to for providing computing capability to a system. We can use it in places of our standalone servers. We can deploy different kinds of applications on C2.</li>
        <li><b>S3 :</b>We use S3 in Amazon for our storage needs</li>
        <li><b>DynamoDB :</b>We use DynamoDB in AWS for storing data in NoSQL database form.</li>
        <li><b>Amazon Cloud Watch :</b>We use Cloud Watch to monitor our application in Cloud.</li>
        <li><b>Amazon SNS :</b>We use Simple Notification Service to inform users about any issues in Production environment.</li> 
    </ol>
</details>


<details>
 <summary>33.Why GIT is considered better than CVS for version control system?</summary>
  <p>GIT is a distributed system. In GIT, any person can create its own branch and start checking in the code. Once the code is tested, it is merged into main GIT repo. IN between, Dev, QA and product can validate the implementation of that code.</p>
  <p>In CVS, there is a centralized system that maintains all the commits and changes. GIT is open source software and there are plenty of extensions in GIT for use by our teams.</p>
</details>

<details>
 <summary>34.What is the difference between a Container and a Virtual Machine?</summary>
  <p>We need to select an Operating System (OS) to get a specific Virtual Machine (VM). VM provides full OS to an application for running in a virtualized environment.</p>
  <p>A Container uses APIs of an Operating System (OS) to provide runtime environment to an application</p>
   <p>A Container is very light weight in comparison witha VM.</p>
   <p>VM provides higher level of security compared to a Container.</p>
   <p>A Container just provides the APIs that are required by the application.</p>
</details>


<details>
 <summary>35.What is Serverless architecture?</summary>
  <p>Serverless Architecture is a termthat refersto folowing:</p>
    <ol>
        <li>An Application that depends on a third-party service.</li>
        <li>An Application in which Code is run on ephemeral containers.</li>
    </ol>
   <p>In AWS, Lambda is a popular service to implement Serverless architecture.</p>
    <p>Another concept in Serverless Architecture is to treat code as a service or Function as a Service (FAAS). We just write code that can be run on any environment or server without the need of specifying which server should be used to run this code.</p>  
</details>