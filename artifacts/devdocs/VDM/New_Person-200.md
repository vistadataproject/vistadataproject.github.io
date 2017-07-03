---
layout: default
title: VDM
---

## [VDM](TableOfContents) &#8594; New_Person-200
# New Person (200)
This file contains data on employees, users, practitioners, etc. who were previously in Files 3,6,16 and others.   DHCP packages must check with the KERNEL developers to see that a given number/namespace is clear for them to use.   Field numbers 53-59.9 reserved for Pharm.  Nodes and X-ref 'PS*'. Field numbers 70-79.9 reserved for Radiology  Nodes and X-ref 'RA*'. Field numbers 720-725 reserved for DSSM  Nodes and X-ref 'EC*' and 'AEC*'. Field numbers 740-749.9 reserved for QA  Nodes and X-ref 'QA*'. Field numbers 654-654.9 reserved for Social work  Node 654 and X-ref 'SW*'. Field numbers 500-500.9 reserved for mailman  Node 500 and X-ref 'XM*' and 'AXM*'. Field numbers 740-749.9 reserved for QA  Nodes and X-ref 'QA*'. Field numbers 910-910.9 reserved for Police Package  Node and X-ref 'ESP'

<dl>
<dt>Global</dt><dd>^VA(200,</dd>
<dt>Domain</dt><dd>Problems</dd>
</dl>

### Properties

Field | ID | Description | Datatype | Attributes | Range
--- | --- | --- | --- | --- | ---
**Name**{::nomarkdown}<pre><code>  name</code></pre>{:/} | .01 | Enter only data that is actually part of the person's name. Do not<br/>include extra titles, identification, flags, local information, etc.<br/>Enter the person's name in 'LAST,FIRST MIDDLE SUFFIX' format.<br/>This value must be 3-35 characters in length and may contain only<br/>uppercase alpha characters, spaces, apostrophes, hyphens and one comma.<br/>All other characters and parenthetical text will be removed. | STRING | INDEXED<br/>REQUIRED | 
**Street Address 1**{::nomarkdown}<pre><code>  street_address_1</code></pre>{:/} | .111 | This is the first line of the street address of the permanent<br/> address of the new person. | STRING |  | 
**Street Address 2**{::nomarkdown}<pre><code>  street_address_2</code></pre>{:/} | .112 |  This is the second line of the street address of the permanent<br/>address of the new person. | STRING |  | 
**Street Address 3**{::nomarkdown}<pre><code>  street_address_3</code></pre>{:/} | .113 | This is the third line of the street address of the permanent<br/>address of the new person. | STRING |  | 
**City**{::nomarkdown}<pre><code>  city</code></pre>{:/} | .114 | This is the city of the permanent address of<br/>the new person. | STRING |  | 
**State**{::nomarkdown}<pre><code>  state</code></pre>{:/} | .115 | This is the state of the permanent address of<br/>the new person. | POINTER |  | [State-5](State-5)
**ZIP Code**{::nomarkdown}<pre><code>  zip_code</code></pre>{:/} | .116 | This is the postal ZIP code of the<br/>permanent address of the new person. | STRING |  | 
**Temporary Address 1**{::nomarkdown}<pre><code>  temporary_address_1</code></pre>{:/} | .1211 | This is the first line of a temporary address<br/>for the new person. | STRING |  | 
**Temporary Address 2**{::nomarkdown}<pre><code>  temporary_address_2</code></pre>{:/} | .1212 | This is the second line of a temporary address<br/>for the new person. | STRING |  | 
**Temporary Address 3**{::nomarkdown}<pre><code>  temporary_address_3</code></pre>{:/} | .1213 | This is the third line of a temporary address<br/>for the new person. | STRING |  | 
**Temporary City**{::nomarkdown}<pre><code>  temporary_city</code></pre>{:/} | .1214 | This is the city of the temporary location for the new person. | STRING |  | 
**Temporary State**{::nomarkdown}<pre><code>  temporary_state</code></pre>{:/} | .1215 | This is the state of the temporary location for the new person. | POINTER |  | [State-5](State-5)
**Temporary ZIP Code**{::nomarkdown}<pre><code>  temporary_zip_code</code></pre>{:/} | .1216 | This is the postal ZIP code for the temporary location for the new person. | STRING |  | 
**Start Date Of Temp Addres**{::nomarkdown}<pre><code>  start_date_of_temp_addres</code></pre>{:/} | .1217 | This is the beginning date for use of the temporary address for the<br/>new person. | DATE-TIME |  | 
**End Date Of Temp Address**{::nomarkdown}<pre><code>  end_date_of_temp_address</code></pre>{:/} | .1218 | This is the ending date for use of the temporary address for the<br/>new person. | DATE-TIME |  | 
**Phone (home)**{::nomarkdown}<pre><code>  phone_home</code></pre>{:/} | .131 | This is the telephone number for the new person. | STRING |  | 
**Office Phone**{::nomarkdown}<pre><code>  office_phone</code></pre>{:/} | .132 | This is the business/office telephone for the new person. | STRING |  | 
**Phone #3**{::nomarkdown}<pre><code>  phone_number3</code></pre>{:/} | .133 | This is an alternate telephone number where the new person might also<br/>be reached. | STRING |  | 
**Phone #4**{::nomarkdown}<pre><code>  phone_number4</code></pre>{:/} | .134 | This is another alternate telephone number where the new person might<br/>also be reached. | STRING |  | 
**Commercial Phone**{::nomarkdown}<pre><code>  commercial_phone</code></pre>{:/} | .135 | This is a commercial phone number used by IFCAP. | STRING |  | 
**Fax Number**{::nomarkdown}<pre><code>  fax_number</code></pre>{:/} | .136 | This field holds a phone number for a FAX machine for this user.<br/>It needs to be a format that can be understood by a sending <br/>MODEM. | STRING |  | 
**Voice Pager**{::nomarkdown}<pre><code>  voice_pager</code></pre>{:/} | .137 | This field holds a phone number for an ANALOG PAGER that this person<br/>carries with them.<br/>It needs to be a format that can be understood by a sending <br/>MODEM. | STRING |  | 
**Digital Pager**{::nomarkdown}<pre><code>  digital_pager</code></pre>{:/} | .138 | This field holds a phone number for a DIGITAL PAGER that this person<br/>carries with them.<br/>It needs to be a format that can be understood by a sending <br/>MODEM. | STRING |  | 
**Room**{::nomarkdown}<pre><code>  room</code></pre>{:/} | .141 | This is the room number assigned to the new person. | STRING |  | 
**Email Address**{::nomarkdown}<pre><code>  email_address</code></pre>{:/} | .151 | This field contains the e-mail address to which an outside person or<br/>vendor can send correspondence.<br/> <br/>(i.e. firstname.lastname@med.va.gov or <br/> lastname.firstname@forum.va.gov or<br/> lastname.firstname_i+@forum.va.gov as in<br/> smith.robert_b+@forum.va.gov for Robert B. Smith on Forum).<br/> <br/>(* Note: period replaces comma in lastname.firstname syntax, underscore<br/>replaces space, and plus sign replaces period following middle initial for<br/>VISTA MailMan addresses.)<br/> <br/>This address may appear on documents going to vendors. | STRING |  | 
**Initial**{::nomarkdown}<pre><code>  initial</code></pre>{:/} | 1 | These are the initials of the user, which may be entered for naming<br/>users. | STRING | INDEXED | 
**Access Code**{::nomarkdown}<pre><code>  access_code</code></pre>{:/} | 2 | This is a unique code to identify a user to the system.<br/>This code is hashed so that it can't be looked up to find out the code.<br/>The access code will appear as a string of numbers, but must be entered<br/>as a separate entry.  Users who have no access code will not receive<br/>mail.<br/>*** This field should never be edited directly - do not remove WRITE ACCESS! | STRING |  | 
**Want To Edit Access Code (y/n)**{::nomarkdown}<pre><code>  want_to_edit_access_code_y_n</code></pre>{:/} | 2.1 | Entering a YES to this field calls the KERNEL routine<br/>for entering ACCESS codes. No data is stored for this field. | STRING |  | 
**File Manager Access Code**{::nomarkdown}<pre><code>  file_manager_access_code</code></pre>{:/} | 3 | This is the string that is put in DUZ(0) for use by fileman<br/>to check file and field access. | STRING |  | 
**Sex**{::nomarkdown}<pre><code>  sex</code></pre>{:/} | 4 | This is the gender for the new person. | ENUMERATION |  | {::nomarkdown}MALE: <em><strong>M</strong></em><br/>FEMALE: <em><strong>F</strong></em>{:/}
**Dob**{::nomarkdown}<pre><code>  dob</code></pre>{:/} | 5 | This is the date of birth of the new person. | DATE-TIME |  | 
**Disuser**{::nomarkdown}<pre><code>  disuser</code></pre>{:/} | 7 | This field, if set to YES (1), marks a user that is not allowed to<br/>log on to this system.  It will leave all Menus, Keys and other attributes<br/>exabled for the user.<br/>An example would be an external support person<br/>that you only want to be able to log on to your system when you are<br/>monitoring them.  Setting this field would prevent them from loging<br/>on to the system untill you cleared the field. | BOOLEAN |  | {::nomarkdown}false: <em><strong>1</strong></em><br/>true: <em><strong>0</strong></em>{:/}
**Verify Code Never Expires**{::nomarkdown}<pre><code>  verify_code_never_expires</code></pre>{:/} | 7.2 | This field will control if the users VERIFY code will expire at the<br/>interval set by the Kernel System Parameter LIFETIME OF VERIFY CODE.<br/>This field should only be used for access to the VistA system from other<br/>systems making connection with the RPCBroker and have very controlled<br/>access.<br/>Only persons with the XUMGR key are allowed to set this flag. | BOOLEAN |  | {::nomarkdown}false: <em><strong>1</strong></em><br/>true: <em><strong>0</strong></em>{:/}
**Title**{::nomarkdown}<pre><code>  title</code></pre>{:/} | 8 | This is the title for the new person. | POINTER |  | [Title-3_1](Title-3_1)
**Ssn**{::nomarkdown}<pre><code>  ssn</code></pre>{:/} | 9 | This is the social security number of the new person. | STRING | INDEXED | 
**Termination Date**{::nomarkdown}<pre><code>  termination_date</code></pre>{:/} | 9.2 | This is the date after which the computer will no longer recognize this<br/>user's ACCESS CODE.<br/>Once this date has passed, when the USER TERMINATE job runs it will clean<br/>out this users data based on flags in the NEW PERSON file. | DATE-TIME |  | 
**Delete All Mail Access**{::nomarkdown}<pre><code>  delete_all_mail_access</code></pre>{:/} | 9.21 | This gives you the ability to purge all of a user's mail related<br/>information. This includes Mail messages, Mail Boxes, Mail Groups,<br/>Surrogate privlages when that user is terminated.<br/>This is recomended. | BOOLEAN |  | {::nomarkdown}false: <em><strong>n</strong></em><br/>true: <em><strong>y</strong></em>{:/}
**Delete Keys At Termination**{::nomarkdown}<pre><code>  delete_keys_at_termination</code></pre>{:/} | 9.22 | This gives you the ability to delete all of a user's security<br/>keys, and delagated keys when the user is terminated.<br/>This is recomended. | BOOLEAN |  | {::nomarkdown}false: <em><strong>n</strong></em><br/>true: <em><strong>y</strong></em>{:/}
**Terminal Type Last Used**{::nomarkdown}<pre><code>  terminal_type_last_used</code></pre>{:/} | 9.3 | This field holds a pointer to the last terminal type the user selected<br/>at sign-on or in edit user char. | POINTER |  | [Terminal_Type-3_2](Terminal_Type-3_2)
**Termination Reason**{::nomarkdown}<pre><code>  termination_reason</code></pre>{:/} | 9.4 | This field holds a short description of why the user has been terminated<br/>or has DISUSER flag set. | STRING |  | 
**User Class**{::nomarkdown}<pre><code>  user_class</code></pre>{:/} | 9.5 |  | OBJECT |  | [User_Class-200_07](#User_Class-200_07)
**Alias**{::nomarkdown}<pre><code>  alias</code></pre>{:/} | 10 | Other names used by this new person. | STRING |  | 
**Name Components**{::nomarkdown}<pre><code>  name_components</code></pre>{:/} | 10.1 | Answer with the entry in the NAME COMPONENTS file that contains the<br/>components of the person's name. | POINTER | REQUIRED | [Name_Components-20](Name_Components-20)
**Degree**{::nomarkdown}<pre><code>  degree</code></pre>{:/} | 10.6 | This field holds any academic or professional degree that have been earned<br/>by the user. This would be things like BS, BA, MD, and PHD. | STRING |  | 
**Verify Code**{::nomarkdown}<pre><code>  verify_code</code></pre>{:/} | 11 | This is the code that is used to verify that the ACCESS CODE was not<br/>found by accident.<br/>It may be entered at logon time immediately after the ACCESS CODE<br/>by typing a semicolon, then the VERIFY CODE.<br/><br/>Verify codes may be changed by the user with the CHANGE USER CHARACTERISTICS<br/>option.  The kernel site parameter field LIFETIME OF VERIFY CODE forces<br/>the user to periodically enter a new verify code. | STRING |  | 
**Want To Edit Verify Code (y/n)**{::nomarkdown}<pre><code>  want_to_edit_verify_code_y_n</code></pre>{:/} | 11.1 | Entering a YES to this field calls the KERNEL routine<br/>for entering VERIFY codes. No data is stored for this field. | STRING |  | 
**Date Verify Code Last Changed**{::nomarkdown}<pre><code>  date_verify_code_last_changed</code></pre>{:/} | 11.2 | This field is triggered by a change in the VERIFY CODE.  It is used<br/>to determine when the USER must be notified to change their code. | STRING |  | 
**Allow Ara Access**{::nomarkdown}<pre><code>  allow_ara_access</code></pre>{:/} | 11.6 | This field is for a control that is under development. | BOOLEAN |  | {::nomarkdown}false: <em><strong>1</strong></em><br/>true: <em><strong>0</strong></em>{:/}
**Ara Value**{::nomarkdown}<pre><code>  ara_value</code></pre>{:/} | 11.7 | This value is used to identify the user in non interactive connections. | STRING | INDEXED | 
**Current Degree Level**{::nomarkdown}<pre><code>  current_degree_level</code></pre>{:/} | 12.1 | This is the current degree level upon entry into the current training<br/>program/residency at this VA medical facility. | POINTER |  | [Hl7_Degree-771_9](Hl7_Degree-771_9)
**Program Of Study**{::nomarkdown}<pre><code>  program_of_study</code></pre>{:/} | 12.2 | This is the discipline that best describes the trainee's current<br/>program of study at this VA medical facility. | POINTER |  | [Program_Of_Study-8932_2](Program_Of_Study-8932_2)
**Last Training Month &amp; Year**{::nomarkdown}<pre><code>  last_training_month__year</code></pre>{:/} | 12.3 | This is the MONTH and LAST year the trainee anticipates being in a<br/>training program at this VA medical facility. | STRING |  | 
**Vha Training Facility**{::nomarkdown}<pre><code>  vha_training_facility</code></pre>{:/} | 12.4 |  | POINTER |  | [Institution-4](Institution-4)
**Date Hl7 Trainee Record Built**{::nomarkdown}<pre><code>  date_hl7_trainee_record_built</code></pre>{:/} | 12.5 | This is the date that the trainee information was built and sent to the<br/>OAA server. | DATE-TIME | INDEXED | 
**Clinical Core Trainee**{::nomarkdown}<pre><code>  clinical_core_trainee</code></pre>{:/} | 12.6 | This field designates whether or not the person is an active Trainee. | BOOLEAN |  | {::nomarkdown}false: <em><strong>N</strong></em><br/>true: <em><strong>Y</strong></em>{:/}
**Date No Longer Trainee**{::nomarkdown}<pre><code>  date_no_longer_trainee</code></pre>{:/} | 12.7 | This is the date when a Registered Trainee is no longer to be considered<br/>an trainee.  This may be at the end of a rotation period or at the end VA<br/>training experience. | DATE-TIME |  | 
**Start Of Training**{::nomarkdown}<pre><code>  start_of_training</code></pre>{:/} | 12.8 |  | DATE-TIME |  | 
**Nick Name**{::nomarkdown}<pre><code>  nick_name</code></pre>{:/} | 13 | This is a string that is used in the sign-on greeting and<br/>for mailman user lookup. | STRING |  | 
**Pac**{::nomarkdown}<pre><code>  pac</code></pre>{:/} | 14 | This is a code to be checked before a user is allowed to get into<br/>programmer mode. | STRING |  | 
**Hinq Employee Number**{::nomarkdown}<pre><code>  hinq_employee_number</code></pre>{:/} | 14.9 | The employee number associated with HINQ passwords from the DVB should<br/>be entered here. | STRING | INDEXED | 
**Prohibited Times For Sign-on**{::nomarkdown}<pre><code>  prohibited_times_for_signon</code></pre>{:/} | 15 | This is a pair of times within which the user will not be allowed<br/>access to the computer.<br/>They should be entered in Military format, for example 0900-1300 would<br/>prohibit signons from 9AM to 1PM each day. | STRING |  | 
**Division**{::nomarkdown}<pre><code>  division</code></pre>{:/} | 16 | This is the one or more divisions that this user may sign-on and do<br/>work for. | OBJECT |  | [Division-200_02](#Division-200_02)
**Delegate Of**{::nomarkdown}<pre><code>  delegate_of</code></pre>{:/} | 19 | This field holds the name of the person who has delegated menu manager<br/>authority to the user.  The user is thus the 'delegate of' the person<br/>named here. | POINTER |  | [New_Person-200](New_Person-200)
**Delegation Date**{::nomarkdown}<pre><code>  delegation_date</code></pre>{:/} | 19.1 | This field records the data that the user became a delegate. | DATE-TIME |  | 
**Delegation Level**{::nomarkdown}<pre><code>  delegation_level</code></pre>{:/} | 19.2 | This field records the level of delegation authority with respect to<br/>the systems manager, level zero.  When the systems manager delegates<br/>authority to someone else, that person will be at level one.  Levels<br/>are maintained so that lower level delegates cannot interfere with<br/>the menus of higher level delegates. | NUMERIC |  | 
**Alert Date/time**{::nomarkdown}<pre><code>  alert_date_time</code></pre>{:/} | 19.4 | This is a multiple field which is used to generate alerts to the users.<br/>The data for alerts is filed by date and time. | OBJECT |  | [Alert_Date_Time-200_194](#Alert_Date_Time-200_194)
**Delegated Options**{::nomarkdown}<pre><code>  delegated_options</code></pre>{:/} | 19.5 | This is a sub-file of pointers to the Option File which detail those<br/>options this user may delegate to others. | OBJECT |  | [Delegated_Options-200_19](#Delegated_Options-200_19)
**Allowable New Menu Prefix**{::nomarkdown}<pre><code>  allowable_new_menu_prefix</code></pre>{:/} | 19.6 | This subfile holds the set of namespaces available to this user in<br/>the creation of menus with delegated options.<br/> | STRING |  | 
**Menu Template**{::nomarkdown}<pre><code>  menu_template</code></pre>{:/} | 19.8 | This multiple holds sets of predefined menus which can be envoked by<br/>the user by entering a right-square-bracket ("[") followed by a<br/>template's name. | OBJECT |  | [Menu_Template-200_198](#Menu_Template-200_198)
**Uci**{::nomarkdown}<pre><code>  uci</code></pre>{:/} | 20 | This is the set of UCI's that this user must choose from at sign-on<br/>time. | OBJECT |  | [Uci-200_01](#Uci-200_01)
**Date E-sig Last Changed**{::nomarkdown}<pre><code>  date_esig_last_changed</code></pre>{:/} | 20.1 | A $H date of the last time the E-Sig code was changed. Triggered by a<br/>X-ref on the ELECTRONIC SIGNATURE CODE field. | STRING |  | 
**Signature Block Printed Name**{::nomarkdown}<pre><code>  signature_block_printed_name</code></pre>{:/} | 20.2 | The name entered must contain the surname of the user.<br/>The name must be 2 to 40 characters in length.<br/> <br/>This field can then contain the name of the user as they wish it to<br/>be displayed with the notation that they signed the document electronically.<br/>For example:  John R. Doe, M.D.   or    Fred A. Sample, RN. | STRING |  | 
**Signature Block Title**{::nomarkdown}<pre><code>  signature_block_title</code></pre>{:/} | 20.3 | This field should contain the title of the person who is electronically<br/>signing a document.  Examples of titles are Chief of Surgery, Dietician,<br/>Clinical Pharmacist, etc.  This title will print next to the name of the<br/>person who signs the document.  The person's name will be taken from the<br/>SIGNATURE BLOCK PRINTED NAME field.<br/> <br/>The title must be 2 to 50 characters in length. | STRING |  | 
**Electronic Signature Code**{::nomarkdown}<pre><code>  electronic_signature_code</code></pre>{:/} | 20.4 | This field contains the encrypted code which the user types when<br/>signing documents electronically.  The user's input will be compared to<br/>this field when validating his electronic signature.<br/>All electronic signature codes should be treated as confidential. | STRING |  | 
**Mail Code**{::nomarkdown}<pre><code>  mail_code</code></pre>{:/} | 28 | This is the mail code for the new person. | STRING |  | 
**Service/section**{::nomarkdown}<pre><code>  service_section</code></pre>{:/} | 29 | This is the name of the service or section for the new person. | POINTER | INDEXED<br/>REQUIRED | [Service_section-49](Service_section-49)
**Date Entered**{::nomarkdown}<pre><code>  date_entered</code></pre>{:/} | 30 | This is the date on which the user was entered into the user file.<br/>It is automatically inserted into the file by the ADD USER option. | DATE-TIME |  | 
**Creator**{::nomarkdown}<pre><code>  creator</code></pre>{:/} | 31 | This is the name of the user who entered this user into the user file.<br/>It is automatically set by the ADD USER option. | POINTER |  | [New_Person-200](New_Person-200)
**File Range**{::nomarkdown}<pre><code>  file_range</code></pre>{:/} | 31.1 | This field limits a user to a specific range of file numbers.  When<br/>creating new files, only a number within this range can be assigned<br/>to the new file. | STRING |  | 
**Text Terminator**{::nomarkdown}<pre><code>  text_terminator</code></pre>{:/} | 31.2 | If specified, the character string in this field will be used instead<br/>of a carriage return to mark the end of word-processing text.  It will<br/>be used in all VA FileMan word-processing contexts, e.g. in mail<br/>messages.  It can facilitate the uploading of files from a PC<br/>environment.<br/> <br/>Note that the VA FileMan edit menu provides an option for temporarily<br/>specifying a text terminator for that edit session only. | STRING |  | 
**Preferred Editor**{::nomarkdown}<pre><code>  preferred_editor</code></pre>{:/} | 31.3 | If an entry exists in this field, then whenever a user edits data in a<br/>FileMan word-processing field, they will automatically be transferred into<br/>their preferred editor.  If this field is blank, then the default editor<br/>will be either the FileMan screen editor when editing within ScreenMan<br/>format, or the standard FileMan line editor in all other cases. | POINTER |  | [Alternate_Editor-1_2](Alternate_Editor-1_2)
**Accessible File**{::nomarkdown}<pre><code>  accessible_file</code></pre>{:/} | 32 | This multiple-valued field contains the list of files the user may access.<br/>The type of access granted to the user is included for each file that<br/>appears on the list.  The user may be allowed to look at records (READ<br/>access), edit existing records (WRITE access), add new record (LAYGO<br/>access), delete records (DELETE access), or modify the file structure<br/>(DATA DICTIONARY ACCESS). | OBJECT |  | [Accessible_File-200_032](#Accessible_File-200_032)
**Allowed To Use Spooler**{::nomarkdown}<pre><code>  allowed_to_use_spooler</code></pre>{:/} | 41 | If set to 'YES', this user will be able to use the spool device to<br/>create spool documents. | BOOLEAN |  | {::nomarkdown}false: <em><strong>n</strong></em><br/>true: <em><strong>y</strong></em>{:/}
**Multi-device Despooling**{::nomarkdown}<pre><code>  multidevice_despooling</code></pre>{:/} | 41.1 | If set to 'YES', the user will be able to print (despool) a spooled<br/>document to more than one device simultaneously. | BOOLEAN |  | {::nomarkdown}false: <em><strong>n</strong></em><br/>true: <em><strong>y</strong></em>{:/}
**Can Make Into A Mail Message**{::nomarkdown}<pre><code>  can_make_into_a_mail_message</code></pre>{:/} | 41.2 | If set to 'YES', the document is given the status of a mail message and<br/>the user will be able to use all MailMan functions such as copying and<br/>forwarding.  As a mail message, the document can no longer be manipulated<br/>with the spooler since its flag in the Spool Document File has been<br/>deleted. | BOOLEAN |  | {::nomarkdown}false: <em><strong>n</strong></em><br/>true: <em><strong>y</strong></em>{:/}
**Authorize Release Of Npi**{::nomarkdown}<pre><code>  authorize_release_of_npi</code></pre>{:/} | 41.97 | Answer 1 (Yes) if this disclosure of an individual practitioner's NPI is <br/>to a non-VA health care provider or its agent to support, or in <br/>anticipation of supporting, the submission of health care reimbursement <br/>claims by non-VA health care providers or their agents (ex., display of <br/>FEE Basis authorizations). Per Routine Use Amendment #18 to the Privacy <br/>Act of 1974 this disclosure can be made without requiring consent <br/>(Blanket Authority) from the practitioner. | BOOLEAN |  | {::nomarkdown}true: <em><strong>1</strong></em>{:/}
**Npi Entry Status**{::nomarkdown}<pre><code>  npi_entry_status</code></pre>{:/} | 41.98 | This field is used in tracking the entry status of NPI d ata for those<br/>providers who require an NPI.  The providers needing this value are<br/>identified based on data entered in the PERSON CLASS subfile which<br/>indicates providers that may be related to billing activities.<br/> <br/>The value is initially set to N or NEEDS ENTRY.  It can be changed to E or<br/>EXEMPT for individuals who have been identified, but who due to<br/>administrative activities, etc., will not be involved in activities<br/>requiring billing.  When the NPI value is entered, the value is changed to<br/>D or DONE. | ENUMERATION |  | {::nomarkdown}NEEDS ENTRY: <em><strong>N</strong></em><br/>DONE: <em><strong>D</strong></em><br/>EXEMPT: <em><strong>E</strong></em>{:/}
**Npi**{::nomarkdown}<pre><code>  npi</code></pre>{:/} | 41.99 | Each VHA Billable Practitioner should have applied for the NPI through<br/>CMS' National Plan and Provider Enumeration System (NPPES).  NPI<br/>Confirmation Letters are sent by CMS and indicate the NPI assigned.<br/>Practitioners may present their NPI Confirmation Letter as a source<br/>document to verify the accuracy of the NPI or you may contact your Local<br/>NPI Maintenance Team Leader for assistance. | STRING | INDEXED | 
**Effective Date/time**{::nomarkdown}<pre><code>  effective_date_time</code></pre>{:/} | 42 |  | OBJECT |  | [Effective_Date_time-200_042](#Effective_Date_time-200_042)
**Key Delegation Level**{::nomarkdown}<pre><code>  key_delegation_level</code></pre>{:/} | 50.1 | This a simple, numeric value which prevents removing delegated keys<br/>from someone with a lower level number. | NUMERIC |  | 
**Keys**{::nomarkdown}<pre><code>  keys</code></pre>{:/} | 51 | These are "keys" that define the characteristic(s), authorization(s), or<br/>privilege(s) of the person. | OBJECT |  | [Keys-200_051](#Keys-200_051)
**Delegated Keys**{::nomarkdown}<pre><code>  delegated_keys</code></pre>{:/} | 52 | This subfile contains pointers to the Key File of those keys that<br/>this person is allowed to allocate to other users. | OBJECT |  | [Delegated_Keys-200_052](#Delegated_Keys-200_052)
**Authorized To Write Med Orders**{::nomarkdown}<pre><code>  authorized_to_write_med_orders</code></pre>{:/} | 53.1 | This field is used to determin if the provider is authorized to write orders. | BOOLEAN |  | {::nomarkdown}true: <em><strong>1</strong></em>{:/}
**Detox/maintenance Id Number**{::nomarkdown}<pre><code>  detox_maintenance_id_number</code></pre>{:/} | 53.11 | This field holds the Detoxification/Maintenance ID number used for the <br/>substance abuse providers that is "DATA-waived". (one X, one alpha, <br/>7 numbers)<br/><br/><br/> | STRING |  | 
**Dea#**{::nomarkdown}<pre><code>  deanumber</code></pre>{:/} | 53.2 | This field is used to enter the Drug Enforcement Agency (DEA) number.<br/>Enter the DEA number as two upper case letters followed by 7 digits.<br/>e.g., AA1234567.  Each provider must have a unique number.<br/> | STRING | INDEXED | 
**Va#**{::nomarkdown}<pre><code>  vanumber</code></pre>{:/} | 53.3 | This field is used to enter the VA number.<br/>The VA number must be unique. | STRING | INDEXED | 
**Inactive Date**{::nomarkdown}<pre><code>  inactive_date</code></pre>{:/} | 53.4 | This field is used to show the inactive date of a provider whereas they<br/>can no longer write orders. | DATE-TIME |  | 
**Provider Class**{::nomarkdown}<pre><code>  provider_class</code></pre>{:/} | 53.5 | This field is used to show the providers class. | POINTER |  | [Provider_Class-7](Provider_Class-7)
**Provider Type**{::nomarkdown}<pre><code>  provider_type</code></pre>{:/} | 53.6 | This field is used to show the type of provider (staff, fee, etc.) | ENUMERATION |  | {::nomarkdown}FEE BASIS: <em><strong>4</strong></em><br/>C & A: <em><strong>3</strong></em><br/>FULL TIME: <em><strong>1</strong></em><br/>PART TIME: <em><strong>2</strong></em><br/>HOUSE STAFF: <em><strong>5</strong></em>{:/}
**Requires Cosigner**{::nomarkdown}<pre><code>  requires_cosigner</code></pre>{:/} | 53.7 | This field is used to determine if the provider needs a cosigner. | BOOLEAN |  | {::nomarkdown}true: <em><strong>1</strong></em>{:/}
**Usual Cosigner**{::nomarkdown}<pre><code>  usual_cosigner</code></pre>{:/} | 53.8 | This field is used to show the usual cosigner for the provider. | POINTER |  | [New_Person-200](New_Person-200)
**Remarks**{::nomarkdown}<pre><code>  remarks</code></pre>{:/} | 53.9 | This field is used to enter remarks and or comments about the provider. | STRING |  | 
**Non-va Prescriber**{::nomarkdown}<pre><code>  nonva_prescriber</code></pre>{:/} | 53.91 | The Transitional Pharmacy Care Project (TPB) introduces fields 53.91 - <br/>53.96, to allow a NON-VA Physician to be added to the New Person file<br/>(#200), so that Outpatient Pharmacy could process medication prescribed by<br/>such physicians.<br/> <br/>A value of 1 indicates that this person is a NON-VA Physician. | BOOLEAN |  | {::nomarkdown}false: <em><strong>0</strong></em><br/>true: <em><strong>1</strong></em>{:/}
**Tax Id**{::nomarkdown}<pre><code>  tax_id</code></pre>{:/} | 53.92 | TAX ID of the NON-VA Physician's Private Clinic, where the prescription<br/>was written. | STRING |  | 
**Exclusionary Check Performed**{::nomarkdown}<pre><code>  exclusionary_check_performed</code></pre>{:/} | 53.93 | Department of Health and Human Services provides an exclusionary list of<br/>Medical Practitioners (providers excluded are those who are not allowed to<br/>receive payment for government services due to various reasons). When<br/>adding NON-VA Physicians, they must be checked against this list.<br/> <br/>A value of 1 indicates that an Exclusionary Check was performed for this<br/>physician. | BOOLEAN |  | {::nomarkdown}true: <em><strong>1</strong></em>{:/}
**Date Exclusionary List Checked**{::nomarkdown}<pre><code>  date_exclusionary_list_checked</code></pre>{:/} | 53.94 | The date Exclusionary Check was performed. | DATE-TIME |  | 
**On Exclusionary List**{::nomarkdown}<pre><code>  on_exclusionary_list</code></pre>{:/} | 53.95 | Was the NON-VA Physician on the Exclusionary Check List?<br/>A value of 1 indicates that the Physician was on the Exclusionary Check. | BOOLEAN |  | {::nomarkdown}false: <em><strong>0</strong></em><br/>true: <em><strong>1</strong></em>{:/}
**Exclusionary Checked By**{::nomarkdown}<pre><code>  exclusionary_checked_by</code></pre>{:/} | 53.96 | User ID of the person who made the entry. | POINTER |  | [New_Person-200](New_Person-200)
**Licensing State**{::nomarkdown}<pre><code>  licensing_state</code></pre>{:/} | 54.1 | This multiple contains credentialing information about a provider<br/>that is used by the state. | OBJECT |  | [Licensing_State-200_541](#Licensing_State-200_541)
**State Issuing Dea Number**{::nomarkdown}<pre><code>  state_issuing_dea_number</code></pre>{:/} | 54.2 | This mutiple contains the DEA# issued by a state in order to allow<br/>providers to write medication orders for controlled medications. | OBJECT |  | [State_Issuing_Dea_Number-200_55](#State_Issuing_Dea_Number-200_55)
**Schedule Ii Narcotic**{::nomarkdown}<pre><code>  schedule_ii_narcotic</code></pre>{:/} | 55.1 | This field is used to determine if the provider has privileges for <br/>Schedule II narcotic. | BOOLEAN |  | {::nomarkdown}false: <em><strong>0</strong></em><br/>true: <em><strong>1</strong></em>{:/}
**Schedule Ii Non-narcotic**{::nomarkdown}<pre><code>  schedule_ii_nonnarcotic</code></pre>{:/} | 55.2 | This field is used to determine if the provider has privileges for <br/>Schedule II non-narcotic. | BOOLEAN |  | {::nomarkdown}false: <em><strong>0</strong></em><br/>true: <em><strong>1</strong></em>{:/}
**Schedule Iii Narcotic**{::nomarkdown}<pre><code>  schedule_iii_narcotic</code></pre>{:/} | 55.3 | This field is used to determine if the provider has privileges for <br/>Schedule III narcotic. | BOOLEAN |  | {::nomarkdown}false: <em><strong>0</strong></em><br/>true: <em><strong>1</strong></em>{:/}
**Schedule Iii Non-narcotic**{::nomarkdown}<pre><code>  schedule_iii_nonnarcotic</code></pre>{:/} | 55.4 | This field is used to determine if the provider has privileges for <br/>Schedule III non-narcotic. | BOOLEAN |  | {::nomarkdown}false: <em><strong>0</strong></em><br/>true: <em><strong>1</strong></em>{:/}
**Schedule Iv**{::nomarkdown}<pre><code>  schedule_iv</code></pre>{:/} | 55.5 | This field is used to determine if the provider has privileges for <br/>Schedule IV controlled substances. | BOOLEAN |  | {::nomarkdown}false: <em><strong>0</strong></em><br/>true: <em><strong>1</strong></em>{:/}
**Schedule V**{::nomarkdown}<pre><code>  schedule_v</code></pre>{:/} | 55.6 | This field is used to determine if the provider has privileges for <br/>Schedule V controlled substances. | BOOLEAN |  | {::nomarkdown}false: <em><strong>0</strong></em><br/>true: <em><strong>1</strong></em>{:/}
**Staff Review Required**{::nomarkdown}<pre><code>  staff_review_required</code></pre>{:/} | 70 | This field applies to 'Interpreting Resident' personnel. If<br/>it contains a 'yes', an interpreting staff is required to<br/>review this resident's report results. | BOOLEAN |  | {::nomarkdown}false: <em><strong>N</strong></em><br/>true: <em><strong>Y</strong></em>{:/}
**Allow Verifying Of Others**{::nomarkdown}<pre><code>  allow_verifying_of_others</code></pre>{:/} | 71 | If this field is set to 'YES' and the 'ALLOW VERIFYING BY RESIDENTS'<br/>division parameter is also set to 'YES' then this resident is allowed to<br/>verify reports associated with another interpreting physician.  (If both<br/>parameters are set to 'YES' the 'On-line Verifying of Reports' option will<br/>prompt the user to 'Select Interpreting Physician: ' allowing the user to<br/>select an interpreting physician other than him/herself.) If this field is<br/>set to 'NO' then this resident is only allowed to verify his/her own<br/>reports.  If the division parameter 'ALLOW VERIFYING BY RESIDENT' is set<br/>to 'NO' then regardless of how this field is set, the resident will not be<br/>allowed to verify other interpreting physicians' reports.<br/> <br/>If the user is classified as Interpreting Staff, s/he will be allowed to<br/>select another interpreting physician's name and reports if this field is<br/>set to 'YES'. | BOOLEAN |  | {::nomarkdown}false: <em><strong>n</strong></em><br/>true: <em><strong>y</strong></em>{:/}
**Rad/nuc Med Classification**{::nomarkdown}<pre><code>  rad_nuc_med_classification</code></pre>{:/} | 72 | This multiple field contains information about the classification assigned<br/>to Rad/Nuc Med personnel.  Possible classifications are Technologist,<br/>Interpreting Resident, Interpreting Staff, and Clerk. | ENUMERATION |  | {::nomarkdown}resident: <em><strong>R</strong></em><br/>clerk: <em><strong>C</strong></em><br/>technologist: <em><strong>T</strong></em><br/>staff: <em><strong>S</strong></em>{:/}
**Rad/nuc Med Inactive Date**{::nomarkdown}<pre><code>  rad_nuc_med_inactive_date</code></pre>{:/} | 73 | This field contains the date that this person was inactivated as a Rad/Nuc<br/>Med user. | DATE-TIME |  | 
**Rad/nuc Med Location Access**{::nomarkdown}<pre><code>  rad_nuc_med_location_access</code></pre>{:/} | 74 | This field will allow the user to access all data specific to a particular<br/>Radiology/Nuclear Medicine location. | POINTER |  | [Imaging_Locations-79_1](Imaging_Locations-79_1)
**Restrict Patient Selection**{::nomarkdown}<pre><code>  restrict_patient_selection</code></pre>{:/} | 101.01 | Answer 'YES' to restrict this user to selecting only those patients<br/>associated with the list pointed to by the PATIENT SELECTION LIST field<br/>(#101.02). | BOOLEAN |  | {::nomarkdown}false: <em><strong>1</strong></em><br/>true: <em><strong>0</strong></em>{:/}
**Patient Selection List**{::nomarkdown}<pre><code>  patient_selection_list</code></pre>{:/} | 101.02 | If a value is entered into this field, the user is allowed to select only<br/>those patients associated with this OE/RR LIST. | POINTER |  | [Oe_rr_List-100_21](Oe_rr_List-100_21)
**Cprs Tab**{::nomarkdown}<pre><code>  cprs_tab</code></pre>{:/} | 101.13 |  | OBJECT |  | [Cprs_Tab-200_010113](#Cprs_Tab-200_010113)
**Problem List Primary View**{::nomarkdown}<pre><code>  problem_list_primary_view</code></pre>{:/} | 125 | This string contains the user's preferred view of the problem list.<br/>Problems are assigned a category based upon the service of the provider<br/>who entered and/or is treating the problem; a screen may then be invoked<br/>allowing a filtered view of the problem list. | STRING |  | 
**Problem Selection List**{::nomarkdown}<pre><code>  problem_selection_list</code></pre>{:/} | 125.1 | This is the user's preferred default list of problems to select from<br/>when adding to a patient's problem list.  If there is a list specified<br/>here from the Problem Selection List File (#125), it will be automatically<br/>presented to the user when the "Add New Problem(s)" action is selected;<br/>otherwise, the user will simply be prompted to select a problem from<br/>the Clinical Lexicon Utility. | POINTER |  | [Problem_Selection_List-125](Problem_Selection_List-125)
**Multiple Sign-on**{::nomarkdown}<pre><code>  multiple_signon</code></pre>{:/} | 200.04 | This field, if filled in, overrides the SITE and DEVICE Files as to<br/>whether this user can sign-on to multiple terminals at the same time, <br/>or is limited to one workstation (IP), only one connection.<br/>If you select "Only one IP" be sure to put a value into the "MULTIPLE<br/>SIGN-ON LIMIT" field so users can sign-on at least once.<br/>Values are:<br/>0 = Only one connection.<br/>1 = Multiple connections from multiple IP's.<br/>2 = Only one IP address. | ENUMERATION |  | {::nomarkdown}Only one IP: <em><strong>2</strong></em><br/>NOT ALLOWED: <em><strong>0</strong></em><br/>ALLOWED: <em><strong>1</strong></em>{:/}
**Ask Device Type At Sign-on**{::nomarkdown}<pre><code>  ask_device_type_at_signon</code></pre>{:/} | 200.05 | This field controls if the user/terminal should be asked for a terminal<br/>type during sign-on. If set to YES then the system will try and get the<br/>terminal type from the terminal. If this doesn't work, then user is<br/>prompted. If set to NO then the one from the users Last Sign-on field or<br/>the device subtype will be used. | ENUMERATION |  | {::nomarkdown}ASK: <em><strong>1</strong></em><br/>DON'T ASK: <em><strong>0</strong></em>{:/}
**Auto Menu**{::nomarkdown}<pre><code>  auto_menu</code></pre>{:/} | 200.06 | This field controls whether the user will see menus automatically<br/>displayed (as if he had typed a "?") each time a new option is presented. | ENUMERATION |  | {::nomarkdown}NO MENUS GENERATED: <em><strong>0</strong></em><br/>YES, MENUS GENERATED: <em><strong>1</strong></em>{:/}
**Language**{::nomarkdown}<pre><code>  language</code></pre>{:/} | 200.07 | The value in this field replaces the Default Language field in the<br/>Kernel Site Parameters file.  It points to the Language file<br/>for the VA FileMan Dialog file. | POINTER |  | [Language-_85](Language-_85)
**Reserved**{::nomarkdown}<pre><code>  reserved</code></pre>{:/} | 200.08 | Place holder, see file 3.5 #51.8 | STRING |  | 
**Type-ahead**{::nomarkdown}<pre><code>  typeahead</code></pre>{:/} | 200.09 | If type ahead is selected, the user will be able to type text ahead<br/>of what the computer is actually reading.  The computer stores the<br/>keystrokes from the user, which may be confusing if the computer is slow<br/>but more efficient if the user is careful. | ENUMERATION |  | {::nomarkdown}NOT ALLOWED: <em><strong>N</strong></em><br/>ALLOWED: <em><strong>Y</strong></em>{:/}
**Timed Read (# Of Seconds)**{::nomarkdown}<pre><code>  timed_read_number_of_seconds</code></pre>{:/} | 200.1 | This field, if filled in, overrides the SITE and DEVICE files as to<br/>the time this user has to respond to a timed read.  Stored in DTIME. | NUMERIC |  | 
**Always Show Secondaries**{::nomarkdown}<pre><code>  always_show_secondaries</code></pre>{:/} | 200.11 | This field is a flag used by the menu system to control if<br/>the user is shown there secondary menu list with one '?' or two. | BOOLEAN |  | {::nomarkdown}true: <em><strong>1</strong></em>{:/}
**Auto Sign-on**{::nomarkdown}<pre><code>  auto_signon</code></pre>{:/} | 200.18 | This field will control if the Auto Sign-on (Single Sign-on) is enabled<br/>for use with terminal sessions. | BOOLEAN |  | {::nomarkdown}false: <em><strong>1</strong></em><br/>true: <em><strong>0</strong></em>{:/}
**Multiple Sign-on Limit**{::nomarkdown}<pre><code>  multiple_signon_limit</code></pre>{:/} | 200.19 | This field, if filled in, overrides the SITE file. This field sets an<br/>upper limit on the number of concurrent sessions that this user can have<br/>from one IP address when the Multiple Sign-on field (#204) is set to "One<br/>IP" | NUMERIC |  | 
**Primary Menu Option**{::nomarkdown}<pre><code>  primary_menu_option</code></pre>{:/} | 201 | This is the menu option that this user will be dropped into<br/>if none of the following are set: (in the order checked)<br/>Tied routine, Device primary menu. | POINTER | INDEXED | [Option-19](Option-19)
**Primary Window**{::nomarkdown}<pre><code>  primary_window</code></pre>{:/} | 201.1 | This is the lead or first window launched at startup. | POINTER |  | [Option-19](Option-19)
**Startup Default**{::nomarkdown}<pre><code>  startup_default</code></pre>{:/} | 201.2 | This field determines if the Primary Menu or the Primary Window is<br/>loaded at logon. | ENUMERATION |  | {::nomarkdown}Primary Window: <em><strong>W</strong></em><br/>Primary Menu Option: <em><strong>M</strong></em>{:/}
**Last Sign-on Date/time**{::nomarkdown}<pre><code>  last_signon_date_time</code></pre>{:/} | 202 | This field is set when a user signs on to the system. | DATE-TIME |  | 
**Xus Logon Attempt Count**{::nomarkdown}<pre><code>  xus_logon_attempt_count</code></pre>{:/} | 202.02 | This is used to let the user know about unsuccessful logon atempts. | NUMERIC |  | 
**Xus Active User**{::nomarkdown}<pre><code>  xus_active_user</code></pre>{:/} | 202.03 | If a user gets the ** MULTIPULE SIGN-ON NOT ALLOWED ** message<br/>this field can be set to NO to allow them to sign-on again.<br/>This flag is set by XUS and XUSCLEAN. | BOOLEAN |  | {::nomarkdown}false: <em><strong>1</strong></em><br/>true: <em><strong>0</strong></em>{:/}
**Entry Last Edit Date**{::nomarkdown}<pre><code>  entry_last_edit_date</code></pre>{:/} | 202.04 | This field holds the date time this entry in the file was last edited.<br/>The following fields now trigger the current date to the ENTRY LAST EDIT<br/>DATE field: DISUSER (#7), ACCESS CODE (#2), and TERMINATION DATE (#9.2).  | DATE-TIME |  | 
**Lockout User Until**{::nomarkdown}<pre><code>  lockout_user_until</code></pre>{:/} | 202.05 | This field is used by the signon code to lockout users that have<br/>tried bad VERIFY codes too many times.  This field holds the date/time <br/>that the user should be locked out of the system until.<br/>It is set with the current time plus the lockout time. | DATE-TIME |  | 
**Last Option Accessed**{::nomarkdown}<pre><code>  last_option_accessed</code></pre>{:/} | 202.1 | This field holds the last option accessed by the user, when the user<br/>selects the CONTINUE option instead of HALTing.  When the user logs<br/>on again, he will be able to continue directly at that option. | POINTER |  | [Option-19](Option-19)
**Last Option Main Menu**{::nomarkdown}<pre><code>  last_option_main_menu</code></pre>{:/} | 202.2 | This field holds an indicator of which primary or secondary menu a<br/>user was in, after selecting the CONTINUE option.  It is used in con-<br/>junction with the LAST OPTION ACCESSED to resume when a user logs back<br/>on. | STRING |  | 
**Secondary Menu Options**{::nomarkdown}<pre><code>  secondary_menu_options</code></pre>{:/} | 203 | Options awarded a user not on his or her primary menu option | OBJECT |  | [Secondary_Menu_Options-200_03](#Secondary_Menu_Options-200_03)
**Timestamp**{::nomarkdown}<pre><code>  timestamp</code></pre>{:/} | 203.1 | This is the time at which this option was last modified.  It is triggered<br/>automatically by the appropriate fields.  If a CPU references an option<br/>which has been modified since it was last rebuilt, it triggers a rebuilding<br/>of the options. | STRING |  | 
**Secid**{::nomarkdown}<pre><code>  secid</code></pre>{:/} | 205.1 | Identity and Access Management SECID field used to uniquely identify a <br/>VistA user by Security ID.<br/> <br/>*** This field should never be edited directly - do not remove WRITE <br/>ACCESS! | STRING | INDEXED | 
**Subject Organization**{::nomarkdown}<pre><code>  subject_organization</code></pre>{:/} | 205.2 | Identity and Access Management SUBJECT ORGANIZATION field used to <br/>identify the Organization of an externally authenticated user (Subject). <br/>Examples: "Department of Veterans Affairs" or "Department of Defense"<br/> <br/>*** This field should never be edited directly - do not remove WRITE <br/>ACCESS! | STRING |  | 
**Subject Organization Id**{::nomarkdown}<pre><code>  subject_organization_id</code></pre>{:/} | 205.3 | Identity and Access Management SUBJECT ORGANIZATION ID field used to <br/>uniquely identify the Organization that is providing the identification <br/>for an externally authenticated user (Subject). The organization ID <br/>may be an Object Identifier (OID), using the urn format (that is, <br/>"urn:oid:" appended with the OID); or it may be a URL assigned to <br/>that organization. For SSOi this will be hard-coded to Department of <br/>Veterans Affairs official Home Community ID. NHIN standards specify that<br/>the web address of the Subject Organization is typically stored in this<br/>field (example: http://familymedicalclinic.org).<br/> <br/>*** This field should never be edited directly - do not remove WRITE <br/>ACCESS! | STRING |  | 
**Unique User Id**{::nomarkdown}<pre><code>  unique_user_id</code></pre>{:/} | 205.4 | Identity and Access Management UNIQUE USER ID field used to uniquely <br/>identify a user (Subject) within the Subject Organization. The combination<br/>of Subject Organization ID (OID) and Unique User ID (UID) is<br/>cross-referenced in VistA and must be unique. For VA SSOi, this will be <br/>the user SecID. Within NHIN this could be the subject of the NHIN SAML <br/>token which would contain email address of a X.509 name.<br/> <br/>*** This field should never be edited directly - do not remove WRITE <br/>ACCESS! | STRING |  | 
**Adupn**{::nomarkdown}<pre><code>  adupn</code></pre>{:/} | 205.5 | Identity and Access Management Active Directory User Principle Name (AD <br/>UPN) field. | STRING | INDEXED | 
**Personal Diagnoses List**{::nomarkdown}<pre><code>  personal_diagnoses_list</code></pre>{:/} | 351 | This is the provider's personal list of preferred diagnoses codes. | OBJECT |  | [Personal_Diagnoses_List-200_0351](#Personal_Diagnoses_List-200_0351)
**Supply Employee**{::nomarkdown}<pre><code>  supply_employee</code></pre>{:/} | 400 |  | ENUMERATION |  | {::nomarkdown}WAREHOUSE: <em><strong>1</strong></em><br/>PPM ACCOUNTABLE OFFICER: <em><strong>2</strong></em><br/>MANAGER: <em><strong>4</strong></em><br/>PURCHASING AGENT: <em><strong>3</strong></em>{:/}
**Paid Employee**{::nomarkdown}<pre><code>  paid_employee</code></pre>{:/} | 450 | This field is a pointer to the PAID EMPLOYEE (#450) file. | POINTER |  | [Paid_Employee-450](Paid_Employee-450)
**Network Address**{::nomarkdown}<pre><code>  network_address</code></pre>{:/} | 500 | This is the begining of a network address.  Enter the Lastname of the user<br/>or an identifier that he is known as on the receiving system. | OBJECT |  | [Network_Address-200_005](#Network_Address-200_005)
**Network Username**{::nomarkdown}<pre><code>  network_username</code></pre>{:/} | 501.1 | This is the username that is used by the Windows Active Directory.<br/>It should be 'VHA' + 3 char station ID + first 5 of last name + first<br/>character of first name.<br/>Holders of the XUMGR key can override this. | STRING |  | 
**Subject Alternative Name**{::nomarkdown}<pre><code>  subject_alternative_name</code></pre>{:/} | 501.2 | This is a name from the PIV card field SUBJECT ALTERNATIVE NAME<br/>also known as USER PRINCIPLE NAME. <br/> <br/>The subject alternative name extension allows identities to be bound<br/>to the subject of the certificate.  These identities may be included<br/>in addition to or in place of the identity in the subject field of<br/>the certificate.  Subject alternative name is defined by an Internet <br/>electronic mail address.<br/> <br/>When the subjectAltName extension contains an Internet mail address,<br/>the address MUST be stored in the rfc822Name.<br/> | STRING | INDEXED | 
**Social Worker ?**{::nomarkdown}<pre><code>  social_worker_</code></pre>{:/} | 654 | This field will be used to indicate if the user is a Social Worker.<br/>It will also act as a screen for lookups. | BOOLEAN |  | {::nomarkdown}false: <em><strong>0</strong></em><br/>true: <em><strong>1</strong></em>{:/}
**Immediate Supervisor**{::nomarkdown}<pre><code>  immediate_supervisor</code></pre>{:/} | 654.1 | This field is used to indicate the immediate supervisor of the social worker. | POINTER | INDEXED | [New_Person-200](New_Person-200)
**Position/title**{::nomarkdown}<pre><code>  position_title</code></pre>{:/} | 654.15 | This field will be used to indicate the position/title of the social worker. | ENUMERATION |  | {::nomarkdown}SW COORDINATOR: <em><strong>4</strong></em><br/>SUPERVISOR: <em><strong>3</strong></em><br/>SW CHIEF: <em><strong>1</strong></em><br/>ASST. CHIEF: <em><strong>2</strong></em><br/>SOCIAL WORKER: <em><strong>5</strong></em><br/>VOLUNTEER: <em><strong>10</strong></em><br/>SW ASSOCIATE: <em><strong>6</strong></em><br/>STUDENT: <em><strong>9</strong></em><br/>SW CLERK/STENO: <em><strong>8</strong></em><br/>WOC: <em><strong>11</strong></em><br/>SECRETARY: <em><strong>7</strong></em>{:/}
**Social Worker&#x27;s Number**{::nomarkdown}<pre><code>  social_workers_number</code></pre>{:/} | 654.2 | Unique number assigned to social worker by service.  Enter a number 01-999. | NUMERIC | INDEXED | 
**Surrogate**{::nomarkdown}<pre><code>  surrogate</code></pre>{:/} | 654.3 | This field will be used to indicate a surrogate supervisor.  When this<br/>field has data, the surrogate supervisor will have access to data pertaining<br/>to worker information for the surrogated supervisor. | POINTER | INDEXED | [New_Person-200](New_Person-200)
**Dmms Units**{::nomarkdown}<pre><code>  dmms_units</code></pre>{:/} | 720 | This multiple field contains the DMMS units to which this person has<br/>access for entering data and generating reports. | POINTER |  | [Dss_Unit-724](Dss_Unit-724)
**Appointment Status**{::nomarkdown}<pre><code>  appointment_status</code></pre>{:/} | 747.11 | Contains the Appointment Status for this person. | ENUMERATION |  | {::nomarkdown}FULL-TIME: <em><strong>1</strong></em><br/>RESIDENT: <em><strong>5</strong></em><br/>CONSULTING: <em><strong>3</strong></em><br/>CONTRACT: <em><strong>4</strong></em><br/>FEE BASIS, ON STATION: <em><strong>6</strong></em><br/>PART-TIME: <em><strong>2</strong></em><br/>OTHER: <em><strong>9</strong></em><br/>SPECIALTY FELLOW: <em><strong>7</strong></em><br/>WOC: <em><strong>8</strong></em>{:/}
**Renew Date**{::nomarkdown}<pre><code>  renew_date</code></pre>{:/} | 747.113 | Contains the Renewal Date for our General Privilege. | DATE-TIME |  | 
**Dea Expiration Date**{::nomarkdown}<pre><code>  dea_expiration_date</code></pre>{:/} | 747.44 | This field contains the expiration date for DEA #. | DATE-TIME |  | 
**Enumeration Initiated**{::nomarkdown}<pre><code>  enumeration_initiated</code></pre>{:/} | 900 | This field notes the date/time the VPID enumeration attempt was <br/>initiated. | DATE-TIME |  | 
**Enumeration Completed**{::nomarkdown}<pre><code>  enumeration_completed</code></pre>{:/} | 901 | This field notes the date/time the VPID assignment was completed. | DATE-TIME |  | 
**Requires Transmission**{::nomarkdown}<pre><code>  requires_transmission</code></pre>{:/} | 902 | This field is used to note that this record was just added to this file, <br/>or that an edit was made to the fields that MPI cares about capturing and <br/>a VPID needs to be assigned or an update message needs to be sent.<br/> <br/>Fields being monitored for change are:<br/> <br/> .01           NAME <br/> .111          STREET ADDRESS 1 <br/> .112          STREET ADDRESS 2 <br/> .113          STREET ADDRESS 3 <br/> .114          CITY <br/> .115          STATE <br/> .116          ZIP CODE <br/> .131          PHONE (HOME) <br/> 4             SEX <br/> 5             DOB <br/> 9             SSN <br/> 41.99         NPI <br/> 53.2          DEA# <br/> 200.06,.01    VISITED FROM <br/> 200.06,2      DUZ AT HOME SITE | BOOLEAN |  | {::nomarkdown}true: <em><strong>Y</strong></em>{:/}
**Badge Number**{::nomarkdown}<pre><code>  badge_number</code></pre>{:/} | 910.1 | Enter the badge number assigned to the VA police officer. | NUMERIC |  | 
**Rank**{::nomarkdown}<pre><code>  rank</code></pre>{:/} | 910.2 | Enter the VA police officer's assigned rank designation, i.e., CHIEF,<br/>LIEUTENANT, PATROL OFFICER, etc. | STRING |  | 
**Visited From**{::nomarkdown}<pre><code>  visited_from</code></pre>{:/} | 8910 | This subfile stores the information that travels along with visitors using<br/>the CPRS Foreign Views software to look at medical data of a patient which<br/>resides on a system where the visitor may not have valid access or verify<br/>codes.  When that person name and Social Security Number is put into the<br/>visited system's New Person File this multiple is updated to provide the<br/>ability to trace the visitors back to the system from which they are<br/>visiting.  This field (.01) stores the number of the site where the<br/>visitor was authenticated. | OBJECT |  | [Visited_From-200_06](#Visited_From-200_06)
**Mutually Exclusive Keys**{::nomarkdown}<pre><code>  mutually_exclusive_keys</code></pre>{:/} | 8911 |  | POINTER |  | [Security_Key-19_1](Security_Key-19_1)
**Person Class**{::nomarkdown}<pre><code>  person_class</code></pre>{:/} | 8932.1 |  | OBJECT |  | [Person_Class-200_05](#Person_Class-200_05)
**Pgyear**{::nomarkdown}<pre><code>  pgyear</code></pre>{:/} | 8932.2 | This field holds what Post Graduate year a person is. | NUMERIC |  | 
**Pgy Assigned**{::nomarkdown}<pre><code>  pgy_assigned</code></pre>{:/} | 8932.21 | This field holds the date that the PGYear field was last edited. | DATE-TIME |  | 
**Fyear**{::nomarkdown}<pre><code>  fyear</code></pre>{:/} | 8932.3 | This field is the Fellowship year of a person. | NUMERIC |  | 
**Fy Assigned**{::nomarkdown}<pre><code>  fy_assigned</code></pre>{:/} | 8932.31 | This field holds the Date that the FYear field was edited. | DATE-TIME |  | 
**Person File Pointer**{::nomarkdown}<pre><code>  person_file_pointer</code></pre>{:/} | 8980.16 | This field holds a pointer to the person file so there will be a way to<br/>provide a cross reference to help convert 'person file' pointers into<br/>'new person file' pointer after the person file is removed. |  |  | 
**Display Help At Entry To Lm**{::nomarkdown}<pre><code>  display_help_at_entry_to_lm</code></pre>{:/} | 8983.11 | If set to yes, a help text will be displayed before entering the editor.<br/>This is used primarily for new users. | BOOLEAN |  | {::nomarkdown}false: <em><strong>n</strong></em><br/>true: <em><strong>y</strong></em>{:/}
**Ask Terminal Type At Lm Entry**{::nomarkdown}<pre><code>  ask_terminal_type_at_lm_entry</code></pre>{:/} | 8983.12 | If set to yes, the terminal type will be asked upon entry to the editor. | BOOLEAN |  | {::nomarkdown}false: <em><strong>n</strong></em><br/>true: <em><strong>y</strong></em>{:/}
**Default Terminal Type For Lm**{::nomarkdown}<pre><code>  default_terminal_type_for_lm</code></pre>{:/} | 8983.13 | This field stores the default terminal type for a user. | POINTER |  | [Terminal_Type-3_2](Terminal_Type-3_2)
**Display Lm Commands**{::nomarkdown}<pre><code>  display_lm_commands</code></pre>{:/} | 8983.14 | If set to yes, the list of commands will be displayed at the bottom<br/>of the screen when entering the command mode. | BOOLEAN |  | {::nomarkdown}false: <em><strong>n</strong></em><br/>true: <em><strong>y</strong></em>{:/}
**Bright Chars At Exit From Lm**{::nomarkdown}<pre><code>  bright_chars_at_exit_from_lm</code></pre>{:/} | 8983.15 | If set to yes, the terminal will be left in high intensity after exiting. | BOOLEAN |  | {::nomarkdown}false: <em><strong>n</strong></em><br/>true: <em><strong>y</strong></em>{:/}
**Date Last Accessed Lm Wp**{::nomarkdown}<pre><code>  date_last_accessed_lm_wp</code></pre>{:/} | 8983.16 | The date and time a user last accessed the LetterMan word processor<br/>document editor. | DATE-TIME |  | 
**Total Minutes Using Lm Wp**{::nomarkdown}<pre><code>  total_minutes_using_lm_wp</code></pre>{:/} | 8983.17 | The total minutes a user has used the LetterMan word processor<br/>document editor. | NUMERIC |  | 
**Keystrokes From Lm Wp**{::nomarkdown}<pre><code>  keystrokes_from_lm_wp</code></pre>{:/} | 8983.18 | This field stores the total number of keystrokes a user has typed from<br/>the word processor document editor. | NUMERIC |  | 
**Spelling Exception Dictionary**{::nomarkdown}<pre><code>  spelling_exception_dictionary</code></pre>{:/} | 8983.5 | This field stores the exception spelling dictionary for the user. | STRING |  | 
**Defined Formats For Lm**{::nomarkdown}<pre><code>  defined_formats_for_lm</code></pre>{:/} | 8983.51 | This field is used to store predefined format lines which a user can<br/>select from during editing. | OBJECT |  | [Defined_Formats_For_Lm-200_0089832](#Defined_Formats_For_Lm-200_0089832)
**Defined Phrases For Lm**{::nomarkdown}<pre><code>  defined_phrases_for_lm</code></pre>{:/} | 8983.52 | This field stores predefined phrases which can be inserted into the document during editing. | OBJECT |  | [Defined_Phrases_For_Lm-200_0089833](#Defined_Phrases_For_Lm-200_0089833)
**Lm Limit Wp Fields To Edit**{::nomarkdown}<pre><code>  lm_limit_wp_fields_to_edit</code></pre>{:/} | 8983.6 | This field is used by the user to limit which word processing<br/>fields should be edited by LetterMan. | STRING |  | 
**Vpid**{::nomarkdown}<pre><code>  vpid</code></pre>{:/} | 9000 | The VA Person Identification Number which was assigned by the Person<br/>Service central system.  Used to uniquely identify a Person. | STRING | INDEXED | 
**Ess People**{::nomarkdown}<pre><code>  ess_people</code></pre>{:/} | 776000 |  | STRING |  | 
**Ess Customer Id**{::nomarkdown}<pre><code>  ess_customer_id</code></pre>{:/} | 776001 |  | STRING |  | 

### Subfile
#### <a name="User_Class-200_07"></a>User Class

<dl>
<dt>ID</dt><dd>User_Class-200_07</dd>
<dt>File Type</dt><dd>200.07</dd>
<dt>Label</dt><dd>User Class</dd></dl>

#### Properties

Field | ID | Description | Datatype | Attributes | Range
--- | --- | --- | --- | --- | ---
**User Class**{::nomarkdown}<pre><code>  user_class</code></pre>{:/} | .01 |  | POINTER | INDEXED<br/>REQUIRED | [User_Class-201](User_Class-201)
**Isprimary**{::nomarkdown}<pre><code>  isprimary</code></pre>{:/} | 2 | This field notes if this User Class is the primary User Class for this <br/>user.  If returning just one User Class then this is the one to be <br/>returned. | BOOLEAN |  | {::nomarkdown}false: <em><strong>1</strong></em><br/>true: <em><strong>0</strong></em>{:/}

#### <a name="Division-200_02"></a>Division

<dl>
<dt>ID</dt><dd>Division-200_02</dd>
<dt>File Type</dt><dd>200.02</dd>
<dt>Label</dt><dd>Division</dd></dl>

#### Properties

Field | ID | Description | Datatype | Attributes | Range
--- | --- | --- | --- | --- | ---
**Division**{::nomarkdown}<pre><code>  division</code></pre>{:/} | .01 | The name of a Division that this user may sign on to. | POINTER | INDEXED<br/>REQUIRED | [Institution-4](Institution-4)
**Default**{::nomarkdown}<pre><code>  default</code></pre>{:/} | 1 | This field is used to indicate that a particular division should be<br/>presented to the user as a default when selecting a division.  This will<br/>only affect users that have more than one division.<br/>A cross reference will only allow one entry to have this flag set. | BOOLEAN |  | {::nomarkdown}false: <em><strong>0</strong></em><br/>true: <em><strong>1</strong></em>{:/}

#### <a name="Alert_Date_Time-200_194"></a>Alert Date Time

<dl>
<dt>ID</dt><dd>Alert_Date_Time-200_194</dd>
<dt>File Type</dt><dd>200.194</dd>
<dt>Label</dt><dd>Alert Date Time</dd></dl>

#### Properties

Field | ID | Description | Datatype | Attributes | Range
--- | --- | --- | --- | --- | ---
**Alert Date Time**{::nomarkdown}<pre><code>  alert_date_time</code></pre>{:/} | .01 | This is the date and time when the alert was generated. | DATE-TIME | REQUIRED | 
**Package Id**{::nomarkdown}<pre><code>  package_id</code></pre>{:/} | .02 | This is a field in which the package id passed during alert filing.  This<br/>id may simply be a package namespace, or it may be a namespace followed by<br/>additional data to more accurately identify the type or purpose of the<br/>alert. | STRING |  | 
**Message Text**{::nomarkdown}<pre><code>  message_text</code></pre>{:/} | .03 | This field contains the text of the message to be presented to the user at<br/>the time when he cycles through the menu system the first time after the<br/>alert has been filed for the user, and when the user selects the VIEW<br/>ALERTS option. | STRING |  | 
**New Alert Flag**{::nomarkdown}<pre><code>  new_alert_flag</code></pre>{:/} | .04 | This flag is used by the alert processing to indicate a new alert which<br/>has not previously been presented to the user.  After the alert message<br/>text has been shown to the user, this flag is cleared and the user must<br/>then select the VIEW ALERTS option to process the alert. | ENUMERATION |  | {::nomarkdown}NEW: <em><strong>1</strong></em>{:/}
**Action Flag**{::nomarkdown}<pre><code>  action_flag</code></pre>{:/} | .05 | This flag is optional at the present time, since the need for action<br/>processing can be determined by the presence of an option name or a<br/>routine name for use during alert processing. | ENUMERATION |  | {::nomarkdown}RUN ROUTINE: <em><strong>R</strong></em><br/>IMMEDIATE RUN: <em><strong>I</strong></em><br/>DELETE: <em><strong>D</strong></em>{:/}
**Reserved1**{::nomarkdown}<pre><code>  reserved1</code></pre>{:/} | .06 | This field is reserved for future use by the alert system. | STRING |  | 
**Entry Point**{::nomarkdown}<pre><code>  entry_point</code></pre>{:/} | .07 | While named ENTRY POINT, this is a dual function field.  If the next field<br/>(#.08, AROUTINE NAME) contains a routine name, this field contains the<br/>desired entry point within that routine (this field may also be null,<br/>indicating that the entry point should be at the top of the routine).  If<br/>field #.08 is null, then the contents of this field is interpreted as the<br/>name of an option which is to be entered when the alert is processed. | STRING |  | 
**Aroutine Name**{::nomarkdown}<pre><code>  aroutine_name</code></pre>{:/} | .08 | If this field is not null, it contains the name of a routine which is to<br/>be used when the alert is processed.  If there is also a value in field<br/>#.07, that value is used as an entry point into the routine specified in<br/>this field.<br/> <br/>If this field is null, field #.07 is interpreted as an option name which<br/>is to be used when the alert is processed.<br/> <br/>If both this field and field #.07 are null, the alert is processed as an<br/>information only alert. | STRING |  | 
**Reserved Field**{::nomarkdown}<pre><code>  reserved_field</code></pre>{:/} | .09 | This field is reserved for future use in the alert processing system. | STRING |  | 
**First Data Piece**{::nomarkdown}<pre><code>  first_data_piece</code></pre>{:/} | .1 | This field and all following ^-separated fields are processed as a single<br/>entity and are returned in the variable XQADATA for use by the application<br/>which generated the alert.  The package may pass a series of variables<br/>using any desired separator in the variable XQADATA at the time the alert<br/>is setup.  When the alert is processed the value of XQADATA is returned to<br/>the application and may be used to establish parameters related to the<br/>alert without requiring interaction or provision of information by the<br/>user.  In this way information related to patient entry number, specific<br/>internal numbers for the desired data, etc may be stored and returned. | STRING |  | 
**Data String**{::nomarkdown}<pre><code>  data_string</code></pre>{:/} | 1 |  | STRING |  | 

#### <a name="Delegated_Options-200_19"></a>Delegated Options

<dl>
<dt>ID</dt><dd>Delegated_Options-200_19</dd>
<dt>File Type</dt><dd>200.19</dd>
<dt>Label</dt><dd>Delegated Options</dd></dl>

#### Properties

Field | ID | Description | Datatype | Attributes | Range
--- | --- | --- | --- | --- | ---
**Delegated Options**{::nomarkdown}<pre><code>  delegated_options</code></pre>{:/} | .01 | This field identifies which options this user may delegate to others. | POINTER | INDEXED<br/>REQUIRED | [Option-19](Option-19)
**Delegated By**{::nomarkdown}<pre><code>  delegated_by</code></pre>{:/} | 1 | This field indicates who granted authority for this user to delegate<br/>this option to others. | POINTER |  | [New_Person-200](New_Person-200)
**Date Delegated**{::nomarkdown}<pre><code>  date_delegated</code></pre>{:/} | 2 | This field records the date when this option was added to the list<br/>of options this user may delegate to others. | DATE-TIME |  | 
**Editable**{::nomarkdown}<pre><code>  editable</code></pre>{:/} | 3 | This field indicates whether this use is allowed to edit this option. | BOOLEAN |  | {::nomarkdown}false: <em><strong>1</strong></em><br/>true: <em><strong>0</strong></em>{:/}

#### <a name="Menu_Template-200_198"></a>Menu Template

<dl>
<dt>ID</dt><dd>Menu_Template-200_198</dd>
<dt>File Type</dt><dd>200.198</dd>
<dt>Label</dt><dd>Menu Template</dd></dl>

#### Properties

Field | ID | Description | Datatype | Attributes | Range
--- | --- | --- | --- | --- | ---
**Menu Template**{::nomarkdown}<pre><code>  menu_template</code></pre>{:/} | .01 |  | STRING | INDEXED<br/>REQUIRED | 
**Pathway**{::nomarkdown}<pre><code>  pathway</code></pre>{:/} | 1 | This multiple contains the information on the option sequence specified<br/>for a given MENU TEMPLATE. | STRING |  | 

#### <a name="Uci-200_01"></a>Uci

<dl>
<dt>ID</dt><dd>Uci-200_01</dd>
<dt>File Type</dt><dd>200.01</dd>
<dt>Label</dt><dd>Uci</dd></dl>

#### Properties

Field | ID | Description | Datatype | Attributes | Range
--- | --- | --- | --- | --- | ---
**Uci**{::nomarkdown}<pre><code>  uci</code></pre>{:/} | .01 | This is one of a set of UCI's that this user may choose to work in<br/>at sign-on time. | STRING | INDEXED<br/>REQUIRED | 
**Routines (rn1:rn2)**{::nomarkdown}<pre><code>  routines_rn1rn2</code></pre>{:/} | 2 | This is a list of routines that the user may choose to run when signing on<br/>to this UCI.  The routines are seperated by ':'s. | STRING |  | 

#### <a name="Accessible_File-200_032"></a>Accessible File

<dl>
<dt>ID</dt><dd>Accessible_File-200_032</dd>
<dt>File Type</dt><dd>200.032</dd>
<dt>Label</dt><dd>Accessible File</dd></dl>

#### Properties

Field | ID | Description | Datatype | Attributes | Range
--- | --- | --- | --- | --- | ---
**File Number**{::nomarkdown}<pre><code>  file_number</code></pre>{:/} | .001 | When defined, this field makes the sub-file's internal entry number<br/>accessible for inquiry and edit. | IEN |  | 
**Accessible File**{::nomarkdown}<pre><code>  accessible_file</code></pre>{:/} | .01 |  | POINTER | INDEXED<br/>REQUIRED | [File-1](File-1)
**Data Dictionary Access**{::nomarkdown}<pre><code>  data_dictionary_access</code></pre>{:/} | 1 | This field is a flag that, when set to 1, gives the user data dictionary<br/>access to the file (in the .01 field) represented in this record. | BOOLEAN |  | {::nomarkdown}false: <em><strong>0</strong></em><br/>true: <em><strong>1</strong></em>{:/}
**Delete Access**{::nomarkdown}<pre><code>  delete_access</code></pre>{:/} | 2 | This field is a flag that, when set to 1, gives the user delete access to<br/>the file (in the .01 field) represented in this record. | BOOLEAN |  | {::nomarkdown}false: <em><strong>0</strong></em><br/>true: <em><strong>1</strong></em>{:/}
**Laygo Access**{::nomarkdown}<pre><code>  laygo_access</code></pre>{:/} | 3 | This field is a flag that, when set to 1, gives the user LAYGO access to<br/>the file (in the .01 field) represented in this record. | BOOLEAN |  | {::nomarkdown}false: <em><strong>0</strong></em><br/>true: <em><strong>1</strong></em>{:/}
**Read Access**{::nomarkdown}<pre><code>  read_access</code></pre>{:/} | 4 | This field is a flag that, when set to 1, gives the user read access to<br/>the file (in the .01 field) represented in this record. | BOOLEAN |  | {::nomarkdown}false: <em><strong>0</strong></em><br/>true: <em><strong>1</strong></em>{:/}
**Write Access**{::nomarkdown}<pre><code>  write_access</code></pre>{:/} | 5 | This field is a flag that, when set to 1, gives the user write access to<br/>the file (in the .01 field) represented in this record. | BOOLEAN |  | {::nomarkdown}false: <em><strong>0</strong></em><br/>true: <em><strong>1</strong></em>{:/}
**Audit Access**{::nomarkdown}<pre><code>  audit_access</code></pre>{:/} | 6 | This field is a flag that, when set to 1, gives the user audit access to<br/>the file (in the .01 field) represented in this record. | BOOLEAN |  | {::nomarkdown}false: <em><strong>0</strong></em><br/>true: <em><strong>1</strong></em>{:/}

#### <a name="Effective_Date_time-200_042"></a>Effective Date/time

<dl>
<dt>ID</dt><dd>Effective_Date_time-200_042</dd>
<dt>File Type</dt><dd>200.042</dd>
<dt>Label</dt><dd>Effective Date/time</dd></dl>

#### Properties

Field | ID | Description | Datatype | Attributes | Range
--- | --- | --- | --- | --- | ---
**Effective Date/time**{::nomarkdown}<pre><code>  effective_date_time</code></pre>{:/} | .01 | This field contains the date and time of the last change to the NPI field. | DATE-TIME | INDEXED<br/>REQUIRED | 
**Status**{::nomarkdown}<pre><code>  status</code></pre>{:/} | .02 | The Status of an NPI is either 'ACTIVE' or 'INACTIVE'. I 'ACTIVE' then <br/>the NPI will be accessible by end-users to document a particular <br/>provider. If 'INACTIVE', then the NPI will only be accessible by the <br/>application to display legacy data. | ENUMERATION | REQUIRED | {::nomarkdown}ACTIVE: <em><strong>1</strong></em><br/>INACTIVE: <em><strong>0</strong></em>{:/}
**Npi**{::nomarkdown}<pre><code>  npi</code></pre>{:/} | .03 | Each VHA Billable Practitioner should have applied for the NPI through<br/>CMS' National Plan and Provider Enumeration System (NPPES).  NPI<br/>Confirmation Letters are sent by CMS and indicate the NPI assigned.<br/>Practitioners may present their NPI Confirmation Letter as a source<br/>document to verify the accuracy of the NPI or you may contact your Local<br/>NPI Maintenance Team Leader for assistance. | STRING | INDEXED<br/>REQUIRED | 

#### <a name="Keys-200_051"></a>Keys

<dl>
<dt>ID</dt><dd>Keys-200_051</dd>
<dt>File Type</dt><dd>200.051</dd>
<dt>Label</dt><dd>Keys</dd></dl>

#### Properties

Field | ID | Description | Datatype | Attributes | Range
--- | --- | --- | --- | --- | ---
**Key**{::nomarkdown}<pre><code>  key</code></pre>{:/} | .01 | This is a security key that this person holds. | POINTER | INDEXED<br/>REQUIRED | [Security_Key-19_1](Security_Key-19_1)
**Given By**{::nomarkdown}<pre><code>  given_by</code></pre>{:/} | 1 | This is a pointer to the person that entered this security  key into this<br/>persons file. | POINTER |  | [New_Person-200](New_Person-200)
**Date Given**{::nomarkdown}<pre><code>  date_given</code></pre>{:/} | 2 | This is the date that the security key was given to the person.<br/>There is know history. | DATE-TIME |  | 
**Review Date**{::nomarkdown}<pre><code>  review_date</code></pre>{:/} | 3 | This is the date after which the persons need for this security key should<br/>be reviewed. | DATE-TIME |  | 

#### <a name="Delegated_Keys-200_052"></a>Delegated Keys

<dl>
<dt>ID</dt><dd>Delegated_Keys-200_052</dd>
<dt>File Type</dt><dd>200.052</dd>
<dt>Label</dt><dd>Delegated Keys</dd></dl>

#### Properties

Field | ID | Description | Datatype | Attributes | Range
--- | --- | --- | --- | --- | ---
**Delegated Key**{::nomarkdown}<pre><code>  delegated_key</code></pre>{:/} | .01 | This is a security key that this person my allocate to another person. | POINTER | INDEXED<br/>REQUIRED | [Security_Key-19_1](Security_Key-19_1)
**Delegated By**{::nomarkdown}<pre><code>  delegated_by</code></pre>{:/} | 1 | This is the person that gave the security key that may be delegated. | POINTER |  | [New_Person-200](New_Person-200)
**Date Delegated**{::nomarkdown}<pre><code>  date_delegated</code></pre>{:/} | 2 | This is the date that the security key was given to be delegated. | DATE-TIME |  | 
**May Re-delegate**{::nomarkdown}<pre><code>  may_redelegate</code></pre>{:/} | 3 | Re-delegation means that the person has total control over the key,<br/>the person may not only delegate the key to others but may also give<br/>others the authorization to delegate it. | ENUMERATION |  | {::nomarkdown}YES: <em><strong>1</strong></em><br/>no: <em><strong>0</strong></em><br/>yes: <em><strong>1</strong></em><br/>NO: <em><strong>0</strong></em>{:/}

#### <a name="Licensing_State-200_541"></a>Licensing State

<dl>
<dt>ID</dt><dd>Licensing_State-200_541</dd>
<dt>File Type</dt><dd>200.541</dd>
<dt>Label</dt><dd>Licensing State</dd></dl>

#### Properties

Field | ID | Description | Datatype | Attributes | Range
--- | --- | --- | --- | --- | ---
**Licensing State**{::nomarkdown}<pre><code>  licensing_state</code></pre>{:/} | .01 | This is the state issuing a license to practice medicine for a provider. | POINTER | INDEXED<br/>REQUIRED | [State-5](State-5)
**License Number**{::nomarkdown}<pre><code>  license_number</code></pre>{:/} | 1 | This is the licence number that was issued to a provider by the sate<br/>he is licenced in. | STRING | REQUIRED | 
**Expiration Date**{::nomarkdown}<pre><code>  expiration_date</code></pre>{:/} | 2 | This is the expiration date of the provider's licence issued by the state.<br/>by the state. | DATE-TIME | REQUIRED | 

#### <a name="State_Issuing_Dea_Number-200_55"></a>State Issuing Dea Number

<dl>
<dt>ID</dt><dd>State_Issuing_Dea_Number-200_55</dd>
<dt>File Type</dt><dd>200.55</dd>
<dt>Label</dt><dd>State Issuing Dea Number</dd></dl>

#### Properties

Field | ID | Description | Datatype | Attributes | Range
--- | --- | --- | --- | --- | ---
**State Issuing Dea Number**{::nomarkdown}<pre><code>  state_issuing_dea_number</code></pre>{:/} | .01 | This is the state which has issued a State DEA# to a provider.  Not all<br/>states require a seperate DEA # | POINTER | INDEXED<br/>REQUIRED | [State-5](State-5)
**State Dea Number**{::nomarkdown}<pre><code>  state_dea_number</code></pre>{:/} | 1 | This is the DEA # issued by an individual state, it is not required<br/>by all states and in some cases may be the same as the Federal<br/>DEA #. | STRING | REQUIRED | 

#### <a name="Cprs_Tab-200_010113"></a>Cprs Tab

<dl>
<dt>ID</dt><dd>Cprs_Tab-200_010113</dd>
<dt>File Type</dt><dd>200.010113</dd>
<dt>Label</dt><dd>Cprs Tab</dd></dl>

#### Properties

Field | ID | Description | Datatype | Attributes | Range
--- | --- | --- | --- | --- | ---
**Cprs Tab**{::nomarkdown}<pre><code>  cprs_tab</code></pre>{:/} | .01 | This is a pointer to the OR CPRS TABS (#101.13) file. Enter the name of<br/>the CPRS tab for which you want to set effective and expiration dates for<br/>access for this user. | POINTER | INDEXED<br/>REQUIRED | [Or_Cprs_Tabs-101_13](Or_Cprs_Tabs-101_13)
**Effective Date**{::nomarkdown}<pre><code>  effective_date</code></pre>{:/} | .02 | This is the effective date of access to the CPRS tab. | DATE-TIME | REQUIRED | 
**Expiration Date**{::nomarkdown}<pre><code>  expiration_date</code></pre>{:/} | .03 | This is the expiration date of access to the CPRS tab. | DATE-TIME |  | 

#### <a name="Secondary_Menu_Options-200_03"></a>Secondary Menu Options

<dl>
<dt>ID</dt><dd>Secondary_Menu_Options-200_03</dd>
<dt>File Type</dt><dd>200.03</dd>
<dt>Label</dt><dd>Secondary Menu Options</dd></dl>

#### Properties

Field | ID | Description | Datatype | Attributes | Range
--- | --- | --- | --- | --- | ---
**Secondary Menu Options**{::nomarkdown}<pre><code>  secondary_menu_options</code></pre>{:/} | .01 | This is an option which is merged with the users primary menu<br/>and XUCOMMAND option, giving the user this option on all of her/his<br/>menus. | POINTER | INDEXED<br/>REQUIRED | [Option-19](Option-19)
**Synonym**{::nomarkdown}<pre><code>  synonym</code></pre>{:/} | 2 | This is a user-specific synonym which may be used in addressing this<br/>option. | STRING |  | 

#### <a name="Personal_Diagnoses_List-200_0351"></a>Personal Diagnoses List

<dl>
<dt>ID</dt><dd>Personal_Diagnoses_List-200_0351</dd>
<dt>File Type</dt><dd>200.0351</dd>
<dt>Label</dt><dd>Personal Diagnoses List</dd></dl>

#### Properties

Field | ID | Description | Datatype | Attributes | Range
--- | --- | --- | --- | --- | ---
**Diagnosis**{::nomarkdown}<pre><code>  diagnosis</code></pre>{:/} | .01 | A diagnosis in the provider's preferred list. | POINTER | INDEXED<br/>REQUIRED | [Icd_Diagnosis-80](Icd_Diagnosis-80)
**Expression**{::nomarkdown}<pre><code>  expression</code></pre>{:/} | 1 | This is the diagnosis code's Lexicon<br/>expression as stored in the EXPRESSION file,<br/>file # 757.01. | POINTER |  | [Expressions-757_01](Expressions-757_01)

#### <a name="Network_Address-200_005"></a>Network Address

<dl>
<dt>ID</dt><dd>Network_Address-200_005</dd>
<dt>File Type</dt><dd>200.005</dd>
<dt>Label</dt><dd>Network Address</dd></dl>

#### Properties

Field | ID | Description | Datatype | Attributes | Range
--- | --- | --- | --- | --- | ---
**Network Address Lastname**{::nomarkdown}<pre><code>  network_address_lastname</code></pre>{:/} | .01 | This is the last name of the user. | STRING | INDEXED<br/>REQUIRED | 
**Network Address First Name**{::nomarkdown}<pre><code>  network_address_first_name</code></pre>{:/} | 1 | The recipient's first name should be entered into this field. | STRING | REQUIRED | 
**X.400 User Id**{::nomarkdown}<pre><code>  x400_user_id</code></pre>{:/} | 2 | Enter a string that uniquely identifies the user at the remote system. | STRING |  | 
**Generation**{::nomarkdown}<pre><code>  generation</code></pre>{:/} | 3 | The generation of the recipient is a suffix that further identifies him.<br/>Common strings used as such suffixes are: 'junior', 'senior', 'III'. | STRING |  | 
**Country**{::nomarkdown}<pre><code>  country</code></pre>{:/} | 4 | All X.400 addresses require a 'country'.  If no country is known this system<br/>will not deliver the mail.  As of 11/90 'US' was the only valid country.<br/>SMTP addresses such as 'name@domain' where domain ends with such strings as<br/>'.EDU' need no country. | ENUMERATION |  | {::nomarkdown}US: <em><strong>US</strong></em>{:/}
**Organization**{::nomarkdown}<pre><code>  organization</code></pre>{:/} | 5 | If you are filling in this field for an X.400 address, it is a standard<br/>field.  If, however, you are filling in this field for an SMTP address,<br/>you must fill in the third level of the domain.  For example, the third<br/>level of the domain 'SILVER.FORUM.VA.GOV' is the string after the second<br/>"." starting from the right.  'GOV' is the first.  'VA' is the second.<br/>'SILVER' is the fourth level. | STRING |  | 
**Organizational Unit Sub0**{::nomarkdown}<pre><code>  organizational_unit_sub0</code></pre>{:/} | 5.1 | This field contains the 'Orgainzational Unit' of the address if it is the<br/>address of an X.400 recipient.  IF it is the address of an SMTP recipient,<br/>this is the FOURTH LEVEL NAME of the DOMAIN.  See the ORGANIZATION field<br/>for a description of domain levels of SMTP domains. | STRING |  | 
**Organizational Unit Sub1**{::nomarkdown}<pre><code>  organizational_unit_sub1</code></pre>{:/} | 5.2 | The Organizational Unit field of X.400 recipients is infinitely repeating.<br/>This system will only be able to handle 4 levels of Organizational Units.<br/>SMTP domains also have levels.  Each Organizational Unit 'subn' field is<br/>a deeper definition (and level) of the SMTP domain.  'Sub1' is the fift<br/>level of the domain field.  'Sub2' is the sixth level. 'Sub3' is the seventh.<br/>See the description of the ORGANIZATION field for further information on<br/>levels of SMTP domains. | STRING |  | 
**Organizational Unit Sub2**{::nomarkdown}<pre><code>  organizational_unit_sub2</code></pre>{:/} | 5.3 | See the description of the 'ORGANIZATIONAL UNIT sub1' field for further<br/>information. | STRING |  | 
**Organizational Unit Sub3**{::nomarkdown}<pre><code>  organizational_unit_sub3</code></pre>{:/} | 5.4 | See the description of the 'ORGANIZATIONAL UNIT SUB1' field for further<br/>information. | STRING |  | 
**Locality**{::nomarkdown}<pre><code>  locality</code></pre>{:/} | 6 |  | STRING |  | 
**Application Entity**{::nomarkdown}<pre><code>  application_entity</code></pre>{:/} | 7 | The 'Application Entity' field is the name of a piece of software that will<br/>receive and process any messages it receives. | STRING |  | 
**Private Administrative Domain**{::nomarkdown}<pre><code>  private_administrative_domain</code></pre>{:/} | 98 | For X.400 addresses this field is standard.  For mapping into the SMTP<br/>mail system (MailMan is an SMTP mail system.), this field is filled in<br/>with a special string.  'DHCP' will be interpreted as ".VA.GOV" for all<br/>Department of Veterans' Affairs SMTP systems.  If the address does have<br/>"DHCP' in this field, MailMan will try to deliver it to a VA site.  If<br/>the address has anything else, MailMan will try to deliver to an X.400<br/>system as of 11/90.  Later there may be additional special PRMDs. | STRING |  | 
**Administrative Domain**{::nomarkdown}<pre><code>  administrative_domain</code></pre>{:/} | 99 | The Administrative domain is the carrier of the electronic channels.  Some<br/>examples of carriers in the US are US SPRINT, AT&T and MCI Communications.<br/>This field is required only for X.400 addresses. | STRING |  | 

#### <a name="Visited_From-200_06"></a>Visited From

<dl>
<dt>ID</dt><dd>Visited_From-200_06</dd>
<dt>File Type</dt><dd>200.06</dd>
<dt>Label</dt><dd>Visited From</dd></dl>

#### Properties

Field | ID | Description | Datatype | Attributes | Range
--- | --- | --- | --- | --- | ---
**Visited From**{::nomarkdown}<pre><code>  visited_from</code></pre>{:/} | .01 | This field holds the official Station Number ID of the remote site that<br/>did the user authentication. This may be the site that caused this user to<br/>be added to the NPF. | STRING | INDEXED<br/>REQUIRED | 
**Site Name**{::nomarkdown}<pre><code>  site_name</code></pre>{:/} | 1 | This field contains the name of the site where the visitor was<br/>authenticated. | STRING |  | 
**Duz At Home Site**{::nomarkdown}<pre><code>  duz_at_home_site</code></pre>{:/} | 2 | This field contains the internal entry number in the New Person File at<br/>the site where this visitor was authenticated. | NUMERIC |  | 
**First Visit**{::nomarkdown}<pre><code>  first_visit</code></pre>{:/} | 3 | This field contains the date when this visitor first visited from the site<br/>recorded in the .01 field. | DATE-TIME |  | 
**Last Visited**{::nomarkdown}<pre><code>  last_visited</code></pre>{:/} | 4 | This field is updated each time a visitor arrives from the site in the .01<br/>field. | DATE-TIME |  | 
**Phone At Site**{::nomarkdown}<pre><code>  phone_at_site</code></pre>{:/} | 5 | This field may contain a phone number for the visitor at their home site.<br/>Since phone numbers are not always entered, this field may be blank. | STRING |  | 

#### <a name="Person_Class-200_05"></a>Person Class

<dl>
<dt>ID</dt><dd>Person_Class-200_05</dd>
<dt>File Type</dt><dd>200.05</dd>
<dt>Label</dt><dd>Person Class</dd></dl>

#### Properties

Field | ID | Description | Datatype | Attributes | Range
--- | --- | --- | --- | --- | ---
**Person Class**{::nomarkdown}<pre><code>  person_class</code></pre>{:/} | .01 | This is a pointer to the Person class file. | POINTER | INDEXED<br/>REQUIRED | [Person_Class-8932_1](Person_Class-8932_1)
**Effective Date**{::nomarkdown}<pre><code>  effective_date</code></pre>{:/} | 2 | This field is trigger by adding a new person class. | DATE-TIME | INDEXED<br/>REQUIRED | 
**Expiration Date**{::nomarkdown}<pre><code>  expiration_date</code></pre>{:/} | 3 | This field is the date after which this class becomes inactive.<br/>This field must be not less than the EFFECTIVE DATE and not greater <br/>than the DATE INACTIVATED field(#4) of the Person Class entry in the<br/>PERSON CLASS file(#8932.1).<br/>       <br/>It will get triggered if a new Person Class is entered or someone<br/>edits the field to inactivate the class. | DATE-TIME |  | 

#### <a name="Defined_Formats_For_Lm-200_0089832"></a>Defined Formats For Lm

<dl>
<dt>ID</dt><dd>Defined_Formats_For_Lm-200_0089832</dd>
<dt>File Type</dt><dd>200.0089832</dd>
<dt>Label</dt><dd>Defined Formats For Lm</dd></dl>

#### Properties

Field | ID | Description | Datatype | Attributes | Range
--- | --- | --- | --- | --- | ---
**Number**{::nomarkdown}<pre><code>  number</code></pre>{:/} | .01 | This is the reference number to the predefined format line. | NUMERIC | INDEXED<br/>REQUIRED | 
**Default**{::nomarkdown}<pre><code>  default</code></pre>{:/} | 1 | If set to yes, this format line will be used as the default format line<br/>when using the screen editor.  If a document already has a format line<br/>defined, then the document format will be used. | BOOLEAN | INDEXED | {::nomarkdown}false: <em><strong>n</strong></em><br/>true: <em><strong>y</strong></em>{:/}
**Format Line**{::nomarkdown}<pre><code>  format_line</code></pre>{:/} | 2 | This field stores the predefined format lines of the user. | STRING |  | 

#### <a name="Defined_Phrases_For_Lm-200_0089833"></a>Defined Phrases For Lm

<dl>
<dt>ID</dt><dd>Defined_Phrases_For_Lm-200_0089833</dd>
<dt>File Type</dt><dd>200.0089833</dd>
<dt>Label</dt><dd>Defined Phrases For Lm</dd></dl>

#### Properties

Field | ID | Description | Datatype | Attributes | Range
--- | --- | --- | --- | --- | ---
**Keyword**{::nomarkdown}<pre><code>  keyword</code></pre>{:/} | .01 | The predefined phrase 'keyword' used to select the phrase. | STRING | INDEXED<br/>REQUIRED | 
**Phrase**{::nomarkdown}<pre><code>  phrase</code></pre>{:/} | 1 | The phrase to be inserted into the document. | STRING |  | 



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:00 pm</p>{:/}