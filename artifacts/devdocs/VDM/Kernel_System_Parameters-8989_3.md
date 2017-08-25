---
layout: default
title: VDM
---

#### [Developer Documentation](../index) &#187; [VDM](TableOfContents) &#187; Kernel_System_Parameters-8989_3<br/>
<a name="top"></a>
# Kernel System Parameters (8989.3)
This file holds the site parameters for this installation of the Kernel. It will have only one entry -- the domain name of the installation site. Some parameters are defined by the systems manager during the installation process.  These include Agence, volume set multiple, Default parameters. Others may be edited subsequent to installation. Spooling, response time, and audit parameters may be established.  Priorities may be set for interactive users and for TaskMan.  Defaults for fields such as timed read, auto menu, and ask device are defined for use when not otherwise specified for a user or device.

**Global:** ^XTV(8989.3,

**Domain:** Non-Clinical

## Properties

Label/Field Name | Field # | Description | Datatype | Attributes | Range
--- | --- | --- | --- | --- | ---
**Number**{::nomarkdown}<pre><code>  number</code></pre>{:/} | .001 | Used to have VA fileman only have one entry in the file. | IEN |  | 
**Domain Name**{::nomarkdown}<pre><code>  domain_name</code></pre>{:/} | .01 | This is the name of this installation of the kernel, as it is known<br/>to the rest of the network. It must appear in the DOMAIN file.<br/>This name applies to all CPUs or Volume sets which access this ^XMB<br/>global. | POINTER | INDEXED<br/>REQUIRED | [Domain-4_2](Domain-4_2)
**Irm Mail Group**{::nomarkdown}<pre><code>  irm_mail_group</code></pre>{:/} | .02 | This field holds the name of the Mail Group that should get messages or <br/>bulletns about problems on the system. | STRING | REQUIRED | 
**After Hours Mail Group**{::nomarkdown}<pre><code>  after_hours_mail_group</code></pre>{:/} | .03 | This field holds the name of a mail group that should get messages and <br/>bulletins after hours or on weekends and holidays. | STRING |  | 
**Mixed Os**{::nomarkdown}<pre><code>  mixed_os</code></pre>{:/} | .05 | This field tells Kernel that this is a MIXED OS environment.<br/>This is only supported on a Cache ECP client/server setup.<br/>The PRIMARY OS is VMS and the SECONDARY OS is non-VMS. | ENUMERATION |  | {::nomarkdown}VMS/Linux: <em><strong>1</strong></em><br/>No: <em><strong>0</strong></em>{:/}
**Local Tmp**{::nomarkdown}<pre><code>  local_tmp</code></pre>{:/} | .07 | Set this field to Yes if ^TMP, ^UTILITY, and ^XUTL("XQ") are local to <br/>each node in a multi-node system as in Cache. Set it to No if everything<br/>is clustered together.<br/> | BOOLEAN |  | {::nomarkdown}false: <em><strong>1</strong></em><br/>true: <em><strong>0</strong></em>{:/}
**Agency Code**{::nomarkdown}<pre><code>  agency_code</code></pre>{:/} | 9 | This field defines what agency uses this computer.  It sets a flag which<br/>may be accessed by application programs which need to know this information.<br/>For example, a scheduling program may operate one way in an Air Force<br/>environment, and another in a VA environment. | ENUMERATION |  | {::nomarkdown}VA: <em><strong>V</strong></em><br/>EHR: <em><strong>E</strong></em><br/>ARMY: <em><strong>ARMY</strong></em><br/>IHS: <em><strong>I</strong></em><br/>AIR FORCE: <em><strong>AF</strong></em><br/>OTHER: <em><strong>O</strong></em><br/>NAVY: <em><strong>N</strong></em><br/>COAST GUARD: <em><strong>USCG</strong></em>{:/}
**Routine Monitoring**{::nomarkdown}<pre><code>  routine_monitoring</code></pre>{:/} | 9.8 | This field controls how the routine monitoring program behaves.<br/>Weather to look at all routines or just selected name spaces. | ENUMERATION |  | {::nomarkdown}All: <em><strong>a</strong></em><br/>Selected: <em><strong>s</strong></em><br/>No: <em><strong>n</strong></em>{:/}
**Routine N-space To Monitor**{::nomarkdown}<pre><code>  routine_nspace_to_monitor</code></pre>{:/} | 9.81 |  | STRING |  | 
**Auto-generate Access Codes**{::nomarkdown}<pre><code>  autogenerate_access_codes</code></pre>{:/} | 11 | If this field is set to YES, then the user will not be allowed to <br/>choose their ACCESS CODE - it will be assigned for them. | BOOLEAN |  | {::nomarkdown}false: <em><strong>y</strong></em><br/>true: <em><strong>n</strong></em>{:/}
**Auto-generate Verify Codes**{::nomarkdown}<pre><code>  autogenerate_verify_codes</code></pre>{:/} | 11.2 | During the C&A review of VistA the current practice of leaving the VERIFY<br/>CODE blank until the user signed on the first time was found to not comply<br/>with VA DIRECTIVE 6504. <br/> <br/>This field will be used when someone other than the user goes to enter a <br/>verify code.  The system will select a strong verify code and tell the <br/>operator what the new code is. | BOOLEAN |  | {::nomarkdown}false: <em><strong>y</strong></em><br/>true: <em><strong>n</strong></em>{:/}
**User Characteristics Template**{::nomarkdown}<pre><code>  user_characteristics_template</code></pre>{:/} | 12 | This field contains the name of the input template to be used for the<br/>EDIT USER CHARACTERISTIC option. If there is a ScreenMan form with the<br/>same name it will be used, terminal type permitting. If it is left blank,<br/>the XUEDIT CHARACTERISTICS template will be used.  You may want to define<br/>different fields. The TERMINAL TYPE question is asked before the template<br/>is called. | POINTER |  | Input_Template-_402
**Academic Affiliation Waiver**{::nomarkdown}<pre><code>  academic_affiliation_waiver</code></pre>{:/} | 13 | The VA Handbook 6500 page 60 requires:<br/>6. POLICY AND PROCEDURES, c. Technical Controls,<br/> (2) Logical Access Controls.<br/>   d. Accounts are automatically disabled if inactive for 30 days.<br/> <br/>The Office of Academic Affiliation requested a waiver to the 30 day<br/>disabling of inactive accounts asking it be 90 days and this waiver was <br/>approved.<br/> <br/>This field controls if the VA Handbook 6500 30 day limit is used or the<br/>site has an Academic Affiliation and the 90 day limit is to be used.<br/> <br/>There is a copy of the waiver attached to Remedy Ticket 283028. | BOOLEAN |  | {::nomarkdown}false: <em><strong>1</strong></em><br/>true: <em><strong>0</strong></em>{:/}
**Option Audit**{::nomarkdown}<pre><code>  option_audit</code></pre>{:/} | 19 | This field indicates what should be audited  between the 'Initiate Audit'<br/> date and 'Terminate Audit' date fields.  The 'Option to Audit' Subfile<br/> along with the 'Namespace to Audit' Subfile hold the lists of specific<br/> options that would be audited (choosing "s").  The 'User to Audit' | ENUMERATION |  | {::nomarkdown}NO AUDIT: <em><strong>n</strong></em><br/>ALL OPTIONS AUDITED: <em><strong>a</strong></em><br/>SPECIFIC OPTIONS AUDITED: <em><strong>s</strong></em><br/>USERS AUDITED: <em><strong>u</strong></em>{:/}
**Option To Audit**{::nomarkdown}<pre><code>  option_to_audit</code></pre>{:/} | 19.1 | This subfile holds a list of options to audit. | POINTER |  | [Option-19](Option-19)
**Namespace To Audit**{::nomarkdown}<pre><code>  namespace_to_audit</code></pre>{:/} | 19.2 | This subfile holds a list of namespaces to audit. | STRING |  | 
**User To Audit**{::nomarkdown}<pre><code>  user_to_audit</code></pre>{:/} | 19.3 | This subfile holds a list of users to audit. | POINTER |  | [New_Person-200](New_Person-200)
**Initiate Audit**{::nomarkdown}<pre><code>  initiate_audit</code></pre>{:/} | 19.4 | This field indicates the date when an audit will begin.  The 'Option<br/>'Audit' Field defines the nature of the audit that will be performed.<br/>Auditing will only be done if there is both a 'Initiate Audit' and<br/>'Terminate Audit' data. | DATE-TIME |  | 
**Terminate Audit**{::nomarkdown}<pre><code>  terminate_audit</code></pre>{:/} | 19.5 | This field indicates when the audit will end.  The start date is<br/>set in the 'Initiate Audit' Field. | DATE-TIME |  | 
**New Person Identifiers**{::nomarkdown}<pre><code>  new_person_identifiers</code></pre>{:/} | 21 | This field holds MUMPS code to set the variable DR to the string of fields<br/>(Not a template) to be used as Identifiers when adding entries to the NEW<br/>PERSON file.<br/> <br/> #9 (SSN) is required if the user does not hold the XUSPF200 key.<br/> <br/>These fields can be added to by the application. | STRING |  | 
**Ccow Token Timeout**{::nomarkdown}<pre><code>  ccow_token_timeout</code></pre>{:/} | 30.1 | This field holds the value for how long a CCOW token is good for in<br/>seconds. When the current time is greater that the CCOW token create time<br/>plus the timeout seconds, the CCOW token will no longer be valid. If this<br/>value is too small (short) users will be frustrated that the SSO part<br/>doesn't work.  If the value is too large (Long) there is a chance that it<br/>could be used to break into the system.  A default value of 5400 (1.5<br/>hours) will be used. | NUMERIC |  | 
**Max Spool Lines Per User**{::nomarkdown}<pre><code>  max_spool_lines_per_user</code></pre>{:/} | 31.1 | This field holds the MAX number of lines of spooled output any user may<br/>spool. If the user has more that this number then they will not be allowed<br/>to spool any more until some of their spooled documents are deleted.  This<br/>only controls the granting of new spool documents and doesn't terminate a<br/>the number of lines that will be transfered into the spool data file.<br/>Recommended value 9999. | NUMERIC |  | 
**Max Spool Documents Per User**{::nomarkdown}<pre><code>  max_spool_documents_per_user</code></pre>{:/} | 31.2 | This field limits the number of spooled documents that any user<br/>may have on the system.<br/>Recommended value 10-100. | NUMERIC |  | 
**Max Spool Document Life-span**{::nomarkdown}<pre><code>  max_spool_document_lifespan</code></pre>{:/} | 31.3 | This field controls the number of days that a spooled document will<br/>be allowed to remain in the spooler before deletion by the XU-SPL-PURGE<br/>option that needs to be setup to run in the background. | NUMERIC |  | 
**Alpha/beta Test Package**{::nomarkdown}<pre><code>  alpha_beta_test_package</code></pre>{:/} | 32 | This multiple field is used to identify any packages which are currently<br/>in alpha or beta test at the site. | OBJECT |  | [Alpha_beta_Test_Package-8989_332](#Alpha_beta_Test_Package-8989_332)
**Alpha,beta Test Option**{::nomarkdown}<pre><code>  alphabeta_test_option</code></pre>{:/} | 33 | This is a multiple field which is used to keep a log of usage of the<br/>options associated with an alpha or beta test of a package based on the<br/>namespace(s) indicated for the alpha or beta test package. | OBJECT |  | [Alphabeta_Test_Option-8989_333](#Alphabeta_Test_Option-8989_333)
**Volume Set**{::nomarkdown}<pre><code>  volume_set</code></pre>{:/} | 41 | This is the set of all CPU names in this domain. | OBJECT |  | [Volume_Set-8989_304](#Volume_Set-8989_304)
**Dns Ip**{::nomarkdown}<pre><code>  dns_ip</code></pre>{:/} | 51 | This field holds the IP addresses of the DNS(s) that XLFNSLK will use.<br/>Data must be in the form of nnn.nnn.nnn.nnn To list more that one separate<br/>them with commas (,). | STRING |  | 
**Pki Server**{::nomarkdown}<pre><code>  pki_server</code></pre>{:/} | 53.1 | This field holds one to three IP addresses for the PKI servers for this<br/>site.  Each IP address is separated by comas.<br/>Example: 127.0.0.1,PKI.fo-oakland.domain.ext | STRING |  | 
**Path To Mwapi Bitmaps**{::nomarkdown}<pre><code>  path_to_mwapi_bitmaps</code></pre>{:/} | 101 | NA | STRING |  | 
**Security Token Service**{::nomarkdown}<pre><code>  security_token_service</code></pre>{:/} | 200.1 | When using brokered authentication with a security token issued by a Security Token Service (STS), this field will contain the identification of the issuer of the token. The STS is trusted by both the client and the service to provide interoperable security tokens. Security Assertion Markup Language (SAML) tokens are standards-based XML tokens that are used to exchange security information, including attribute statements, authentication decision statements, and authorization decision statements. They can be used as part of a Single Sign-On (SSO) solution allowing a client to talk to services running on disparate technologies. | STRING |  | 
**Organization**{::nomarkdown}<pre><code>  organization</code></pre>{:/} | 200.2 | Identity and Access Management ORGANIZATION field used to identify the Organization of this VistA instance. For internally authenticated users, this field will match the SUBJECT ORGANIZATION field (#205.2) of the user identified in the NEW PERSON file (#200). For the VA, this field should always contain the value: "Department Of Veterans Affairs" | STRING |  | 
**Organization Id**{::nomarkdown}<pre><code>  organization_id</code></pre>{:/} | 200.3 | Identity and Access Management ORGANIZATION ID field used to uniquely identify the Organization of this VistA instance. For internally authenticated users, this field will match the SUBJECT ORGANIZATION ID field (#205.3) of the user identified in the NEW PERSON file (#200). For the VA, this field should always contain the value: "urn:oid:2.16.840.1.113883.4.349" | STRING |  | 
**Default # Of Attempts**{::nomarkdown}<pre><code>  default_number_of_attempts</code></pre>{:/} | 202 | This is the default number of attempts that a user may try to sign-on<br/>before the device is locked. This field is overridden by a similar field<br/>in the DEVICE File. This means that during sign-on the checks against the<br/>device file for OUT OF SERVICE, SECURITY, and PROHIBITED TIMES FOR SIGN-ON<br/>will be skipped.  <br/>The maximum value (5) is set by the VA INFORMATION SYSTEM ACCOUNT AND<br/>PASSWORD MANAGEMENT POLICY. | NUMERIC |  | 
**Default Lock-out Time**{::nomarkdown}<pre><code>  default_lockout_time</code></pre>{:/} | 203 | This is the default time in seconds that a locked device must be idle<br/>before another sign-on attempt will be allowed. This time is overridden<br/>by a similar field in the DEVICE File. This means that during sign-on the<br/>checks against the device file for OUT OF SERVICE, SECURITY, and<br/>PROHIBITED TIMES FOR SIGN-ON will be skipped.<br/>The minimum value is set by the VA INFORMATION SYSTEM ACCOUNT AND PASSWORD<br/>MANAGEMENT POLICY. | NUMERIC |  | 
**Default Multiple Sign-on**{::nomarkdown}<pre><code>  default_multiple_signon</code></pre>{:/} | 204 | This is the default value for whether users may sign-on at more<br/>than one terminal at a time. It is overridden by similar fields<br/>in the DEVICE and NEW PERSON Files. If you select "Only one IP" be sure to<br/>put a value into the "MULTIPLE SIGN-ON LIMIT" field so users can sign-on<br/>at least once.<br/>Current Values<br/>0 = Multiple signon not allowed.<br/>1 = Multiple signon Allowed.<br/>2 = Multiple sign only allowed from one IP address. | ENUMERATION |  | {::nomarkdown}YES: <em><strong>1</strong></em><br/>Only one IP: <em><strong>2</strong></em><br/>NO: <em><strong>0</strong></em>{:/}
**Ask Device Type At Sign-on**{::nomarkdown}<pre><code>  ask_device_type_at_signon</code></pre>{:/} | 205 | This is the default for whether a user/terminal should be asked for their<br/>terminal type at sign-on. This is overridden by a similar field in the<br/>DEVICE and NEW PERSON Files.<br/> <br/>terminals DEVICE ATTRIBUTES message, if it is a know one then the<br/>terminal type is set to this. Otherwise the user is prompted.<br/> <br/>If set to NO then the one from the Last Sign-on field or device subtype<br/>will will be used. | BOOLEAN |  | {::nomarkdown}false: <em><strong>1</strong></em><br/>true: <em><strong>0</strong></em>{:/}
**Default Auto-menu**{::nomarkdown}<pre><code>  default_automenu</code></pre>{:/} | 206 | This is the default for whether auto-menu is turned ON or OFF.<br/>It is overridden by similar fields in the DEVICE and NEW PERSON Files. | BOOLEAN |  | {::nomarkdown}false: <em><strong>1</strong></em><br/>true: <em><strong>0</strong></em>{:/}
**Default Language**{::nomarkdown}<pre><code>  default_language</code></pre>{:/} | 207 | This field points to the default language that is used by the<br/>site.  The value can be replaced by a language field in the<br/>New Person file (200.07). | POINTER |  | Language-_85
**Default Type-ahead**{::nomarkdown}<pre><code>  default_typeahead</code></pre>{:/} | 209 | This is the default as to whether or not Type-Ahead is allowed.<br/>It is overridden by similar fields in the DEVICE and NEW PERSON Files. | BOOLEAN |  | {::nomarkdown}false: <em><strong>Y</strong></em><br/>true: <em><strong>N</strong></em>{:/}
**Default Timed-read (seconds)**{::nomarkdown}<pre><code>  default_timedread_seconds</code></pre>{:/} | 210 | This is the default time-out for all READs and is overridden by<br/>similar fields in the DEVICE and NEW PERSON Files. | NUMERIC |  | 
**Bypass Device Lock-out**{::nomarkdown}<pre><code>  bypass_device_lockout</code></pre>{:/} | 211 | Setting this field to YES will cause all device lock-out checking to be<br/>bypassed.  This means that during sign-on the checks against the device<br/>file for OUT OF SERVICE, SECURITY, and PROHIBITED TIMES FOR SIGN-ON will<br/>be skipped.  Can be overridden by the PERFORM DEVICE CHECKING field in the | BOOLEAN |  | {::nomarkdown}false: <em><strong>1</strong></em><br/>true: <em><strong>0</strong></em>{:/}
**Reserved**{::nomarkdown}<pre><code>  reserved</code></pre>{:/} | 212 | *** This field is NO longer used. *** | BOOLEAN |  | {::nomarkdown}false: <em><strong>1</strong></em><br/>true: <em><strong>0</strong></em>{:/}
**Device To Audit**{::nomarkdown}<pre><code>  device_to_audit</code></pre>{:/} | 212.1 | If device auditing is activated, This holds a list of devises that<br/>are to be audited. | POINTER |  | [Device-3_5](Device-3_5)
**Failed Access Attempt Audit**{::nomarkdown}<pre><code>  failed_access_attempt_audit</code></pre>{:/} | 212.5 | This field indicates whether an audit log is to be generated for failed<br/>access attempts.  Audits can be done for all devices or specified devices <br/>only.  Recording of what is entered is optional. | ENUMERATION |  | {::nomarkdown}NO AUDIT: <em><strong>N</strong></em><br/>SPECIFIED DEVICES/NO TEXT RECORDED: <em><strong>D</strong></em><br/>ALL DEVICES/NO TEXT RECORDED: <em><strong>A</strong></em><br/>SPECIFIED DEVICES/TEXT RECORDED: <em><strong>DR</strong></em><br/>ALL DEVICES/TEXT RECORDED: <em><strong>AR</strong></em>{:/}
**Reserved**{::nomarkdown}<pre><code>  reserved-213</code></pre>{:/} | 213 | This field is reserved for future use.  <br/>  | BOOLEAN |  | {::nomarkdown}false: <em><strong>1</strong></em><br/>true: <em><strong>0</strong></em>{:/}
**Lifetime Of Verify Code**{::nomarkdown}<pre><code>  lifetime_of_verify_code</code></pre>{:/} | 214 | This is the number of days that a VERIFY code remains valid.<br/>After this time the user must choose a new VERIFY code. | NUMERIC | REQUIRED | 
**Interactive User&#x27;s Priority**{::nomarkdown}<pre><code>  interactive_users_priority</code></pre>{:/} | 216 | This field will change the priority of interactive users on the system<br/>at sign-on time.  There is a danger that using this field will<br/>cause the users to have poor response time from the computer. | NUMERIC |  | 
**Default Institution**{::nomarkdown}<pre><code>  default_institution</code></pre>{:/} | 217 | This field is used to define a default institution that will be assigned<br/>as the user's institution (DUZ(2)) for any user that doesn't have one.<br/> <br/>Other Developers are allowed to get this data directly from the | POINTER | REQUIRED | [Institution-4](Institution-4)
**Default Auto Sign-on**{::nomarkdown}<pre><code>  default_auto_signon</code></pre>{:/} | 218 | This field will control the Auto Sign-on (Single Sign-on) feature.<br/> <br/>To completely turn off this feature for all users: set to DISABLED.<br/>To allow only selected users: set to No.<br/>To allow ALL but selected users: set to Yes.<br/> <br/>The Yes and No values can be over ridden by the AUTO SIGN-ON field in the<br/>New Person file.<br/>Use of this feature impacts user connecting via Telnet and the Broker. | ENUMERATION |  | {::nomarkdown}Disabled: <em><strong>d</strong></em><br/>Yes: <em><strong>1</strong></em><br/>No: <em><strong>0</strong></em>{:/}
**Default Multiple Sign-on Limit**{::nomarkdown}<pre><code>  default_multiple_signon_limit</code></pre>{:/} | 219 | This field sets an upper limit on the number of concurrent sessions that <br/>one user can have from one IP address when the Multiple Sign-on field <br/>(#204) is set to "One IP" | NUMERIC |  | 
**Broker Activity Timeout**{::nomarkdown}<pre><code>  broker_activity_timeout</code></pre>{:/} | 230 | This field controls how long the Broker server waits (in seconds) for some<br/>activity from the client. Its value is passed to client applications<br/>compiled with version 1.1*6 and above of the Broker. The client<br/>application will contact ("poll") the server at an interval based on this<br/>field's value to let the server know it is still there. If a client stops<br/>polling the server, the server knows that the client process has<br/>terminated. The "ghost" server job is therefore stopped, enabling locks<br/>and other resources to be freed. A small timeout value in this field<br/>creates more server and network activity. A large value leaves ghost jobs<br/>on the server longer. <br/>We recommend setting it to a value of 180 seconds as a good compromise. | NUMERIC |  | 
**Gui Post Sign-on**{::nomarkdown}<pre><code>  gui_post_signon</code></pre>{:/} | 231 | This field will control if the POST SIGN-ON message is sent to the GUI <br/>client.  If it is sent then the GUI client should display the message <br/>before allowing the user to continue. | ENUMERATION |  | {::nomarkdown}Send/Show: <em><strong>1</strong></em><br/>Don't Send/Show: <em><strong>0</strong></em>{:/}
**Intro Message**{::nomarkdown}<pre><code>  intro_message</code></pre>{:/} | 240 | This field holds the text that is initially displayed at signon, before<br/>the prompt for access code or other checking. | STRING |  | 
**Post Sign-in Message**{::nomarkdown}<pre><code>  post_signin_message</code></pre>{:/} | 245 | This field holds the text that is displayed after the user has<br/>successfully passed the signon. | STRING |  | 
**Peer Systems**{::nomarkdown}<pre><code>  peer_systems</code></pre>{:/} | 250 | This field holds a list of IP addresses that the GETPEER function will <br/>not pass back from the API. <br/>It is set to 127.0.0.1 by default. | STRING |  | 
**Log Resource Usage?**{::nomarkdown}<pre><code>  log_resource_usage</code></pre>{:/} | 300 |  <br/>This Yes/No field is used to indicate whether resource usage data such as<br/>CPU seconds, DIO, BIO, etc. will be collected in ^XUCP(.  If this field is<br/>set to "YES", every time a user goes in and out of an option and each time<br/>recorded. | BOOLEAN |  | {::nomarkdown}false: <em><strong>N</strong></em><br/>true: <em><strong>Y</strong></em>{:/}
**Primary Hfs Directory**{::nomarkdown}<pre><code>  primary_hfs_directory</code></pre>{:/} | 320 | This field holds a Primary (default) directory path to be used whenever a<br/>HOST file is referenced and a Directory is not included.<br/>Example: Cache/VMS might have USER$:[TEMP]<br/>         Cache/NT might have T:\TEMP\<br/>         Cache/Linux might have /var/tmp/<br/>If this field is left blank then HOST files that don't have an explicit <br/>directory path will go to the current processes working directory. | STRING |  | 
**Secondary Hfs Directory**{::nomarkdown}<pre><code>  secondary_hfs_directory</code></pre>{:/} | 320.2 | This field holds the secondary HFS directory path. | STRING |  | 
**Facility Iso**{::nomarkdown}<pre><code>  facility_iso</code></pre>{:/} | 321.01 | This field holds a pointer to the facility Information Security Officer in<br/>the NEW PERSON file (#200). | POINTER |  | [New_Person-200](New_Person-200)
**Facility Cio**{::nomarkdown}<pre><code>  facility_cio</code></pre>{:/} | 321.02 | This field holds a pointer to the facility CIO in the NEW PERSON file <br/>(#200) | POINTER |  | [New_Person-200](New_Person-200)
**Ip Security On**{::nomarkdown}<pre><code>  ip_security_on</code></pre>{:/} | 405.1 | This field turns on or off the IP security "Three strikes and you are <br/>out" code. | BOOLEAN |  | {::nomarkdown}false: <em><strong>y</strong></em><br/>true: <em><strong>n</strong></em>{:/}
**Failed Attempts Limit - Irm**{::nomarkdown}<pre><code>  failed_attempts_limit__irm</code></pre>{:/} | 405.12 | This field holds the value of how many Failed Attempts must be counted by <br/>the XUSFACHK routine before a message is sent to the IRM during normal<br/>business hours (8:00 am to 4:30 pm).  This can be change by the value in <br/>the TOTAL COUNT INCREASE field. | NUMERIC |  | 
**Failed Attempts Limit - Aod**{::nomarkdown}<pre><code>  failed_attempts_limit__aod</code></pre>{:/} | 405.13 | This field holds the value of how many Failed Attempts must be counted by <br/>the XUSFACHK routine before a message is sent to the AOD during after<br/>hours (4:30 pm to 8:00 am).  This can be changed by the value in the <br/>TOTAL COUNT INCREASE field. | NUMERIC |  | 
**User Locking**{::nomarkdown}<pre><code>  user_locking</code></pre>{:/} | 405.14 | This field controls if Users are locked out of the system because<br/>of exceeding the limit on bad attempts.<br/>The ACCESS code must be correct so we can identify the user, and it is<br/>just the VERIFY code that is being entered wrong. | BOOLEAN |  | {::nomarkdown}false: <em><strong>y</strong></em><br/>true: <em><strong>n</strong></em>{:/}
**Last Run Failed Attempts Check**{::nomarkdown}<pre><code>  last_run_failed_attempts_check</code></pre>{:/} | 405.15 | This field holds the date time of the last run of the FAILED ATTEMPTS <br/>checking routine (XUSFACHK).<br/>This field is filled in by the routine and doesn't need user entry. | DATE-TIME |  | 
**Default Ts Slack**{::nomarkdown}<pre><code>  default_ts_slack</code></pre>{:/} | 405.16 | This field holds a default value for how many times in 10 minutes a<br/>Terminal Server can have a sign-on failure (entries in the FAILED ACCESS<br/>ATTEMPTS LOG) before it is locked.  A default value is 2 is used if no <br/>value is entered. | NUMERIC |  | 
**Keep Threshold**{::nomarkdown}<pre><code>  keep_threshold</code></pre>{:/} | 405.17 | This field holds the number of Failed Access Attempts in the current <br/>sample period that will cause the count to be saved for the next sample <br/>period.  This is used by the routine XUSFACHK and the value will need to <br/>be smaller for a more frequent running and larger for less frequent <br/>running. <br/>A starting value could be 10 if XUSFACHK is scheduled to run every 30 <br/>minutes. | NUMERIC |  | 
**Total Count Increase**{::nomarkdown}<pre><code>  total_count_increase</code></pre>{:/} | 405.18 | This field holds the value to be added to the IRM or AOD limits.<br/>If the total number of Failed Access Attempts in the sample period<br/>is greater than the IRM (or AOD) limit plus the TOTAL COUNT INCREASE <br/>then it will trigger the sending of the failed attempts message. | NUMERIC |  | 
**Terminal Server Ip**{::nomarkdown}<pre><code>  terminal_server_ip</code></pre>{:/} | 405.2 |  | OBJECT |  | [Terminal_Server_Ip-8989_305](#Terminal_Server_Ip-8989_305)
**Production**{::nomarkdown}<pre><code>  production</code></pre>{:/} | 501 | This field holds a flag to indicate if this is a Production account.<br/>It is a Yes/No flag with internal values of 1 = Yes, 0 = No.<br/>It is set by the system after comparing the System ID with the current<br/>System ID, at some point in the future will be checked against a master<br/>system. | BOOLEAN | REQUIRED | {::nomarkdown}false: <em><strong>1</strong></em><br/>true: <em><strong>0</strong></em>{:/}
**System Id**{::nomarkdown}<pre><code>  system_id</code></pre>{:/} | 502 | This field holds the SYSTEM ID, if this is a production system.<br/>This value is compared with the current system value and at some point <br/>in the future will be checked against a master system. | STRING |  | 
**Sid Last Checked**{::nomarkdown}<pre><code>  sid_last_checked</code></pre>{:/} | 503 | This field holds the date/time that the SID was last checked.<br/>If the SID has not been compared with the stored one today a full check <br/>will be done, otherwise the PROD api will just return the current value. | DATE-TIME |  | 
**Logical Disk Name**{::nomarkdown}<pre><code>  logical_disk_name</code></pre>{:/} | 504 | This field holds a logical disk name that is stored in the cache cpf file<br/>for client system in a ECP client-server setup. | STRING |  | 
**Physical Disk**{::nomarkdown}<pre><code>  physical_disk</code></pre>{:/} | 505 | This field hold the Physical disk name that Cache VMS converts the logical<br/>name(#504) in to. | STRING |  | 
**Error Limit**{::nomarkdown}<pre><code>  error_limit</code></pre>{:/} | 520.1 | This field holds the maximum number of a particular error to be recorded<br/>on one day. The count will continue in the ERROR SUMMARY file (#3.077)<br/>field FREQUENCY (#4) even though the error is not recorded in the error<br/>trap.  It is used in the $$SCREEN^%ZTER logic to tell the error trap to<br/>skip recording the error. | NUMERIC |  | 
**Send Error Summary**{::nomarkdown}<pre><code>  send_error_summary</code></pre>{:/} | 520.2 | This field controls if the error summary routine sends a record to a <br/>consolidating facility when it has finished running.<br/>The mail message is sent to the mail group XTER SUMMARY LOAD.<br/>In the VA this will include the remote entry <br/>G.XTER SUMMARY LOAD@DOMAIN.EXT. | BOOLEAN |  | {::nomarkdown}false: <em><strong>1</strong></em><br/>true: <em><strong>0</strong></em>{:/}
**Keep Error Trap**{::nomarkdown}<pre><code>  keep_error_trap</code></pre>{:/} | 520.3 | This field holds the number of days to keep the entries in the Detail<br/>Error Trap.<br/>Defaults to 7 if left blank. | NUMERIC |  | 
**Keep Error Summary**{::nomarkdown}<pre><code>  keep_error_summary</code></pre>{:/} | 520.4 | This field holds the number of days to keep the entries in the Error<br/>Trap Summary since they were last seen. Defaults to 90 if left blank. | NUMERIC |  | 
**New Person Enumeration Started**{::nomarkdown}<pre><code>  new_person_enumeration_started</code></pre>{:/} | 900 | This field will note when the New Person File (#200) began the VPID <br/>Enumeration Process. | DATE-TIME |  | 
**Paid Enumeration Started**{::nomarkdown}<pre><code>  paid_enumeration_started</code></pre>{:/} | 901 | This field will note when the PAID EMPLOYEE (#450) file began the VPID <br/>Enumeration Process. | DATE-TIME |  | 
**New Person Enumeration Finish**{::nomarkdown}<pre><code>  new_person_enumeration_finish</code></pre>{:/} | 902 | This field will note when the New Person (#200) file completed the VPID<br/>Enumeration Process. | DATE-TIME |  | 
**Paid Enumeration Finish**{::nomarkdown}<pre><code>  paid_enumeration_finish</code></pre>{:/} | 903 | This field will note when the PAID EMPLOYEE (#450) file completed the VPID<br/>Enumeration Process. | DATE-TIME |  | 

[&uarr; Return to top](#top)<br/>

## Sub-Files
### <a name="Alpha_beta_Test_Package-8989_332"></a>Alpha/beta Test Package (8989.332)

<dl>
<dt>ID</dt><dd>Alpha_beta_Test_Package-8989_332</dd></dl>

#### Properties

Label/Field Name | Field # | Description | Datatype | Attributes | Range
--- | --- | --- | --- | --- | ---
**Alpha/beta Test Package**{::nomarkdown}<pre><code>  alpha_beta_test_package</code></pre>{:/} | .01 | This field identifies a specific package which was installed as an alpha<br/>or beta test of the package. | POINTER | INDEXED<br/>REQUIRED | [Package-9_4](Package-9_4)
**Date Last Updated**{::nomarkdown}<pre><code>  date_last_updated</code></pre>{:/} | .02 | This field contains the date on which the alpha or beta test package was<br/>last installed in the account. | DATE-TIME |  | 
**Adressee For Usage Reporting**{::nomarkdown}<pre><code>  adressee_for_usage_reporting</code></pre>{:/} | .03 | This field contains a mail group at a domain to which installation and<br/>option usage messages are sent.  This is usually a mail group containing<br/>one or more of the developers of the package at the developing ISC. | STRING |  | 
**Version Number**{::nomarkdown}<pre><code>  version_number</code></pre>{:/} | .04 | This field contains the current version of the Alpha/Beta Test package.<br/>This value is used to label some reports to clarify which version of<br/>the test package they relate to.  The entry must contain a number<br/>followed by T or V (to indicate a package in Testing or in Verification)<br/>followed by a number. | STRING |  | 
**Date Errors Last Reported**{::nomarkdown}<pre><code>  date_errors_last_reported</code></pre>{:/} | .05 | This field is used to keep track of the last date on which reporting of<br/>errors back to the developing ISC was performed.  The date is used as the<br/>starting date for identification of errors to report. | DATE-TIME |  | 
**Package Namespace Or Prefix**{::nomarkdown}<pre><code>  package_namespace_or_prefix</code></pre>{:/} | 1 | This multiple field is used to identify the namespaces or prefixes used<br/>to identify the options and routines associated with the alpha or beta<br/>test package. | OBJECT |  | [Package_Namespace_Or_Prefix-8989_3321](#Package_Namespace_Or_Prefix-8989_3321)

[&uarr; Return to top](#top)<br/>


### <a name="Package_Namespace_Or_Prefix-8989_3321"></a>Package Namespace Or Prefix (8989.3321)

<dl>
<dt>ID</dt><dd>Package_Namespace_Or_Prefix-8989_3321</dd></dl>

#### Properties

Label/Field Name | Field # | Description | Datatype | Attributes | Range
--- | --- | --- | --- | --- | ---
**Package Namespace Or Prefix**{::nomarkdown}<pre><code>  package_namespace_or_prefix</code></pre>{:/} | .01 | This field identifies one of the alpha/beta package namespaces. | STRING | INDEXED<br/>REQUIRED | 
**Exclude Namespace Or Prefix**{::nomarkdown}<pre><code>  exclude_namespace_or_prefix</code></pre>{:/} | 1 | This multiple field is used to indicate any specific namespaces or<br/>prefixes which begin with the current namespace or prefix which should<br/>be excluded from analyses for the alpha/beta package.  Generally those<br/>namespaces which are immediately followed by the letter 'Z' are excluded | STRING |  | 

[&uarr; Return to top](#top)<br/>


### <a name="Alphabeta_Test_Option-8989_333"></a>Alpha,beta Test Option (8989.333)

<dl>
<dt>ID</dt><dd>Alphabeta_Test_Option-8989_333</dd></dl>

#### Properties

Label/Field Name | Field # | Description | Datatype | Attributes | Range
--- | --- | --- | --- | --- | ---
**Alpha,beta Test Option**{::nomarkdown}<pre><code>  alphabeta_test_option</code></pre>{:/} | .01 | This field identifies one option in alpha or beta test package which has<br/>been used since the last package installation. | POINTER | REQUIRED | [Option-19](Option-19)
**Accesses Since Last Update**{::nomarkdown}<pre><code>  accesses_since_last_update</code></pre>{:/} | .02 | This field is a count of the number of accesses to the alpha or beta<br/>test package option identified in field .01 since the last package<br/>installation. | NUMERIC |  | 

[&uarr; Return to top](#top)<br/>


### <a name="Volume_Set-8989_304"></a>Volume Set (8989.304)

<dl>
<dt>ID</dt><dd>Volume_Set-8989_304</dd></dl>

#### Properties

Label/Field Name | Field # | Description | Datatype | Attributes | Range
--- | --- | --- | --- | --- | ---
**Volume Set**{::nomarkdown}<pre><code>  volume_set</code></pre>{:/} | .01 | This is the name of each CPU or VOLUME SET in the domain. | STRING | INDEXED<br/>REQUIRED | 
**Max Signon Allowed**{::nomarkdown}<pre><code>  max_signon_allowed</code></pre>{:/} | 2 | This field defines the maximum number of jobs that XUS or RPC Broker will<br/>allow to sign-on to this VOLUME SET or CPU. | NUMERIC |  | 
**Log System Rt?**{::nomarkdown}<pre><code>  log_system_rt</code></pre>{:/} | 6 | Setting this field to YES enables system response time logging,<br/>which will only take place if the necessary code exists in the<br/>application software. | BOOLEAN |  | {::nomarkdown}false: <em><strong>n</strong></em><br/>true: <em><strong>y</strong></em>{:/}

[&uarr; Return to top](#top)<br/>


### <a name="Terminal_Server_Ip-8989_305"></a>Terminal Server Ip (8989.305)

<dl>
<dt>ID</dt><dd>Terminal_Server_Ip-8989_305</dd></dl>

#### Properties

Label/Field Name | Field # | Description | Datatype | Attributes | Range
--- | --- | --- | --- | --- | ---
**Terminal Server Ip**{::nomarkdown}<pre><code>  terminal_server_ip</code></pre>{:/} | .01 | This field holds the IP addresses of Terminal servers that should get <br/>special treatment from the IP security software. | STRING | INDEXED<br/>REQUIRED | 
**After Hours Slack**{::nomarkdown}<pre><code>  after_hours_slack</code></pre>{:/} | 1 | This field holds the after hours slack value use to delay locking the<br/>Terminal Server address.<br/>Between the hours of 4:30 pm and 8:00 am, If the FAILED ACCESS ATTEMPTS<br/>LOG has had more entries from this Terminal Server in the last 10 minutes<br/>than the slack value the TS IP address will be locked. | NUMERIC |  | 
**Last Time Reset**{::nomarkdown}<pre><code>  last_time_reset</code></pre>{:/} | 2 | This field holds the FileMan date time that the LOCK on this Terminal<br/>Server was last cleared. | DATE-TIME |  | 

[&uarr; Return to top](#top)<br/>




{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:39 pm</p>{:/}