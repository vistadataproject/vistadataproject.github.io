---
layout: default
title: VDM documentation
---

## [VDM](TableOfContent.md) &#8594; Kernel_System_Parameters-8989_3 

<dl>
<dt>id</dt><dd>Kernel_System_Parameters-8989_3</dd>
<dt>fmId</dt><dd>8989.3</dd>
<dt>label</dt><dd>Kernel System Parameters</dd>
<dt>location</dt><dd>^XTV(8989.3,</dd>
<dt>description</dt><dd>This file holds the site parameters for this installation of the Kernel.<br/>It will have only one entry -- the domain name of the installation site.<br/>Some parameters are defined by the systems manager during the installation<br/>process.  These include Agence, volume set multiple, Default parameters.<br/>Others may be edited subsequent to installation. Spooling, response time,<br/>and audit parameters may be established.  Priorities may be set for<br/>interactive users and for TaskMan.  Defaults for fields such as timed<br/>read, auto menu, and ask device are defined for use when not otherwise<br/>specified for a user or device.</dd>
</dl>

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
| number | .001 | Number | {::nomarkdown}Used to have VA fileman only have one entry in the file.{:/} | IEN |  |  |  | 
| domain_name | .01 | Domain Name | {::nomarkdown}This is the name of this installation of the kernel, as it is known<br/>to the rest of the network. It must appear in the DOMAIN file.<br/>This name applies to all CPUs or Volume sets which access this ^XMB<br/>global.{:/} | POINTER |  | REQUIRED, INDEXED | Domain-4_2 | 
| irm_mail_group | .02 | Irm Mail Group | {::nomarkdown}This field holds the name of the Mail Group that should get messages or <br/>bulletns about problems on the system.{:/} | STRING |  | REQUIRED |  | 
| after_hours_mail_group | .03 | After Hours Mail Group | {::nomarkdown}This field holds the name of a mail group that should get messages and <br/>bulletins after hours or on weekends and holidays.{:/} | STRING |  |  |  | 
| mixed_os | .05 | Mixed Os | {::nomarkdown}This field tells Kernel that this is a MIXED OS environment.<br/>This is only supported on a Cache ECP client/server setup.<br/>The PRIMARY OS is VMS and the SECONDARY OS is non-VMS.{:/} | ENUMERATION |  |  | {::nomarkdown}<dl><dt>1</dt><dd>VMS/Linux</dd><dt>0</dt><dd>No</dd></dl>{:/} | 
| local_tmp | .07 | Local Tmp | {::nomarkdown}Set this field to Yes if ^TMP, ^UTILITY, and ^XUTL(\XQ\) are local to <br/>each node in a multi-node system as in Cache. Set it to No if everything<br/>is clustered together.<br/>{:/} | BOOLEAN |  |  | {::nomarkdown}<dl><dt>1</dt><dd>false</dd><dt>0</dt><dd>true</dd></dl>{:/} | 
| agency_code | 9 | Agency Code | {::nomarkdown}This field defines what agency uses this computer.  It sets a flag which<br/>may be accessed by application programs which need to know this information.<br/>For example, a scheduling program may operate one way in an Air Force<br/>environment, and another in a VA environment.{:/} | ENUMERATION |  |  | {::nomarkdown}<dl><dt>V</dt><dd>VA</dd><dt>E</dt><dd>EHR</dd><dt>ARMY</dt><dd>ARMY</dd><dt>I</dt><dd>IHS</dd><dt>AF</dt><dd>AIR FORCE</dd><dt>O</dt><dd>OTHER</dd><dt>N</dt><dd>NAVY</dd><dt>USCG</dt><dd>COAST GUARD</dd></dl>{:/} | 
| routine_monitoring | 9.8 | Routine Monitoring | {::nomarkdown}This field controls how the routine monitoring program behaves.<br/>Weather to look at all routines or just selected name spaces.{:/} | ENUMERATION |  |  | {::nomarkdown}<dl><dt>a</dt><dd>All</dd><dt>s</dt><dd>Selected</dd><dt>n</dt><dd>No</dd></dl>{:/} | 
| routine_nspace_to_monitor | 9.81 | Routine N-space To Monitor |  | [STRING] |  |  |  | 
| autogenerate_access_codes | 11 | Auto-generate Access Codes | {::nomarkdown}If this field is set to YES, then the user will not be allowed to <br/>choose their ACCESS CODE - it will be assigned for them.{:/} | BOOLEAN |  |  | {::nomarkdown}<dl><dt>y</dt><dd>false</dd><dt>n</dt><dd>true</dd></dl>{:/} | 
| autogenerate_verify_codes | 11.2 | Auto-generate Verify Codes | {::nomarkdown}During the C&A review of VistA the current practice of leaving the VERIFY<br/>CODE blank until the user signed on the first time was found to not comply<br/>with VA DIRECTIVE 6504. <br/> <br/>This field will be used when someone other than the user goes to enter a <br/>verify code.  The system will select a strong verify code and tell the <br/>operator what the new code is.{:/} | BOOLEAN |  |  | {::nomarkdown}<dl><dt>y</dt><dd>false</dd><dt>n</dt><dd>true</dd></dl>{:/} | 
| user_characteristics_template | 12 | User Characteristics Template | {::nomarkdown}This field contains the name of the input template to be used for the<br/>EDIT USER CHARACTERISTIC option. If there is a ScreenMan form with the<br/>same name it will be used, terminal type permitting. If it is left blank,<br/>the XUEDIT CHARACTERISTICS template will be used.  You may want to define<br/>different fields. The TERMINAL TYPE question is asked before the template<br/>is called.{:/} | POINTER |  |  | Input_Template-_402 | 
| academic_affiliation_waiver | 13 | Academic Affiliation Waiver | {::nomarkdown}The VA Handbook 6500 page 60 requires:<br/>6. POLICY AND PROCEDURES, c. Technical Controls,<br/> (2) Logical Access Controls.<br/>   d. Accounts are automatically disabled if inactive for 30 days.<br/> <br/>The Office of Academic Affiliation requested a waiver to the 30 day<br/>disabling of inactive accounts asking it be 90 days and this waiver was <br/>approved.<br/> <br/>This field controls if the VA Handbook 6500 30 day limit is used or the<br/>site has an Academic Affiliation and the 90 day limit is to be used.<br/> <br/>There is a copy of the waiver attached to Remedy Ticket 283028.{:/} | BOOLEAN |  |  | {::nomarkdown}<dl><dt>1</dt><dd>false</dd><dt>0</dt><dd>true</dd></dl>{:/} | 
| option_audit | 19 | Option Audit | {::nomarkdown}This field indicates what should be audited  between the 'Initiate Audit'<br/> date and 'Terminate Audit' date fields.  The 'Option to Audit' Subfile<br/> along with the 'Namespace to Audit' Subfile hold the lists of specific<br/> options that would be audited (choosing \s\).  The 'User to Audit'{:/} | ENUMERATION |  |  | {::nomarkdown}<dl><dt>n</dt><dd>NO AUDIT</dd><dt>a</dt><dd>ALL OPTIONS AUDITED</dd><dt>s</dt><dd>SPECIFIC OPTIONS AUDITED</dd><dt>u</dt><dd>USERS AUDITED</dd></dl>{:/} | 
| option_to_audit | 19.1 | Option To Audit | {::nomarkdown}This subfile holds a list of options to audit.{:/} | [POINTER] |  |  | {id:Option-19} | 
| namespace_to_audit | 19.2 | Namespace To Audit | {::nomarkdown}This subfile holds a list of namespaces to audit.{:/} | [STRING] |  |  |  | 
| user_to_audit | 19.3 | User To Audit | {::nomarkdown}This subfile holds a list of users to audit.{:/} | [POINTER] |  |  | {id:New_Person-200} | 
| initiate_audit | 19.4 | Initiate Audit | {::nomarkdown}This field indicates the date when an audit will begin.  The 'Option<br/>'Audit' Field defines the nature of the audit that will be performed.<br/>Auditing will only be done if there is both a 'Initiate Audit' and<br/>'Terminate Audit' data.{:/} | DATE-TIME |  |  |  | 
| terminate_audit | 19.5 | Terminate Audit | {::nomarkdown}This field indicates when the audit will end.  The start date is<br/>set in the 'Initiate Audit' Field.{:/} | DATE-TIME |  |  |  | 
| new_person_identifiers | 21 | New Person Identifiers | {::nomarkdown}This field holds MUMPS code to set the variable DR to the string of fields<br/>(Not a template) to be used as Identifiers when adding entries to the NEW<br/>PERSON file.<br/> <br/> #9 (SSN) is required if the user does not hold the XUSPF200 key.<br/> <br/>These fields can be added to by the application.{:/} | STRING |  |  |  | 
| ccow_token_timeout | 30.1 | Ccow Token Timeout | {::nomarkdown}This field holds the value for how long a CCOW token is good for in<br/>seconds. When the current time is greater that the CCOW token create time<br/>plus the timeout seconds, the CCOW token will no longer be valid. If this<br/>value is too small (short) users will be frustrated that the SSO part<br/>doesn't work.  If the value is too large (Long) there is a chance that it<br/>could be used to break into the system.  A default value of 5400 (1.5<br/>hours) will be used.{:/} | NUMERIC |  |  |  | 
| max_spool_lines_per_user | 31.1 | Max Spool Lines Per User | {::nomarkdown}This field holds the MAX number of lines of spooled output any user may<br/>spool. If the user has more that this number then they will not be allowed<br/>to spool any more until some of their spooled documents are deleted.  This<br/>only controls the granting of new spool documents and doesn't terminate a<br/>the number of lines that will be transfered into the spool data file.<br/>Recommended value 9999.{:/} | NUMERIC |  |  |  | 
| max_spool_documents_per_user | 31.2 | Max Spool Documents Per User | {::nomarkdown}This field limits the number of spooled documents that any user<br/>may have on the system.<br/>Recommended value 10-100.{:/} | NUMERIC |  |  |  | 
| max_spool_document_lifespan | 31.3 | Max Spool Document Life-span | {::nomarkdown}This field controls the number of days that a spooled document will<br/>be allowed to remain in the spooler before deletion by the XU-SPL-PURGE<br/>option that needs to be setup to run in the background.{:/} | NUMERIC |  |  |  | 
| alpha_beta_test_package | 32 | Alpha/beta Test Package | {::nomarkdown}This multiple field is used to identify any packages which are currently<br/>in alpha or beta test at the site.{:/} | [OBJECT] |  |  | [Alpha_beta_Test_Package-8989_332](#Alpha_beta_Test_Package-8989_332)  | 
| alphabeta_test_option | 33 | Alpha,beta Test Option | {::nomarkdown}This is a multiple field which is used to keep a log of usage of the<br/>options associated with an alpha or beta test of a package based on the<br/>namespace(s) indicated for the alpha or beta test package.{:/} | [OBJECT] |  |  | [Alphabeta_Test_Option-8989_333](#Alphabeta_Test_Option-8989_333)  | 
| volume_set | 41 | Volume Set | {::nomarkdown}This is the set of all CPU names in this domain.{:/} | [OBJECT] |  |  | [Volume_Set-8989_304](#Volume_Set-8989_304)  | 
| dns_ip | 51 | Dns Ip | {::nomarkdown}This field holds the IP addresses of the DNS(s) that XLFNSLK will use.<br/>Data must be in the form of nnn.nnn.nnn.nnn To list more that one separate<br/>them with commas (,).{:/} | STRING |  |  |  | 
| pki_server | 53.1 | Pki Server | {::nomarkdown}This field holds one to three IP addresses for the PKI servers for this<br/>site.  Each IP address is separated by comas.<br/>Example: 127.0.0.1,PKI.fo-oakland.domain.ext{:/} | STRING |  |  |  | 
| path_to_mwapi_bitmaps | 101 | Path To Mwapi Bitmaps | {::nomarkdown}NA{:/} | STRING |  |  |  | 
| security_token_service | 200.1 | Security Token Service | {::nomarkdown}When using brokered authentication with a security token issued by a Security Token Service (STS), this field will contain the identification of the issuer of the token. The STS is trusted by both the client and the service to provide interoperable security tokens. Security Assertion Markup Language (SAML) tokens are standards-based XML tokens that are used to exchange security information, including attribute statements, authentication decision statements, and authorization decision statements. They can be used as part of a Single Sign-On (SSO) solution allowing a client to talk to services running on disparate technologies.{:/} | STRING |  |  |  | 
| organization | 200.2 | Organization | {::nomarkdown}Identity and Access Management ORGANIZATION field used to identify the Organization of this VistA instance. For internally authenticated users, this field will match the SUBJECT ORGANIZATION field (#205.2) of the user identified in the NEW PERSON file (#200). For the VA, this field should always contain the value: \Department Of Veterans Affairs\{:/} | STRING |  |  |  | 
| organization_id | 200.3 | Organization Id | {::nomarkdown}Identity and Access Management ORGANIZATION ID field used to uniquely identify the Organization of this VistA instance. For internally authenticated users, this field will match the SUBJECT ORGANIZATION ID field (#205.3) of the user identified in the NEW PERSON file (#200). For the VA, this field should always contain the value: \urn:oid:2.16.840.1.113883.4.349\{:/} | STRING |  |  |  | 
| default_number_of_attempts | 202 | Default # Of Attempts | {::nomarkdown}This is the default number of attempts that a user may try to sign-on<br/>before the device is locked. This field is overridden by a similar field<br/>in the DEVICE File. This means that during sign-on the checks against the<br/>device file for OUT OF SERVICE, SECURITY, and PROHIBITED TIMES FOR SIGN-ON<br/>will be skipped.  <br/>The maximum value (5) is set by the VA INFORMATION SYSTEM ACCOUNT AND<br/>PASSWORD MANAGEMENT POLICY.{:/} | NUMERIC |  |  |  | 
| default_lockout_time | 203 | Default Lock-out Time | {::nomarkdown}This is the default time in seconds that a locked device must be idle<br/>before another sign-on attempt will be allowed. This time is overridden<br/>by a similar field in the DEVICE File. This means that during sign-on the<br/>checks against the device file for OUT OF SERVICE, SECURITY, and<br/>PROHIBITED TIMES FOR SIGN-ON will be skipped.<br/>The minimum value is set by the VA INFORMATION SYSTEM ACCOUNT AND PASSWORD<br/>MANAGEMENT POLICY.{:/} | NUMERIC |  |  |  | 
| default_multiple_signon | 204 | Default Multiple Sign-on | {::nomarkdown}This is the default value for whether users may sign-on at more<br/>than one terminal at a time. It is overridden by similar fields<br/>in the DEVICE and NEW PERSON Files. If you select \Only one IP\ be sure to<br/>put a value into the \MULTIPLE SIGN-ON LIMIT\ field so users can sign-on<br/>at least once.<br/>Current Values<br/>0 = Multiple signon not allowed.<br/>1 = Multiple signon Allowed.<br/>2 = Multiple sign only allowed from one IP address.{:/} | ENUMERATION |  |  | {::nomarkdown}<dl><dt>1</dt><dd>YES</dd><dt>2</dt><dd>Only one IP</dd><dt>0</dt><dd>NO</dd></dl>{:/} | 
| ask_device_type_at_signon | 205 | Ask Device Type At Sign-on | {::nomarkdown}This is the default for whether a user/terminal should be asked for their<br/>terminal type at sign-on. This is overridden by a similar field in the<br/>DEVICE and NEW PERSON Files.<br/> <br/>terminals DEVICE ATTRIBUTES message, if it is a know one then the<br/>terminal type is set to this. Otherwise the user is prompted.<br/> <br/>If set to NO then the one from the Last Sign-on field or device subtype<br/>will will be used.{:/} | BOOLEAN |  |  | {::nomarkdown}<dl><dt>1</dt><dd>false</dd><dt>0</dt><dd>true</dd></dl>{:/} | 
| default_automenu | 206 | Default Auto-menu | {::nomarkdown}This is the default for whether auto-menu is turned ON or OFF.<br/>It is overridden by similar fields in the DEVICE and NEW PERSON Files.{:/} | BOOLEAN |  |  | {::nomarkdown}<dl><dt>1</dt><dd>false</dd><dt>0</dt><dd>true</dd></dl>{:/} | 
| default_language | 207 | Default Language | {::nomarkdown}This field points to the default language that is used by the<br/>site.  The value can be replaced by a language field in the<br/>New Person file (200.07).{:/} | POINTER |  |  | Language-_85 | 
| default_typeahead | 209 | Default Type-ahead | {::nomarkdown}This is the default as to whether or not Type-Ahead is allowed.<br/>It is overridden by similar fields in the DEVICE and NEW PERSON Files.{:/} | BOOLEAN |  |  | {::nomarkdown}<dl><dt>Y</dt><dd>false</dd><dt>N</dt><dd>true</dd></dl>{:/} | 
| default_timedread_seconds | 210 | Default Timed-read (seconds) | {::nomarkdown}This is the default time-out for all READs and is overridden by<br/>similar fields in the DEVICE and NEW PERSON Files.{:/} | NUMERIC |  |  |  | 
| bypass_device_lockout | 211 | Bypass Device Lock-out | {::nomarkdown}Setting this field to YES will cause all device lock-out checking to be<br/>bypassed.  This means that during sign-on the checks against the device<br/>file for OUT OF SERVICE, SECURITY, and PROHIBITED TIMES FOR SIGN-ON will<br/>be skipped.  Can be overridden by the PERFORM DEVICE CHECKING field in the{:/} | BOOLEAN |  |  | {::nomarkdown}<dl><dt>1</dt><dd>false</dd><dt>0</dt><dd>true</dd></dl>{:/} | 
| reserved | 212 | Reserved | {::nomarkdown}*** This field is NO longer used. ***{:/} | BOOLEAN |  |  | {::nomarkdown}<dl><dt>1</dt><dd>false</dd><dt>0</dt><dd>true</dd></dl>{:/} | 
| device_to_audit | 212.1 | Device To Audit | {::nomarkdown}If device auditing is activated, This holds a list of devises that<br/>are to be audited.{:/} | [POINTER] |  |  | {id:Device-3_5} | 
| failed_access_attempt_audit | 212.5 | Failed Access Attempt Audit | {::nomarkdown}This field indicates whether an audit log is to be generated for failed<br/>access attempts.  Audits can be done for all devices or specified devices <br/>only.  Recording of what is entered is optional.{:/} | ENUMERATION |  |  | {::nomarkdown}<dl><dt>N</dt><dd>NO AUDIT</dd><dt>D</dt><dd>SPECIFIED DEVICES/NO TEXT RECORDED</dd><dt>A</dt><dd>ALL DEVICES/NO TEXT RECORDED</dd><dt>DR</dt><dd>SPECIFIED DEVICES/TEXT RECORDED</dd><dt>AR</dt><dd>ALL DEVICES/TEXT RECORDED</dd></dl>{:/} | 
| reserved-213 | 213 | Reserved | {::nomarkdown}This field is reserved for future use.  <br/> {:/} | BOOLEAN |  |  | {::nomarkdown}<dl><dt>1</dt><dd>false</dd><dt>0</dt><dd>true</dd></dl>{:/} | 
| lifetime_of_verify_code | 214 | Lifetime Of Verify Code | {::nomarkdown}This is the number of days that a VERIFY code remains valid.<br/>After this time the user must choose a new VERIFY code.{:/} | NUMERIC |  | REQUIRED |  | 
| interactive_users_priority | 216 | Interactive User's Priority | {::nomarkdown}This field will change the priority of interactive users on the system<br/>at sign-on time.  There is a danger that using this field will<br/>cause the users to have poor response time from the computer.{:/} | NUMERIC |  |  |  | 
| default_institution | 217 | Default Institution | {::nomarkdown}This field is used to define a default institution that will be assigned<br/>as the user's institution (DUZ(2)) for any user that doesn't have one.<br/> <br/>Other Developers are allowed to get this data directly from the{:/} | POINTER |  | REQUIRED | [Institution-4](Institution-4.md) | 
| default_auto_signon | 218 | Default Auto Sign-on | {::nomarkdown}This field will control the Auto Sign-on (Single Sign-on) feature.<br/> <br/>To completely turn off this feature for all users: set to DISABLED.<br/>To allow only selected users: set to No.<br/>To allow ALL but selected users: set to Yes.<br/> <br/>The Yes and No values can be over ridden by the AUTO SIGN-ON field in the<br/>New Person file.<br/>Use of this feature impacts user connecting via Telnet and the Broker.{:/} | ENUMERATION |  |  | {::nomarkdown}<dl><dt>d</dt><dd>Disabled</dd><dt>1</dt><dd>Yes</dd><dt>0</dt><dd>No</dd></dl>{:/} | 
| default_multiple_signon_limit | 219 | Default Multiple Sign-on Limit | {::nomarkdown}This field sets an upper limit on the number of concurrent sessions that <br/>one user can have from one IP address when the Multiple Sign-on field <br/>(#204) is set to \One IP\{:/} | NUMERIC |  |  |  | 
| broker_activity_timeout | 230 | Broker Activity Timeout | {::nomarkdown}This field controls how long the Broker server waits (in seconds) for some<br/>activity from the client. Its value is passed to client applications<br/>compiled with version 1.1*6 and above of the Broker. The client<br/>application will contact (\poll\) the server at an interval based on this<br/>field's value to let the server know it is still there. If a client stops<br/>polling the server, the server knows that the client process has<br/>terminated. The \ghost\ server job is therefore stopped, enabling locks<br/>and other resources to be freed. A small timeout value in this field<br/>creates more server and network activity. A large value leaves ghost jobs<br/>on the server longer. <br/>We recommend setting it to a value of 180 seconds as a good compromise.{:/} | NUMERIC |  |  |  | 
| gui_post_signon | 231 | Gui Post Sign-on | {::nomarkdown}This field will control if the POST SIGN-ON message is sent to the GUI <br/>client.  If it is sent then the GUI client should display the message <br/>before allowing the user to continue.{:/} | ENUMERATION |  |  | {::nomarkdown}<dl><dt>1</dt><dd>Send/Show</dd><dt>0</dt><dd>Don't Send/Show</dd></dl>{:/} | 
| intro_message | 240 | Intro Message | {::nomarkdown}This field holds the text that is initially displayed at signon, before<br/>the prompt for access code or other checking.{:/} | STRING |  |  |  | 
| post_signin_message | 245 | Post Sign-in Message | {::nomarkdown}This field holds the text that is displayed after the user has<br/>successfully passed the signon.{:/} | STRING |  |  |  | 
| peer_systems | 250 | Peer Systems | {::nomarkdown}This field holds a list of IP addresses that the GETPEER function will <br/>not pass back from the API. <br/>It is set to 127.0.0.1 by default.{:/} | STRING |  |  |  | 
| log_resource_usage | 300 | Log Resource Usage? | {::nomarkdown} <br/>This Yes/No field is used to indicate whether resource usage data such as<br/>CPU seconds, DIO, BIO, etc. will be collected in ^XUCP(.  If this field is<br/>set to \YES\, every time a user goes in and out of an option and each time<br/>recorded.{:/} | BOOLEAN |  |  | {::nomarkdown}<dl><dt>N</dt><dd>false</dd><dt>Y</dt><dd>true</dd></dl>{:/} | 
| primary_hfs_directory | 320 | Primary Hfs Directory | {::nomarkdown}This field holds a Primary (default) directory path to be used whenever a<br/>HOST file is referenced and a Directory is not included.<br/>Example: Cache/VMS might have USER$:[TEMP]<br/>         Cache/NT might have T:\\TEMP\\<br/>         Cache/Linux might have /var/tmp/<br/>If this field is left blank then HOST files that don't have an explicit <br/>directory path will go to the current processes working directory.{:/} | STRING |  |  |  | 
| secondary_hfs_directory | 320.2 | Secondary Hfs Directory | {::nomarkdown}This field holds the secondary HFS directory path.{:/} | STRING |  |  |  | 
| facility_iso | 321.01 | Facility Iso | {::nomarkdown}This field holds a pointer to the facility Information Security Officer in<br/>the NEW PERSON file (#200).{:/} | POINTER |  |  | [New_Person-200](New_Person-200.md) | 
| facility_cio | 321.02 | Facility Cio | {::nomarkdown}This field holds a pointer to the facility CIO in the NEW PERSON file <br/>(#200){:/} | POINTER |  |  | [New_Person-200](New_Person-200.md) | 
| ip_security_on | 405.1 | Ip Security On | {::nomarkdown}This field turns on or off the IP security \Three strikes and you are <br/>out\ code.{:/} | BOOLEAN |  |  | {::nomarkdown}<dl><dt>y</dt><dd>false</dd><dt>n</dt><dd>true</dd></dl>{:/} | 
| failed_attempts_limit__irm | 405.12 | Failed Attempts Limit - Irm | {::nomarkdown}This field holds the value of how many Failed Attempts must be counted by <br/>the XUSFACHK routine before a message is sent to the IRM during normal<br/>business hours (8:00 am to 4:30 pm).  This can be change by the value in <br/>the TOTAL COUNT INCREASE field.{:/} | NUMERIC |  |  |  | 
| failed_attempts_limit__aod | 405.13 | Failed Attempts Limit - Aod | {::nomarkdown}This field holds the value of how many Failed Attempts must be counted by <br/>the XUSFACHK routine before a message is sent to the AOD during after<br/>hours (4:30 pm to 8:00 am).  This can be changed by the value in the <br/>TOTAL COUNT INCREASE field.{:/} | NUMERIC |  |  |  | 
| user_locking | 405.14 | User Locking | {::nomarkdown}This field controls if Users are locked out of the system because<br/>of exceeding the limit on bad attempts.<br/>The ACCESS code must be correct so we can identify the user, and it is<br/>just the VERIFY code that is being entered wrong.{:/} | BOOLEAN |  |  | {::nomarkdown}<dl><dt>y</dt><dd>false</dd><dt>n</dt><dd>true</dd></dl>{:/} | 
| last_run_failed_attempts_check | 405.15 | Last Run Failed Attempts Check | {::nomarkdown}This field holds the date time of the last run of the FAILED ATTEMPTS <br/>checking routine (XUSFACHK).<br/>This field is filled in by the routine and doesn't need user entry.{:/} | DATE-TIME |  |  |  | 
| default_ts_slack | 405.16 | Default Ts Slack | {::nomarkdown}This field holds a default value for how many times in 10 minutes a<br/>Terminal Server can have a sign-on failure (entries in the FAILED ACCESS<br/>ATTEMPTS LOG) before it is locked.  A default value is 2 is used if no <br/>value is entered.{:/} | NUMERIC |  |  |  | 
| keep_threshold | 405.17 | Keep Threshold | {::nomarkdown}This field holds the number of Failed Access Attempts in the current <br/>sample period that will cause the count to be saved for the next sample <br/>period.  This is used by the routine XUSFACHK and the value will need to <br/>be smaller for a more frequent running and larger for less frequent <br/>running. <br/>A starting value could be 10 if XUSFACHK is scheduled to run every 30 <br/>minutes.{:/} | NUMERIC |  |  |  | 
| total_count_increase | 405.18 | Total Count Increase | {::nomarkdown}This field holds the value to be added to the IRM or AOD limits.<br/>If the total number of Failed Access Attempts in the sample period<br/>is greater than the IRM (or AOD) limit plus the TOTAL COUNT INCREASE <br/>then it will trigger the sending of the failed attempts message.{:/} | NUMERIC |  |  |  | 
| terminal_server_ip | 405.2 | Terminal Server Ip |  | [OBJECT] |  |  | [Terminal_Server_Ip-8989_305](#Terminal_Server_Ip-8989_305)  | 
| production | 501 | Production | {::nomarkdown}This field holds a flag to indicate if this is a Production account.<br/>It is a Yes/No flag with internal values of 1 = Yes, 0 = No.<br/>It is set by the system after comparing the System ID with the current<br/>System ID, at some point in the future will be checked against a master<br/>system.{:/} | BOOLEAN |  | REQUIRED | {::nomarkdown}<dl><dt>1</dt><dd>false</dd><dt>0</dt><dd>true</dd></dl>{:/} | 
| system_id | 502 | System Id | {::nomarkdown}This field holds the SYSTEM ID, if this is a production system.<br/>This value is compared with the current system value and at some point <br/>in the future will be checked against a master system.{:/} | STRING |  |  |  | 
| sid_last_checked | 503 | Sid Last Checked | {::nomarkdown}This field holds the date/time that the SID was last checked.<br/>If the SID has not been compared with the stored one today a full check <br/>will be done, otherwise the PROD api will just return the current value.{:/} | DATE-TIME |  |  |  | 
| logical_disk_name | 504 | Logical Disk Name | {::nomarkdown}This field holds a logical disk name that is stored in the cache cpf file<br/>for client system in a ECP client-server setup.{:/} | STRING |  |  |  | 
| physical_disk | 505 | Physical Disk | {::nomarkdown}This field hold the Physical disk name that Cache VMS converts the logical<br/>name(#504) in to.{:/} | STRING |  |  |  | 
| error_limit | 520.1 | Error Limit | {::nomarkdown}This field holds the maximum number of a particular error to be recorded<br/>on one day. The count will continue in the ERROR SUMMARY file (#3.077)<br/>field FREQUENCY (#4) even though the error is not recorded in the error<br/>trap.  It is used in the $$SCREEN^%ZTER logic to tell the error trap to<br/>skip recording the error.{:/} | NUMERIC |  |  |  | 
| send_error_summary | 520.2 | Send Error Summary | {::nomarkdown}This field controls if the error summary routine sends a record to a <br/>consolidating facility when it has finished running.<br/>The mail message is sent to the mail group XTER SUMMARY LOAD.<br/>In the VA this will include the remote entry <br/>G.XTER SUMMARY LOAD@DOMAIN.EXT.{:/} | BOOLEAN |  |  | {::nomarkdown}<dl><dt>1</dt><dd>false</dd><dt>0</dt><dd>true</dd></dl>{:/} | 
| keep_error_trap | 520.3 | Keep Error Trap | {::nomarkdown}This field holds the number of days to keep the entries in the Detail<br/>Error Trap.<br/>Defaults to 7 if left blank.{:/} | NUMERIC |  |  |  | 
| keep_error_summary | 520.4 | Keep Error Summary | {::nomarkdown}This field holds the number of days to keep the entries in the Error<br/>Trap Summary since they were last seen. Defaults to 90 if left blank.{:/} | NUMERIC |  |  |  | 
| new_person_enumeration_started | 900 | New Person Enumeration Started | {::nomarkdown}This field will note when the New Person File (#200) began the VPID <br/>Enumeration Process.{:/} | DATE-TIME |  |  |  | 
| paid_enumeration_started | 901 | Paid Enumeration Started | {::nomarkdown}This field will note when the PAID EMPLOYEE (#450) file began the VPID <br/>Enumeration Process.{:/} | DATE-TIME |  |  |  | 
| new_person_enumeration_finish | 902 | New Person Enumeration Finish | {::nomarkdown}This field will note when the New Person (#200) file completed the VPID<br/>Enumeration Process.{:/} | DATE-TIME |  |  |  | 
| paid_enumeration_finish | 903 | Paid Enumeration Finish | {::nomarkdown}This field will note when the PAID EMPLOYEE (#450) file completed the VPID<br/>Enumeration Process.{:/} | DATE-TIME |  |  |  | 

## <a name="Alpha_beta_Test_Package-8989_332"></a>Alpha_beta_Test_Package-8989_332 

<dl>
<dt>id</dt><dd>Alpha_beta_Test_Package-8989_332</dd>
<dt>fmId</dt><dd>8989.332</dd>
<dt>label</dt><dd>Alpha/beta Test Package</dd>
</dl>

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
| alpha_beta_test_package | .01 | Alpha/beta Test Package | {::nomarkdown}This field identifies a specific package which was installed as an alpha<br/>or beta test of the package.{:/} | POINTER |  | REQUIRED, INDEXED | Package-9_4 | 
| date_last_updated | .02 | Date Last Updated | {::nomarkdown}This field contains the date on which the alpha or beta test package was<br/>last installed in the account.{:/} | DATE-TIME |  |  |  | 
| adressee_for_usage_reporting | .03 | Adressee For Usage Reporting | {::nomarkdown}This field contains a mail group at a domain to which installation and<br/>option usage messages are sent.  This is usually a mail group containing<br/>one or more of the developers of the package at the developing ISC.{:/} | STRING |  |  |  | 
| version_number | .04 | Version Number | {::nomarkdown}This field contains the current version of the Alpha/Beta Test package.<br/>This value is used to label some reports to clarify which version of<br/>the test package they relate to.  The entry must contain a number<br/>followed by T or V (to indicate a package in Testing or in Verification)<br/>followed by a number.{:/} | STRING |  |  |  | 
| date_errors_last_reported | .05 | Date Errors Last Reported | {::nomarkdown}This field is used to keep track of the last date on which reporting of<br/>errors back to the developing ISC was performed.  The date is used as the<br/>starting date for identification of errors to report.{:/} | DATE-TIME |  |  |  | 
| package_namespace_or_prefix | 1 | Package Namespace Or Prefix | {::nomarkdown}This multiple field is used to identify the namespaces or prefixes used<br/>to identify the options and routines associated with the alpha or beta<br/>test package.{:/} | [OBJECT] |  |  | [Package_Namespace_Or_Prefix-8989_3321](#Package_Namespace_Or_Prefix-8989_3321)  | 

## <a name="Alphabeta_Test_Option-8989_333"></a>Alphabeta_Test_Option-8989_333 

<dl>
<dt>id</dt><dd>Alphabeta_Test_Option-8989_333</dd>
<dt>fmId</dt><dd>8989.333</dd>
<dt>label</dt><dd>Alpha,beta Test Option</dd>
</dl>

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
| alphabeta_test_option | .01 | Alpha,beta Test Option | {::nomarkdown}This field identifies one option in alpha or beta test package which has<br/>been used since the last package installation.{:/} | POINTER |  | REQUIRED | Option-19 | 
| accesses_since_last_update | .02 | Accesses Since Last Update | {::nomarkdown}This field is a count of the number of accesses to the alpha or beta<br/>test package option identified in field .01 since the last package<br/>installation.{:/} | NUMERIC |  |  |  | 

## <a name="Volume_Set-8989_304"></a>Volume_Set-8989_304 

<dl>
<dt>id</dt><dd>Volume_Set-8989_304</dd>
<dt>fmId</dt><dd>8989.304</dd>
<dt>label</dt><dd>Volume Set</dd>
</dl>

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
| volume_set | .01 | Volume Set | {::nomarkdown}This is the name of each CPU or VOLUME SET in the domain.{:/} | STRING |  | REQUIRED, INDEXED |  | 
| max_signon_allowed | 2 | Max Signon Allowed | {::nomarkdown}This field defines the maximum number of jobs that XUS or RPC Broker will<br/>allow to sign-on to this VOLUME SET or CPU.{:/} | NUMERIC |  |  |  | 
| log_system_rt | 6 | Log System Rt? | {::nomarkdown}Setting this field to YES enables system response time logging,<br/>which will only take place if the necessary code exists in the<br/>application software.{:/} | BOOLEAN |  |  | {::nomarkdown}<dl><dt>n</dt><dd>false</dd><dt>y</dt><dd>true</dd></dl>{:/} | 

## <a name="Terminal_Server_Ip-8989_305"></a>Terminal_Server_Ip-8989_305 

<dl>
<dt>id</dt><dd>Terminal_Server_Ip-8989_305</dd>
<dt>fmId</dt><dd>8989.305</dd>
<dt>label</dt><dd>Terminal Server Ip</dd>
</dl>

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
| terminal_server_ip | .01 | Terminal Server Ip | {::nomarkdown}This field holds the IP addresses of Terminal servers that should get <br/>special treatment from the IP security software.{:/} | STRING |  | REQUIRED, INDEXED |  | 
| after_hours_slack | 1 | After Hours Slack | {::nomarkdown}This field holds the after hours slack value use to delay locking the<br/>Terminal Server address.<br/>Between the hours of 4:30 pm and 8:00 am, If the FAILED ACCESS ATTEMPTS<br/>LOG has had more entries from this Terminal Server in the last 10 minutes<br/>than the slack value the TS IP address will be locked.{:/} | NUMERIC |  |  |  | 
| last_time_reset | 2 | Last Time Reset | {::nomarkdown}This field holds the FileMan date time that the LOCK on this Terminal<br/>Server was last cleared.{:/} | DATE-TIME |  |  |  | 

## <a name="Package_Namespace_Or_Prefix-8989_3321"></a>Package_Namespace_Or_Prefix-8989_3321 

<dl>
<dt>id</dt><dd>Package_Namespace_Or_Prefix-8989_3321</dd>
<dt>fmId</dt><dd>8989.3321</dd>
<dt>label</dt><dd>Package Namespace Or Prefix</dd>
</dl>

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
| package_namespace_or_prefix | .01 | Package Namespace Or Prefix | {::nomarkdown}This field identifies one of the alpha/beta package namespaces.{:/} | STRING |  | REQUIRED, INDEXED |  | 
| exclude_namespace_or_prefix | 1 | Exclude Namespace Or Prefix | {::nomarkdown}This multiple field is used to indicate any specific namespaces or<br/>prefixes which begin with the current namespace or prefix which should<br/>be excluded from analyses for the alpha/beta package.  Generally those<br/>namespaces which are immediately followed by the letter 'Z' are excluded{:/} | [STRING] |  |  |  | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on April 3rd 2017, 4:24:19 pm</p>{:/}