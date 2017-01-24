---
layout: default
title: VDM documentation
---

## [VDM](TableOfContent.md) &#8594; New_Person-200 

 property | value 
--- | --- 
 id | New_Person-200
 fmId | 200
 label | New Person
 location | ^VA(200,
 description | {::nomarkdown}This file contains data on employees, users, practitioners, etc.<br/>who were previously in Files 3,6,16 and others.<br/> <br/>DHCP packages must check with the KERNEL developers to see that<br/>a given number/namespace is clear for them to use.<br/> <br/>Field numbers 53-59.9 reserved for Pharm.<br/> Nodes and X-ref 'PS*'.<br/>Field numbers 70-79.9 reserved for Radiology<br/> Nodes and X-ref 'RA*'.<br/>Field numbers 720-725 reserved for DSSM<br/> Nodes and X-ref 'EC*' and 'AEC*'.<br/>Field numbers 740-749.9 reserved for QA<br/> Nodes and X-ref 'QA*'.<br/>Field numbers 654-654.9 reserved for Social work<br/> Node 654 and X-ref 'SW*'.<br/>Field numbers 500-500.9 reserved for mailman<br/> Node 500 and X-ref 'XM*' and 'AXM*'.<br/>Field numbers 740-749.9 reserved for QA<br/> Nodes and X-ref 'QA*'.<br/>Field numbers 910-910.9 reserved for Police Package<br/> Node and X-ref 'ESP'{:/}

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
| name | .01 | Name | {::nomarkdown}Enter only data that is actually part of the person's name. Do not<br/>include extra titles, identification, flags, local information, etc.<br/>Enter the person's name in 'LAST,FIRST MIDDLE SUFFIX' format.<br/>This value must be 3-35 characters in length and may contain only<br/>uppercase alpha characters, spaces, apostrophes, hyphens and one comma.<br/>All other characters and parenthetical text will be removed.{:/} | STRING |  | REQUIRED, INDEXED |  | 
| street_address_1 | .111 | Street Address 1 | {::nomarkdown}This is the first line of the street address of the permanent<br/> address of the new person.{:/} | STRING |  |  |  | 
| street_address_2 | .112 | Street Address 2 | {::nomarkdown} This is the second line of the street address of the permanent<br/>address of the new person.{:/} | STRING |  |  |  | 
| street_address_3 | .113 | Street Address 3 | {::nomarkdown}This is the third line of the street address of the permanent<br/>address of the new person.{:/} | STRING |  |  |  | 
| city | .114 | City | {::nomarkdown}This is the city of the permanent address of<br/>the new person.{:/} | STRING |  |  |  | 
| state | .115 | State | {::nomarkdown}This is the state of the permanent address of<br/>the new person.{:/} | POINTER |  |  | State-5 | 
| zip_code | .116 | ZIP Code | {::nomarkdown}This is the postal ZIP code of the<br/>permanent address of the new person.{:/} | STRING |  |  |  | 
| temporary_address_1 | .1211 | Temporary Address 1 | {::nomarkdown}This is the first line of a temporary address<br/>for the new person.{:/} | STRING |  |  |  | 
| temporary_address_2 | .1212 | Temporary Address 2 | {::nomarkdown}This is the second line of a temporary address<br/>for the new person.{:/} | STRING |  |  |  | 
| temporary_address_3 | .1213 | Temporary Address 3 | {::nomarkdown}This is the third line of a temporary address<br/>for the new person.{:/} | STRING |  |  |  | 
| temporary_city | .1214 | Temporary City | {::nomarkdown}This is the city of the temporary location for the new person.{:/} | STRING |  |  |  | 
| temporary_state | .1215 | Temporary State | {::nomarkdown}This is the state of the temporary location for the new person.{:/} | POINTER |  |  | State-5 | 
| temporary_zip_code | .1216 | Temporary ZIP Code | {::nomarkdown}This is the postal ZIP code for the temporary location for the new person.{:/} | STRING |  |  |  | 
| start_date_of_temp_addres | .1217 | Start Date Of Temp Addres | {::nomarkdown}This is the beginning date for use of the temporary address for the<br/>new person.{:/} | DATE-TIME |  |  |  | 
| end_date_of_temp_address | .1218 | End Date Of Temp Address | {::nomarkdown}This is the ending date for use of the temporary address for the<br/>new person.{:/} | DATE-TIME |  |  |  | 
| phone_home | .131 | Phone (home) | {::nomarkdown}This is the telephone number for the new person.{:/} | STRING |  |  |  | 
| office_phone | .132 | Office Phone | {::nomarkdown}This is the business/office telephone for the new person.{:/} | STRING |  |  |  | 
| phone_number3 | .133 | Phone #3 | {::nomarkdown}This is an alternate telephone number where the new person might also<br/>be reached.{:/} | STRING |  |  |  | 
| phone_number4 | .134 | Phone #4 | {::nomarkdown}This is another alternate telephone number where the new person might<br/>also be reached.{:/} | STRING |  |  |  | 
| commercial_phone | .135 | Commercial Phone | {::nomarkdown}This is a commercial phone number used by IFCAP.{:/} | STRING |  |  |  | 
| fax_number | .136 | Fax Number | {::nomarkdown}This field holds a phone number for a FAX machine for this user.<br/>It needs to be a format that can be understood by a sending <br/>MODEM.{:/} | STRING |  |  |  | 
| voice_pager | .137 | Voice Pager | {::nomarkdown}This field holds a phone number for an ANALOG PAGER that this person<br/>carries with them.<br/>It needs to be a format that can be understood by a sending <br/>MODEM.{:/} | STRING |  |  |  | 
| digital_pager | .138 | Digital Pager | {::nomarkdown}This field holds a phone number for a DIGITAL PAGER that this person<br/>carries with them.<br/>It needs to be a format that can be understood by a sending <br/>MODEM.{:/} | STRING |  |  |  | 
| room | .141 | Room | {::nomarkdown}This is the room number assigned to the new person.{:/} | STRING |  |  |  | 
| email_address | .151 | Email Address | {::nomarkdown}This field contains the e-mail address to which an outside person or<br/>vendor can send correspondence.<br/> <br/>(i.e. firstname.lastname@domain.ext or <br/> lastname.firstname@domain.ext or<br/> lastname.firstname_i+@domain.ext as in<br/> smith.robert_b+@domain.ext for Robert B. Smith on Forum).<br/> <br/>(* Note: period replaces comma in lastname.firstname syntax, underscore<br/>replaces space, and plus sign replaces period following middle initial for<br/>VISTA MailMan addresses.)<br/> <br/>This address may appear on documents going to vendors.{:/} | STRING |  |  |  | 
| initial | 1 | Initial | {::nomarkdown}These are the initials of the user, which may be entered for naming<br/>users.{:/} | STRING |  | INDEXED |  | 
| access_code | 2 | Access Code | {::nomarkdown}This is a unique code to identify a user to the system.<br/>This code is hashed so that it can't be looked up to find out the code.<br/>The access code will appear as a string of numbers, but must be entered<br/>as a separate entry.  Users who have no access code will not receive<br/>mail.<br/>*** This field should never be edited directly - do not remove WRITE ACCESS!{:/} | STRING |  |  |  | 
| want_to_edit_access_code_y_n | 2.1 | Want To Edit Access Code (y/n) | {::nomarkdown}Entering a YES to this field calls the KERNEL routine<br/>for entering ACCESS codes. No data is stored for this field.{:/} | STRING |  |  |  | 
| file_manager_access_code | 3 | File Manager Access Code | {::nomarkdown}This is the string that is put in DUZ(0) for use by fileman<br/>to check file and field access.{:/} | STRING |  |  |  | 
| sex | 4 | Sex | {::nomarkdown}This is the gender for the new person.{:/} | ENUMERATION |  |  | {::nomarkdown}<dl><dt>M</dt><dd>MALE</dd><dt>F</dt><dd>FEMALE</dd></dl>{:/} | 
| dob | 5 | Dob | {::nomarkdown}This is the date of birth of the new person.{:/} | DATE-TIME |  |  |  | 
| disuser | 7 | Disuser | {::nomarkdown}This field, if set to YES (1), marks a user that is not allowed to<br/>log on to this system.  It will leave all Menus, Keys and other attributes<br/>exabled for the user.<br/>An example would be an external support person<br/>that you only want to be able to log on to your system when you are<br/>monitoring them.  Setting this field would prevent them from loging<br/>on to the system untill you cleared the field.{:/} | BOOLEAN |  |  | {::nomarkdown}<dl><dt>1</dt><dd>false</dd><dt>0</dt><dd>true</dd></dl>{:/} | 
| verify_code_never_expires | 7.2 | Verify Code Never Expires | {::nomarkdown}This field will control if the users VERIFY code will expire at the<br/>interval set by the Kernel System Parameter LIFETIME OF VERIFY CODE.<br/>This field should only be used for access to the VistA system from other<br/>systems making connection with the RPCBroker and have very controlled<br/>access.<br/>Only persons with the XUMGR key are allowed to set this flag.{:/} | BOOLEAN |  |  | {::nomarkdown}<dl><dt>1</dt><dd>false</dd><dt>0</dt><dd>true</dd></dl>{:/} | 
| title | 8 | Title | {::nomarkdown}This is the title for the new person.{:/} | POINTER |  |  | Title-3_1 | 
| ssn | 9 | Ssn | {::nomarkdown}This is the social security number of the new person.{:/} | STRING |  | INDEXED |  | 
| termination_date | 9.2 | Termination Date | {::nomarkdown}This is the date after which the computer will no longer recognize this<br/>user's ACCESS CODE.<br/>Once this date has passed, when the USER TERMINATE job runs it will clean<br/>out this users data based on flags in the NEW PERSON file.{:/} | DATE-TIME |  |  |  | 
| delete_all_mail_access | 9.21 | Delete All Mail Access | {::nomarkdown}This gives you the ability to purge all of a user's mail related<br/>information. This includes Mail messages, Mail Boxes, Mail Groups,<br/>Surrogate privlages when that user is terminated.<br/>This is recomended.{:/} | BOOLEAN |  |  | {::nomarkdown}<dl><dt>n</dt><dd>false</dd><dt>y</dt><dd>true</dd></dl>{:/} | 
| delete_keys_at_termination | 9.22 | Delete Keys At Termination | {::nomarkdown}This gives you the ability to delete all of a user's security<br/>keys, and delagated keys when the user is terminated.<br/>This is recomended.{:/} | BOOLEAN |  |  | {::nomarkdown}<dl><dt>n</dt><dd>false</dd><dt>y</dt><dd>true</dd></dl>{:/} | 
| terminal_type_last_used | 9.3 | Terminal Type Last Used | {::nomarkdown}This field holds a pointer to the last terminal type the user selected<br/>at sign-on or in edit user char.{:/} | POINTER |  |  | Terminal_Type-3_2 | 
| termination_reason | 9.4 | Termination Reason | {::nomarkdown}This field holds a short description of why the user has been terminated<br/>or has DISUSER flag set.{:/} | STRING |  |  |  | 
| user_class | 9.5 | User Class |  | [OBJECT] |  |  | [User_Class-200_07](#User_Class-200_07)  | 
| alias | 10 | Alias | {::nomarkdown}Other names used by this new person.{:/} | [STRING] |  |  |  | 
| name_components | 10.1 | Name Components | {::nomarkdown}Answer with the entry in the NAME COMPONENTS file that contains the<br/>components of the person's name.{:/} | POINTER |  | REQUIRED | Name_Components-20 | 
| degree | 10.6 | Degree | {::nomarkdown}This field holds any academic or professional degree that have been earned<br/>by the user. This would be things like BS, BA, MD, and PHD.{:/} | STRING |  |  |  | 
| verify_code | 11 | Verify Code | {::nomarkdown}This is the code that is used to verify that the ACCESS CODE was not<br/>found by accident.<br/>It may be entered at logon time immediately after the ACCESS CODE<br/>by typing a semicolon, then the VERIFY CODE.<br/><br/>Verify codes may be changed by the user with the CHANGE USER CHARACTERISTICS<br/>option.  The kernel site parameter field LIFETIME OF VERIFY CODE forces<br/>the user to periodically enter a new verify code.{:/} | STRING |  |  |  | 
| want_to_edit_verify_code_y_n | 11.1 | Want To Edit Verify Code (y/n) | {::nomarkdown}Entering a YES to this field calls the KERNEL routine<br/>for entering VERIFY codes. No data is stored for this field.{:/} | STRING |  |  |  | 
| date_verify_code_last_changed | 11.2 | Date Verify Code Last Changed | {::nomarkdown}This field is triggered by a change in the VERIFY CODE.  It is used<br/>to determine when the USER must be notified to change their code.{:/} | STRING |  |  |  | 
| allow_ara_access | 11.6 | Allow Ara Access | {::nomarkdown}This field is for a control that is under development.{:/} | BOOLEAN |  |  | {::nomarkdown}<dl><dt>1</dt><dd>false</dd><dt>0</dt><dd>true</dd></dl>{:/} | 
| ara_value | 11.7 | Ara Value | {::nomarkdown}This value is used to identify the user in non interactive connections.{:/} | STRING |  | INDEXED |  | 
| current_degree_level | 12.1 | Current Degree Level | {::nomarkdown}This is the current degree level upon entry into the current training<br/>program/residency at this VA medical facility.{:/} | POINTER |  |  | Hl7_Degree-771_9 | 
| program_of_study | 12.2 | Program Of Study | {::nomarkdown}This is the discipline that best describes the trainee's current<br/>program of study at this VA medical facility.{:/} | POINTER |  |  | Program_Of_Study-8932_2 | 
| last_training_month__year | 12.3 | Last Training Month & Year | {::nomarkdown}This is the MONTH and LAST year the trainee anticipates being in a<br/>training program at this VA medical facility.{:/} | STRING |  |  |  | 
| vha_training_facility | 12.4 | Vha Training Facility |  | POINTER |  |  | [Institution-4](Institution-4.md) | 
| date_hl7_trainee_record_built | 12.5 | Date Hl7 Trainee Record Built | {::nomarkdown}This is the date that the trainee information was built and sent to the<br/>OAA server.{:/} | DATE-TIME |  | INDEXED |  | 
| clinical_core_trainee | 12.6 | Clinical Core Trainee | {::nomarkdown}This field designates whether or not the person is an active Trainee.{:/} | BOOLEAN |  |  | {::nomarkdown}<dl><dt>N</dt><dd>false</dd><dt>Y</dt><dd>true</dd></dl>{:/} | 
| date_no_longer_trainee | 12.7 | Date No Longer Trainee | {::nomarkdown}This is the date when a Registered Trainee is no longer to be considered<br/>an trainee.  This may be at the end of a rotation period or at the end VA<br/>training experience.{:/} | DATE-TIME |  |  |  | 
| start_of_training | 12.8 | Start Of Training |  | DATE-TIME |  |  |  | 
| nick_name | 13 | Nick Name | {::nomarkdown}This is a string that is used in the sign-on greeting and<br/>for mailman user lookup.{:/} | STRING |  |  |  | 
| pac | 14 | Pac | {::nomarkdown}This is a code to be checked before a user is allowed to get into<br/>programmer mode.{:/} | STRING |  |  |  | 
| hinq_employee_number | 14.9 | Hinq Employee Number | {::nomarkdown}The employee number associated with HINQ passwords from the DVB should<br/>be entered here.{:/} | STRING |  | INDEXED |  | 
| prohibited_times_for_signon | 15 | Prohibited Times For Sign-on | {::nomarkdown}This is a pair of times within which the user will not be allowed<br/>access to the computer.<br/>They should be entered in Military format, for example 0900-1300 would<br/>prohibit signons from 9AM to 1PM each day.{:/} | STRING |  |  |  | 
| division | 16 | Division | {::nomarkdown}This is the one or more divisions that this user may sign-on and do<br/>work for.{:/} | [OBJECT] |  |  | [Division-200_02](#Division-200_02)  | 
| delegate_of | 19 | Delegate Of | {::nomarkdown}This field holds the name of the person who has delegated menu manager<br/>authority to the user.  The user is thus the 'delegate of' the person<br/>named here.{:/} | POINTER |  |  | [New_Person-200](New_Person-200.md) | 
| delegation_date | 19.1 | Delegation Date | {::nomarkdown}This field records the data that the user became a delegate.{:/} | DATE-TIME |  |  |  | 
| delegation_level | 19.2 | Delegation Level | {::nomarkdown}This field records the level of delegation authority with respect to<br/>the systems manager, level zero.  When the systems manager delegates<br/>authority to someone else, that person will be at level one.  Levels<br/>are maintained so that lower level delegates cannot interfere with<br/>the menus of higher level delegates.{:/} | NUMERIC |  |  |  | 
| alert_date_time | 19.4 | Alert Date/time | {::nomarkdown}This is a multiple field which is used to generate alerts to the users.<br/>The data for alerts is filed by date and time.{:/} | [OBJECT] |  |  | [Alert_Date_Time-200_194](#Alert_Date_Time-200_194)  | 
| delegated_options | 19.5 | Delegated Options | {::nomarkdown}This is a sub-file of pointers to the Option File which detail those<br/>options this user may delegate to others.{:/} | [OBJECT] |  |  | [Delegated_Options-200_19](#Delegated_Options-200_19)  | 
| allowable_new_menu_prefix | 19.6 | Allowable New Menu Prefix | {::nomarkdown}This subfile holds the set of namespaces available to this user in<br/>the creation of menus with delegated options.<br/>{:/} | [STRING] |  |  |  | 
| menu_template | 19.8 | Menu Template | {::nomarkdown}This multiple holds sets of predefined menus which can be envoked by<br/>the user by entering a right-square-bracket (\[\) followed by a<br/>template's name.{:/} | [OBJECT] |  |  | [Menu_Template-200_198](#Menu_Template-200_198)  | 
| uci | 20 | Uci | {::nomarkdown}This is the set of UCI's that this user must choose from at sign-on<br/>time.{:/} | [OBJECT] |  |  | [Uci-200_01](#Uci-200_01)  | 
| date_esig_last_changed | 20.1 | Date E-sig Last Changed | {::nomarkdown}A $H date of the last time the E-Sig code was changed. Triggered by a<br/>X-ref on the ELECTRONIC SIGNATURE CODE field.{:/} | STRING |  |  |  | 
| signature_block_printed_name | 20.2 | Signature Block Printed Name | {::nomarkdown}The name entered must contain the surname of the user.<br/>The name must be 2 to 40 characters in length.<br/> <br/>This field can then contain the name of the user as they wish it to<br/>be displayed with the notation that they signed the document electronically.<br/>For example:  John R. Doe, M.D.   or    Fred A. Sample, RN.{:/} | STRING |  |  |  | 
| signature_block_title | 20.3 | Signature Block Title | {::nomarkdown}This field should contain the title of the person who is electronically<br/>signing a document.  Examples of titles are Chief of Surgery, Dietician,<br/>Clinical Pharmacist, etc.  This title will print next to the name of the<br/>person who signs the document.  The person's name will be taken from the<br/>SIGNATURE BLOCK PRINTED NAME field.<br/> <br/>The title must be 2 to 50 characters in length.{:/} | STRING |  |  |  | 
| electronic_signature_code | 20.4 | Electronic Signature Code | {::nomarkdown}This field contains the encrypted code which the user types when<br/>signing documents electronically.  The user's input will be compared to<br/>this field when validating his electronic signature.<br/>All electronic signature codes should be treated as confidential.{:/} | STRING |  |  |  | 
| mail_code | 28 | Mail Code | {::nomarkdown}This is the mail code for the new person.{:/} | STRING |  |  |  | 
| service_section | 29 | Service/section | {::nomarkdown}This is the name of the service or section for the new person.{:/} | POINTER |  | REQUIRED, INDEXED | Service_section-49 | 
| date_entered | 30 | Date Entered | {::nomarkdown}This is the date on which the user was entered into the user file.<br/>It is automatically inserted into the file by the ADD USER option.{:/} | DATE-TIME |  |  |  | 
| creator | 31 | Creator | {::nomarkdown}This is the name of the user who entered this user into the user file.<br/>It is automatically set by the ADD USER option.{:/} | POINTER |  |  | [New_Person-200](New_Person-200.md) | 
| file_range | 31.1 | File Range | {::nomarkdown}This field limits a user to a specific range of file numbers.  When<br/>creating new files, only a number within this range can be assigned<br/>to the new file.{:/} | STRING |  |  |  | 
| text_terminator | 31.2 | Text Terminator | {::nomarkdown}If specified, the character string in this field will be used instead<br/>of a carriage return to mark the end of word-processing text.  It will<br/>be used in all VA FileMan word-processing contexts, e.g. in mail<br/>messages.  It can facilitate the uploading of files from a PC<br/>environment.<br/> <br/>Note that the VA FileMan edit menu provides an option for temporarily<br/>specifying a text terminator for that edit session only.{:/} | STRING |  |  |  | 
| preferred_editor | 31.3 | Preferred Editor | {::nomarkdown}If an entry exists in this field, then whenever a user edits data in a<br/>FileMan word-processing field, they will automatically be transferred into<br/>their preferred editor.  If this field is blank, then the default editor<br/>will be either the FileMan screen editor when editing within ScreenMan<br/>format, or the standard FileMan line editor in all other cases.{:/} | POINTER |  |  | Alternate_Editor-1_2 | 
| accessible_file | 32 | Accessible File | {::nomarkdown}This multiple-valued field contains the list of files the user may access.<br/>The type of access granted to the user is included for each file that<br/>appears on the list.  The user may be allowed to look at records (READ<br/>access), edit existing records (WRITE access), add new record (LAYGO<br/>access), delete records (DELETE access), or modify the file structure<br/>(DATA DICTIONARY ACCESS).{:/} | [OBJECT] |  |  | [Accessible_File-200_032](#Accessible_File-200_032)  | 
| allowed_to_use_spooler | 41 | Allowed To Use Spooler | {::nomarkdown}If set to 'YES', this user will be able to use the spool device to<br/>create spool documents.{:/} | BOOLEAN |  |  | {::nomarkdown}<dl><dt>n</dt><dd>false</dd><dt>y</dt><dd>true</dd></dl>{:/} | 
| multidevice_despooling | 41.1 | Multi-device Despooling | {::nomarkdown}If set to 'YES', the user will be able to print (despool) a spooled<br/>document to more than one device simultaneously.{:/} | BOOLEAN |  |  | {::nomarkdown}<dl><dt>n</dt><dd>false</dd><dt>y</dt><dd>true</dd></dl>{:/} | 
| can_make_into_a_mail_message | 41.2 | Can Make Into A Mail Message | {::nomarkdown}If set to 'YES', the document is given the status of a mail message and<br/>the user will be able to use all MailMan functions such as copying and<br/>forwarding.  As a mail message, the document can no longer be manipulated<br/>with the spooler since its flag in the Spool Document File has been<br/>deleted.{:/} | BOOLEAN |  |  | {::nomarkdown}<dl><dt>n</dt><dd>false</dd><dt>y</dt><dd>true</dd></dl>{:/} | 
| authorize_release_of_npi | 41.97 | Authorize Release Of Npi | {::nomarkdown}Answer 1 (Yes) if this disclosure of an individual practitioner's NPI is <br/>to a non-VA health care provider or its agent to support, or in <br/>anticipation of supporting, the submission of health care reimbursement <br/>claims by non-VA health care providers or their agents (ex., display of <br/>FEE Basis authorizations). Per Routine Use Amendment #18 to the Privacy <br/>Act of 1974 this disclosure can be made without requiring consent <br/>(Blanket Authority) from the practitioner.{:/} | BOOLEAN |  |  | {::nomarkdown}<dl><dt>1</dt><dd>true</dd></dl>{:/} | 
| npi_entry_status | 41.98 | Npi Entry Status | {::nomarkdown}This field is used in tracking the entry status of NPI d ata for those<br/>providers who require an NPI.  The providers needing this value are<br/>identified based on data entered in the PERSON CLASS subfile which<br/>indicates providers that may be related to billing activities.<br/> <br/>The value is initially set to N or NEEDS ENTRY.  It can be changed to E or<br/>EXEMPT for individuals who have been identified, but who due to<br/>administrative activities, etc., will not be involved in activities<br/>requiring billing.  When the NPI value is entered, the value is changed to<br/>D or DONE.{:/} | ENUMERATION |  |  | {::nomarkdown}<dl><dt>N</dt><dd>NEEDS ENTRY</dd><dt>D</dt><dd>DONE</dd><dt>E</dt><dd>EXEMPT</dd></dl>{:/} | 
| npi | 41.99 | Npi | {::nomarkdown}Each VHA Billable Practitioner should have applied for the NPI through<br/>CMS' National Plan and Provider Enumeration System (NPPES).  NPI<br/>Confirmation Letters are sent by CMS and indicate the NPI assigned.<br/>Practitioners may present their NPI Confirmation Letter as a source<br/>document to verify the accuracy of the NPI or you may contact your Local<br/>NPI Maintenance Team Leader for assistance.{:/} | STRING |  | INDEXED |  | 
| effective_date_time | 42 | Effective Date/time |  | [OBJECT] |  |  | [Effective_Date_time-200_042](#Effective_Date_time-200_042)  | 
| key_delegation_level | 50.1 | Key Delegation Level | {::nomarkdown}This a simple, numeric value which prevents removing delegated keys<br/>from someone with a lower level number.{:/} | NUMERIC |  |  |  | 
| keys | 51 | Keys | {::nomarkdown}These are \keys\ that define the characteristic(s), authorization(s), or<br/>privilege(s) of the person.{:/} | [OBJECT] |  |  | [Keys-200_051](#Keys-200_051)  | 
| delegated_keys | 52 | Delegated Keys | {::nomarkdown}This subfile contains pointers to the Key File of those keys that<br/>this person is allowed to allocate to other users.{:/} | [OBJECT] |  |  | [Delegated_Keys-200_052](#Delegated_Keys-200_052)  | 
| authorized_to_write_med_orders | 53.1 | Authorized To Write Med Orders | {::nomarkdown}This field is used to determin if the provider is authorized to write orders.{:/} | BOOLEAN |  |  | {::nomarkdown}<dl><dt>1</dt><dd>true</dd></dl>{:/} | 
| detox_maintenance_id_number | 53.11 | Detox/maintenance Id Number | {::nomarkdown}This field holds the Detoxification/Maintenance ID number used for the <br/>substance abuse providers that is \DATA-waived\. (one X, one alpha, <br/>7 numbers)<br/><br/><br/>{:/} | STRING |  |  |  | 
| deanumber | 53.2 | Dea# | {::nomarkdown}This field is used to enter the Drug Enforcement Agency (DEA) number.<br/>Enter the DEA number as two upper case letters followed by 7 digits.<br/>e.g., AA1234567.  Each provider must have a unique number.<br/>{:/} | STRING |  | INDEXED |  | 
| vanumber | 53.3 | Va# | {::nomarkdown}This field is used to enter the VA number.<br/>The VA number must be unique.{:/} | STRING |  | INDEXED |  | 
| inactive_date | 53.4 | Inactive Date | {::nomarkdown}This field is used to show the inactive date of a provider whereas they<br/>can no longer write orders.{:/} | DATE-TIME |  |  |  | 
| provider_class | 53.5 | Provider Class | {::nomarkdown}This field is used to show the providers class.{:/} | POINTER |  |  | Provider_Class-7 | 
| provider_type | 53.6 | Provider Type | {::nomarkdown}This field is used to show the type of provider (staff, fee, etc.){:/} | ENUMERATION |  |  | {::nomarkdown}<dl><dt>4</dt><dd>FEE BASIS</dd><dt>3</dt><dd>C & A</dd><dt>1</dt><dd>FULL TIME</dd><dt>2</dt><dd>PART TIME</dd><dt>5</dt><dd>HOUSE STAFF</dd></dl>{:/} | 
| requires_cosigner | 53.7 | Requires Cosigner | {::nomarkdown}This field is used to determine if the provider needs a cosigner.{:/} | BOOLEAN |  |  | {::nomarkdown}<dl><dt>1</dt><dd>true</dd></dl>{:/} | 
| usual_cosigner | 53.8 | Usual Cosigner | {::nomarkdown}This field is used to show the usual cosigner for the provider.{:/} | POINTER |  |  | [New_Person-200](New_Person-200.md) | 
| remarks | 53.9 | Remarks | {::nomarkdown}This field is used to enter remarks and or comments about the provider.{:/} | STRING |  |  |  | 
| nonva_prescriber | 53.91 | Non-va Prescriber | {::nomarkdown}The Transitional Pharmacy Care Project (TPB) introduces fields 53.91 - <br/>53.96, to allow a NON-VA Physician to be added to the New Person file<br/>(#200), so that Outpatient Pharmacy could process medication prescribed by<br/>such physicians.<br/> <br/>A value of 1 indicates that this person is a NON-VA Physician.{:/} | BOOLEAN |  |  | {::nomarkdown}<dl><dt>0</dt><dd>false</dd><dt>1</dt><dd>true</dd></dl>{:/} | 
| tax_id | 53.92 | Tax Id | {::nomarkdown}TAX ID of the NON-VA Physician's Private Clinic, where the prescription<br/>was written.{:/} | STRING |  |  |  | 
| exclusionary_check_performed | 53.93 | Exclusionary Check Performed | {::nomarkdown}Department of Health and Human Services provides an exclusionary list of<br/>Medical Practitioners (providers excluded are those who are not allowed to<br/>receive payment for government services due to various reasons). When<br/>adding NON-VA Physicians, they must be checked against this list.<br/> <br/>A value of 1 indicates that an Exclusionary Check was performed for this<br/>physician.{:/} | BOOLEAN |  |  | {::nomarkdown}<dl><dt>1</dt><dd>true</dd></dl>{:/} | 
| date_exclusionary_list_checked | 53.94 | Date Exclusionary List Checked | {::nomarkdown}The date Exclusionary Check was performed.{:/} | DATE-TIME |  |  |  | 
| on_exclusionary_list | 53.95 | On Exclusionary List | {::nomarkdown}Was the NON-VA Physician on the Exclusionary Check List?<br/>A value of 1 indicates that the Physician was on the Exclusionary Check.{:/} | BOOLEAN |  |  | {::nomarkdown}<dl><dt>0</dt><dd>false</dd><dt>1</dt><dd>true</dd></dl>{:/} | 
| exclusionary_checked_by | 53.96 | Exclusionary Checked By | {::nomarkdown}User ID of the person who made the entry.{:/} | POINTER |  |  | [New_Person-200](New_Person-200.md) | 
| licensing_state | 54.1 | Licensing State | {::nomarkdown}This multiple contains credentialing information about a provider<br/>that is used by the state.{:/} | [OBJECT] |  |  | [Licensing_State-200_541](#Licensing_State-200_541)  | 
| state_issuing_dea_number | 54.2 | State Issuing Dea Number | {::nomarkdown}This mutiple contains the DEA# issued by a state in order to allow<br/>providers to write medication orders for controlled medications.{:/} | [OBJECT] |  |  | [State_Issuing_Dea_Number-200_55](#State_Issuing_Dea_Number-200_55)  | 
| schedule_ii_narcotic | 55.1 | Schedule Ii Narcotic | {::nomarkdown}This field is used to determine if the provider has privileges for <br/>Schedule II narcotic.{:/} | BOOLEAN |  |  | {::nomarkdown}<dl><dt>0</dt><dd>false</dd><dt>1</dt><dd>true</dd></dl>{:/} | 
| schedule_ii_nonnarcotic | 55.2 | Schedule Ii Non-narcotic | {::nomarkdown}This field is used to determine if the provider has privileges for <br/>Schedule II non-narcotic.{:/} | BOOLEAN |  |  | {::nomarkdown}<dl><dt>0</dt><dd>false</dd><dt>1</dt><dd>true</dd></dl>{:/} | 
| schedule_iii_narcotic | 55.3 | Schedule Iii Narcotic | {::nomarkdown}This field is used to determine if the provider has privileges for <br/>Schedule III narcotic.{:/} | BOOLEAN |  |  | {::nomarkdown}<dl><dt>0</dt><dd>false</dd><dt>1</dt><dd>true</dd></dl>{:/} | 
| schedule_iii_nonnarcotic | 55.4 | Schedule Iii Non-narcotic | {::nomarkdown}This field is used to determine if the provider has privileges for <br/>Schedule III non-narcotic.{:/} | BOOLEAN |  |  | {::nomarkdown}<dl><dt>0</dt><dd>false</dd><dt>1</dt><dd>true</dd></dl>{:/} | 
| schedule_iv | 55.5 | Schedule Iv | {::nomarkdown}This field is used to determine if the provider has privileges for <br/>Schedule IV controlled substances.{:/} | BOOLEAN |  |  | {::nomarkdown}<dl><dt>0</dt><dd>false</dd><dt>1</dt><dd>true</dd></dl>{:/} | 
| schedule_v | 55.6 | Schedule V | {::nomarkdown}This field is used to determine if the provider has privileges for <br/>Schedule V controlled substances.{:/} | BOOLEAN |  |  | {::nomarkdown}<dl><dt>0</dt><dd>false</dd><dt>1</dt><dd>true</dd></dl>{:/} | 
| staff_review_required | 70 | Staff Review Required | {::nomarkdown}This field applies to 'Interpreting Resident' personnel. If<br/>it contains a 'yes', an interpreting staff is required to<br/>review this resident's report results.{:/} | BOOLEAN |  |  | {::nomarkdown}<dl><dt>N</dt><dd>false</dd><dt>Y</dt><dd>true</dd></dl>{:/} | 
| allow_verifying_of_others | 71 | Allow Verifying Of Others | {::nomarkdown}If this field is set to 'YES' and the 'ALLOW VERIFYING BY RESIDENTS'<br/>division parameter is also set to 'YES' then this resident is allowed to<br/>verify reports associated with another interpreting physician.  (If both<br/>parameters are set to 'YES' the 'On-line Verifying of Reports' option will<br/>prompt the user to 'Select Interpreting Physician: ' allowing the user to<br/>select an interpreting physician other than him/herself.) If this field is<br/>set to 'NO' then this resident is only allowed to verify his/her own<br/>reports.  If the division parameter 'ALLOW VERIFYING BY RESIDENT' is set<br/>to 'NO' then regardless of how this field is set, the resident will not be<br/>allowed to verify other interpreting physicians' reports.<br/> <br/>If the user is classified as Interpreting Staff, s/he will be allowed to<br/>select another interpreting physician's name and reports if this field is<br/>set to 'YES'.{:/} | BOOLEAN |  |  | {::nomarkdown}<dl><dt>n</dt><dd>false</dd><dt>y</dt><dd>true</dd></dl>{:/} | 
| rad_nuc_med_classification | 72 | Rad/nuc Med Classification | {::nomarkdown}This multiple field contains information about the classification assigned<br/>to Rad/Nuc Med personnel.  Possible classifications are Technologist,<br/>Interpreting Resident, Interpreting Staff, and Clerk.{:/} | [ENUMERATION] |  |  | {resident:R,clerk:C,technologist:T,staff:S} | 
| rad_nuc_med_inactive_date | 73 | Rad/nuc Med Inactive Date | {::nomarkdown}This field contains the date that this person was inactivated as a Rad/Nuc<br/>Med user.{:/} | DATE-TIME |  |  |  | 
| rad_nuc_med_location_access | 74 | Rad/nuc Med Location Access | {::nomarkdown}This field will allow the user to access all data specific to a particular<br/>Radiology/Nuclear Medicine location.{:/} | [POINTER] |  |  | {id:Imaging_Locations-79_1} | 
| restrict_patient_selection | 101.01 | Restrict Patient Selection | {::nomarkdown}Answer 'YES' to restrict this user to selecting only those patients<br/>associated with the list pointed to by the PATIENT SELECTION LIST field<br/>(#101.02).{:/} | BOOLEAN |  |  | {::nomarkdown}<dl><dt>1</dt><dd>false</dd><dt>0</dt><dd>true</dd></dl>{:/} | 
| patient_selection_list | 101.02 | Patient Selection List | {::nomarkdown}If a value is entered into this field, the user is allowed to select only<br/>those patients associated with this OE/RR LIST.{:/} | POINTER |  |  | Oe_rr_List-100_21 | 
| cprs_tab | 101.13 | Cprs Tab |  | [OBJECT] |  |  | [Cprs_Tab-200_010113](#Cprs_Tab-200_010113)  | 
| problem_list_primary_view | 125 | Problem List Primary View | {::nomarkdown}This string contains the user's preferred view of the problem list.<br/>Problems are assigned a category based upon the service of the provider<br/>who entered and/or is treating the problem; a screen may then be invoked<br/>allowing a filtered view of the problem list.{:/} | STRING |  |  |  | 
| problem_selection_list | 125.1 | Problem Selection List | {::nomarkdown}This is the user's preferred default list of problems to select from<br/>when adding to a patient's problem list.  If there is a list specified<br/>here from the Problem Selection List File (#125), it will be automatically<br/>presented to the user when the \Add New Problem(s)\ action is selected;<br/>otherwise, the user will simply be prompted to select a problem from<br/>the Clinical Lexicon Utility.{:/} | POINTER |  |  | Problem_Selection_List-125 | 
| multiple_signon | 200.04 | Multiple Sign-on | {::nomarkdown}This field, if filled in, overrides the SITE and DEVICE Files as to<br/>whether this user can sign-on to multiple terminals at the same time, <br/>or is limited to one workstation (IP), only one connection.<br/>If you select \Only one IP\ be sure to put a value into the \MULTIPLE<br/>SIGN-ON LIMIT\ field so users can sign-on at least once.<br/>Values are:<br/>0 = Only one connection.<br/>1 = Multiple connections from multiple IP's.<br/>2 = Only one IP address.{:/} | ENUMERATION |  |  | {::nomarkdown}<dl><dt>2</dt><dd>Only one IP</dd><dt>0</dt><dd>NOT ALLOWED</dd><dt>1</dt><dd>ALLOWED</dd></dl>{:/} | 
| ask_device_type_at_signon | 200.05 | Ask Device Type At Sign-on | {::nomarkdown}This field controls if the user/terminal should be asked for a terminal<br/>type during sign-on. If set to YES then the system will try and get the<br/>terminal type from the terminal. If this doesn't work, then user is<br/>prompted. If set to NO then the one from the users Last Sign-on field or<br/>the device subtype will be used.{:/} | ENUMERATION |  |  | {::nomarkdown}<dl><dt>1</dt><dd>ASK</dd><dt>0</dt><dd>DON'T ASK</dd></dl>{:/} | 
| auto_menu | 200.06 | Auto Menu | {::nomarkdown}This field controls whether the user will see menus automatically<br/>displayed (as if he had typed a \?\) each time a new option is presented.{:/} | ENUMERATION |  |  | {::nomarkdown}<dl><dt>0</dt><dd>NO MENUS GENERATED</dd><dt>1</dt><dd>YES, MENUS GENERATED</dd></dl>{:/} | 
| language | 200.07 | Language | {::nomarkdown}The value in this field replaces the Default Language field in the<br/>Kernel Site Parameters file.  It points to the Language file<br/>for the VA FileMan Dialog file.{:/} | POINTER |  |  | Language-_85 | 
| reserved | 200.08 | Reserved | {::nomarkdown}Place holder, see file 3.5 #51.8{:/} | STRING |  |  |  | 
| typeahead | 200.09 | Type-ahead | {::nomarkdown}If type ahead is selected, the user will be able to type text ahead<br/>of what the computer is actually reading.  The computer stores the<br/>keystrokes from the user, which may be confusing if the computer is slow<br/>but more efficient if the user is careful.{:/} | ENUMERATION |  |  | {::nomarkdown}<dl><dt>N</dt><dd>NOT ALLOWED</dd><dt>Y</dt><dd>ALLOWED</dd></dl>{:/} | 
| timed_read_number_of_seconds | 200.1 | Timed Read (# Of Seconds) | {::nomarkdown}This field, if filled in, overrides the SITE and DEVICE files as to<br/>the time this user has to respond to a timed read.  Stored in DTIME.{:/} | NUMERIC |  |  |  | 
| always_show_secondaries | 200.11 | Always Show Secondaries | {::nomarkdown}This field is a flag used by the menu system to control if<br/>the user is shown there secondary menu list with one '?' or two.{:/} | BOOLEAN |  |  | {::nomarkdown}<dl><dt>1</dt><dd>true</dd></dl>{:/} | 
| auto_signon | 200.18 | Auto Sign-on | {::nomarkdown}This field will control if the Auto Sign-on (Single Sign-on) is enabled<br/>for use with terminal sessions.{:/} | BOOLEAN |  |  | {::nomarkdown}<dl><dt>1</dt><dd>false</dd><dt>0</dt><dd>true</dd></dl>{:/} | 
| multiple_signon_limit | 200.19 | Multiple Sign-on Limit | {::nomarkdown}This field, if filled in, overrides the SITE file. This field sets an<br/>upper limit on the number of concurrent sessions that this user can have<br/>from one IP address when the Multiple Sign-on field (#204) is set to \One<br/>IP\{:/} | NUMERIC |  |  |  | 
| primary_menu_option | 201 | Primary Menu Option | {::nomarkdown}This is the menu option that this user will be dropped into<br/>if none of the following are set: (in the order checked)<br/>Tied routine, Device primary menu.{:/} | POINTER |  | INDEXED | Option-19 | 
| primary_window | 201.1 | Primary Window | {::nomarkdown}This is the lead or first window launched at startup.{:/} | POINTER |  |  | Option-19 | 
| startup_default | 201.2 | Startup Default | {::nomarkdown}This field determines if the Primary Menu or the Primary Window is<br/>loaded at logon.{:/} | ENUMERATION |  |  | {::nomarkdown}<dl><dt>W</dt><dd>Primary Window</dd><dt>M</dt><dd>Primary Menu Option</dd></dl>{:/} | 
| last_signon_date_time | 202 | Last Sign-on Date/time | {::nomarkdown}This field is set when a user signs on to the system.{:/} | DATE-TIME |  |  |  | 
| xus_logon_attempt_count | 202.02 | Xus Logon Attempt Count | {::nomarkdown}This is used to let the user know about unsuccessful logon atempts.{:/} | NUMERIC |  |  |  | 
| xus_active_user | 202.03 | Xus Active User | {::nomarkdown}If a user gets the ** MULTIPULE SIGN-ON NOT ALLOWED ** message<br/>this field can be set to NO to allow them to sign-on again.<br/>This flag is set by XUS and XUSCLEAN.{:/} | BOOLEAN |  |  | {::nomarkdown}<dl><dt>1</dt><dd>false</dd><dt>0</dt><dd>true</dd></dl>{:/} | 
| entry_last_edit_date | 202.04 | Entry Last Edit Date | {::nomarkdown}This field holds the date time this entry in the file was last edited.<br/>The following fields now trigger the current date to the ENTRY LAST EDIT<br/>DATE field: DISUSER (#7), ACCESS CODE (#2), and TERMINATION DATE (#9.2). {:/} | DATE-TIME |  |  |  | 
| lockout_user_until | 202.05 | Lockout User Until | {::nomarkdown}This field is used by the signon code to lockout users that have<br/>tried bad VERIFY codes too many times.  This field holds the date/time <br/>that the user should be locked out of the system until.<br/>It is set with the current time plus the lockout time.{:/} | DATE-TIME |  |  |  | 
| last_option_accessed | 202.1 | Last Option Accessed | {::nomarkdown}This field holds the last option accessed by the user, when the user<br/>selects the CONTINUE option instead of HALTing.  When the user logs<br/>on again, he will be able to continue directly at that option.{:/} | POINTER |  |  | Option-19 | 
| last_option_main_menu | 202.2 | Last Option Main Menu | {::nomarkdown}This field holds an indicator of which primary or secondary menu a<br/>user was in, after selecting the CONTINUE option.  It is used in con-<br/>junction with the LAST OPTION ACCESSED to resume when a user logs back<br/>on.{:/} | STRING |  |  |  | 
| secondary_menu_options | 203 | Secondary Menu Options | {::nomarkdown}Options awarded a user not on his or her primary menu option{:/} | [OBJECT] |  |  | [Secondary_Menu_Options-200_03](#Secondary_Menu_Options-200_03)  | 
| timestamp | 203.1 | Timestamp | {::nomarkdown}This is the time at which this option was last modified.  It is triggered<br/>automatically by the appropriate fields.  If a CPU references an option<br/>which has been modified since it was last rebuilt, it triggers a rebuilding<br/>of the options.{:/} | STRING |  |  |  | 
| secid | 205.1 | Secid | {::nomarkdown}Identity and Access Management SECID field used to uniquely identify a <br/>VistA user by Security ID.<br/> <br/>*** This field should never be edited directly - do not remove WRITE <br/>ACCESS!{:/} | STRING |  | INDEXED |  | 
| subject_organization | 205.2 | Subject Organization | {::nomarkdown}Identity and Access Management SUBJECT ORGANIZATION field used to <br/>identify the Organization of an externally authenticated user (Subject). <br/>Examples: \Department of Veterans Affairs\ or \Department of Defense\<br/> <br/>*** This field should never be edited directly - do not remove WRITE <br/>ACCESS!{:/} | STRING |  |  |  | 
| subject_organization_id | 205.3 | Subject Organization Id | {::nomarkdown}Identity and Access Management SUBJECT ORGANIZATION ID field used to <br/>uniquely identify the Organization that is providing the identification <br/>for an externally authenticated user (Subject). The organization ID <br/>may be an Object Identifier (OID), using the urn format (that is, <br/>\urn:oid:\ appended with the OID); or it may be a URL assigned to <br/>that organization. For SSOi this will be hard-coded to Department of <br/>Veterans Affairs official Home Community ID. NHIN standards specify that<br/>the web address of the Subject Organization is typically stored in this<br/>field (example: http://familymedicalclinic.org).<br/> <br/>*** This field should never be edited directly - do not remove WRITE <br/>ACCESS!{:/} | STRING |  |  |  | 
| unique_user_id | 205.4 | Unique User Id | {::nomarkdown}Identity and Access Management UNIQUE USER ID field used to uniquely <br/>identify a user (Subject) within the Subject Organization. The combination<br/>of Subject Organization ID (OID) and Unique User ID (UID) is<br/>cross-referenced in VistA and must be unique. For VA SSOi, this will be <br/>the user SecID. Within NHIN this could be the subject of the NHIN SAML <br/>token which would contain email address of a X.509 name.<br/> <br/>*** This field should never be edited directly - do not remove WRITE <br/>ACCESS!{:/} | STRING |  |  |  | 
| adupn | 205.5 | Adupn | {::nomarkdown}Identity and Access Management Active Directory User Principle Name (AD <br/>UPN) field.{:/} | STRING |  | INDEXED |  | 
| personal_diagnoses_list | 351 | Personal Diagnoses List | {::nomarkdown}This is the provider's personal list of preferred diagnoses codes.{:/} | [OBJECT] |  |  | [Personal_Diagnoses_List-200_0351](#Personal_Diagnoses_List-200_0351)  | 
| supply_employee | 400 | Supply Employee |  | ENUMERATION |  |  | {::nomarkdown}<dl><dt>1</dt><dd>WAREHOUSE</dd><dt>2</dt><dd>PPM ACCOUNTABLE OFFICER</dd><dt>4</dt><dd>MANAGER</dd><dt>3</dt><dd>PURCHASING AGENT</dd></dl>{:/} | 
| paid_employee | 450 | Paid Employee | {::nomarkdown}This field is a pointer to the PAID EMPLOYEE (#450) file.{:/} | POINTER |  |  | Paid_Employee-450 | 
| network_address | 500 | Network Address | {::nomarkdown}This is the begining of a network address.  Enter the Lastname of the user<br/>or an identifier that he is known as on the receiving system.{:/} | [OBJECT] |  |  | [Network_Address-200_005](#Network_Address-200_005)  | 
| network_username | 501.1 | Network Username | {::nomarkdown}This is the username that is used by the Windows Active Directory.<br/>It should be 'VHA' + 3 char station ID + first 5 of last name + first<br/>character of first name.<br/>Holders of the XUMGR key can override this.{:/} | STRING |  |  |  | 
| subject_alternative_name | 501.2 | Subject Alternative Name | {::nomarkdown}This is a name from the PIV card field SUBJECT ALTERNATIVE NAME<br/>also known as USER PRINCIPLE NAME. <br/> <br/>The subject alternative name extension allows identities to be bound<br/>to the subject of the certificate.  These identities may be included<br/>in addition to or in place of the identity in the subject field of<br/>the certificate.  Subject alternative name is defined by an Internet <br/>electronic mail address.<br/> <br/>When the subjectAltName extension contains an Internet mail address,<br/>the address MUST be stored in the rfc822Name.<br/>{:/} | STRING |  | INDEXED |  | 
| social_worker_ | 654 | Social Worker ? | {::nomarkdown}This field will be used to indicate if the user is a Social Worker.<br/>It will also act as a screen for lookups.{:/} | BOOLEAN |  |  | {::nomarkdown}<dl><dt>0</dt><dd>false</dd><dt>1</dt><dd>true</dd></dl>{:/} | 
| immediate_supervisor | 654.1 | Immediate Supervisor | {::nomarkdown}This field is used to indicate the immediate supervisor of the social worker.{:/} | POINTER |  | INDEXED | [New_Person-200](New_Person-200.md) | 
| position_title | 654.15 | Position/title | {::nomarkdown}This field will be used to indicate the position/title of the social worker.{:/} | ENUMERATION |  |  | {::nomarkdown}<dl><dt>4</dt><dd>SW COORDINATOR</dd><dt>3</dt><dd>SUPERVISOR</dd><dt>1</dt><dd>SW CHIEF</dd><dt>2</dt><dd>ASST. CHIEF</dd><dt>5</dt><dd>SOCIAL WORKER</dd><dt>10</dt><dd>VOLUNTEER</dd><dt>6</dt><dd>SW ASSOCIATE</dd><dt>9</dt><dd>STUDENT</dd><dt>8</dt><dd>SW CLERK/STENO</dd><dt>11</dt><dd>WOC</dd><dt>7</dt><dd>SECRETARY</dd></dl>{:/} | 
| social_workers_number | 654.2 | Social Worker's Number | {::nomarkdown}Unique number assigned to social worker by service.  Enter a number 01-999.{:/} | NUMERIC |  | INDEXED |  | 
| surrogate | 654.3 | Surrogate | {::nomarkdown}This field will be used to indicate a surrogate supervisor.  When this<br/>field has data, the surrogate supervisor will have access to data pertaining<br/>to worker information for the surrogated supervisor.{:/} | POINTER |  | INDEXED | [New_Person-200](New_Person-200.md) | 
| dmms_units | 720 | Dmms Units | {::nomarkdown}This multiple field contains the DMMS units to which this person has<br/>access for entering data and generating reports.{:/} | [POINTER] |  |  | {id:Dss_Unit-724} | 
| appointment_status | 747.11 | Appointment Status | {::nomarkdown}Contains the Appointment Status for this person.{:/} | ENUMERATION |  |  | {::nomarkdown}<dl><dt>1</dt><dd>FULL-TIME</dd><dt>5</dt><dd>RESIDENT</dd><dt>3</dt><dd>CONSULTING</dd><dt>4</dt><dd>CONTRACT</dd><dt>6</dt><dd>FEE BASIS, ON STATION</dd><dt>2</dt><dd>PART-TIME</dd><dt>9</dt><dd>OTHER</dd><dt>7</dt><dd>SPECIALTY FELLOW</dd><dt>8</dt><dd>WOC</dd></dl>{:/} | 
| renew_date | 747.113 | Renew Date | {::nomarkdown}Contains the Renewal Date for our General Privilege.{:/} | DATE-TIME |  |  |  | 
| dea_expiration_date | 747.44 | Dea Expiration Date | {::nomarkdown}This field contains the expiration date for DEA #.{:/} | DATE-TIME |  |  |  | 
| enumeration_initiated | 900 | Enumeration Initiated | {::nomarkdown}This field notes the date/time the VPID enumeration attempt was <br/>initiated.{:/} | DATE-TIME |  |  |  | 
| enumeration_completed | 901 | Enumeration Completed | {::nomarkdown}This field notes the date/time the VPID assignment was completed.{:/} | DATE-TIME |  |  |  | 
| requires_transmission | 902 | Requires Transmission | {::nomarkdown}This field is used to note that this record was just added to this file, <br/>or that an edit was made to the fields that MPI cares about capturing and <br/>a VPID needs to be assigned or an update message needs to be sent.<br/> <br/>Fields being monitored for change are:<br/> <br/> .01           NAME <br/> .111          STREET ADDRESS 1 <br/> .112          STREET ADDRESS 2 <br/> .113          STREET ADDRESS 3 <br/> .114          CITY <br/> .115          STATE <br/> .116          ZIP CODE <br/> .131          PHONE (HOME) <br/> 4             SEX <br/> 5             DOB <br/> 9             SSN <br/> 41.99         NPI <br/> 53.2          DEA# <br/> 200.06,.01    VISITED FROM <br/> 200.06,2      DUZ AT HOME SITE{:/} | BOOLEAN |  |  | {::nomarkdown}<dl><dt>Y</dt><dd>true</dd></dl>{:/} | 
| badge_number | 910.1 | Badge Number | {::nomarkdown}Enter the badge number assigned to the VA police officer.{:/} | NUMERIC |  |  |  | 
| rank | 910.2 | Rank | {::nomarkdown}Enter the VA police officer's assigned rank designation, i.e., CHIEF,<br/>LIEUTENANT, PATROL OFFICER, etc.{:/} | STRING |  |  |  | 
| visited_from | 8910 | Visited From | {::nomarkdown}This subfile stores the information that travels along with visitors using<br/>the CPRS Foreign Views software to look at medical data of a patient which<br/>resides on a system where the visitor may not have valid access or verify<br/>codes.  When that person name and Social Security Number is put into the<br/>visited system's New Person File this multiple is updated to provide the<br/>ability to trace the visitors back to the system from which they are<br/>visiting.  This field (.01) stores the number of the site where the<br/>visitor was authenticated.{:/} | [OBJECT] |  |  | [Visited_From-200_06](#Visited_From-200_06)  | 
| person_class | 8932.1 | Person Class |  | [OBJECT] |  |  | [Person_Class-200_05](#Person_Class-200_05)  | 
| pgyear | 8932.2 | Pgyear | {::nomarkdown}This field holds what Post Graduate year a person is.{:/} | NUMERIC |  |  |  | 
| pgy_assigned | 8932.21 | Pgy Assigned | {::nomarkdown}This field holds the date that the PGYear field was last edited.{:/} | DATE-TIME |  |  |  | 
| fyear | 8932.3 | Fyear | {::nomarkdown}This field is the Fellowship year of a person.{:/} | NUMERIC |  |  |  | 
| fy_assigned | 8932.31 | Fy Assigned | {::nomarkdown}This field holds the Date that the FYear field was edited.{:/} | DATE-TIME |  |  |  | 
| person_file_pointer | 8980.16 | Person File Pointer | {::nomarkdown}This field holds a pointer to the person file so there will be a way to<br/>provide a cross reference to help convert 'person file' pointers into<br/>'new person file' pointer after the person file is removed.{:/} |  |  |  |  | 
| display_help_at_entry_to_lm | 8983.11 | Display Help At Entry To Lm | {::nomarkdown}If set to yes, a help text will be displayed before entering the editor.<br/>This is used primarily for new users.{:/} | BOOLEAN |  |  | {::nomarkdown}<dl><dt>n</dt><dd>false</dd><dt>y</dt><dd>true</dd></dl>{:/} | 
| ask_terminal_type_at_lm_entry | 8983.12 | Ask Terminal Type At Lm Entry | {::nomarkdown}If set to yes, the terminal type will be asked upon entry to the editor.{:/} | BOOLEAN |  |  | {::nomarkdown}<dl><dt>n</dt><dd>false</dd><dt>y</dt><dd>true</dd></dl>{:/} | 
| default_terminal_type_for_lm | 8983.13 | Default Terminal Type For Lm | {::nomarkdown}This field stores the default terminal type for a user.{:/} | POINTER |  |  | Terminal_Type-3_2 | 
| display_lm_commands | 8983.14 | Display Lm Commands | {::nomarkdown}If set to yes, the list of commands will be displayed at the bottom<br/>of the screen when entering the command mode.{:/} | BOOLEAN |  |  | {::nomarkdown}<dl><dt>n</dt><dd>false</dd><dt>y</dt><dd>true</dd></dl>{:/} | 
| bright_chars_at_exit_from_lm | 8983.15 | Bright Chars At Exit From Lm | {::nomarkdown}If set to yes, the terminal will be left in high intensity after exiting.{:/} | BOOLEAN |  |  | {::nomarkdown}<dl><dt>n</dt><dd>false</dd><dt>y</dt><dd>true</dd></dl>{:/} | 
| date_last_accessed_lm_wp | 8983.16 | Date Last Accessed Lm Wp | {::nomarkdown}The date and time a user last accessed the LetterMan word processor<br/>document editor.{:/} | DATE-TIME |  |  |  | 
| total_minutes_using_lm_wp | 8983.17 | Total Minutes Using Lm Wp | {::nomarkdown}The total minutes a user has used the LetterMan word processor<br/>document editor.{:/} | NUMERIC |  |  |  | 
| keystrokes_from_lm_wp | 8983.18 | Keystrokes From Lm Wp | {::nomarkdown}This field stores the total number of keystrokes a user has typed from<br/>the word processor document editor.{:/} | NUMERIC |  |  |  | 
| spelling_exception_dictionary | 8983.5 | Spelling Exception Dictionary | {::nomarkdown}This field stores the exception spelling dictionary for the user.{:/} | [STRING] |  |  |  | 
| defined_formats_for_lm | 8983.51 | Defined Formats For Lm | {::nomarkdown}This field is used to store predefined format lines which a user can<br/>select from during editing.{:/} | [OBJECT] |  |  | [Defined_Formats_For_Lm-200_0089832](#Defined_Formats_For_Lm-200_0089832)  | 
| defined_phrases_for_lm | 8983.52 | Defined Phrases For Lm | {::nomarkdown}This field stores predefined phrases which can be inserted into the document during editing.{:/} | [OBJECT] |  |  | [Defined_Phrases_For_Lm-200_0089833](#Defined_Phrases_For_Lm-200_0089833)  | 
| lm_limit_wp_fields_to_edit | 8983.6 | Lm Limit Wp Fields To Edit | {::nomarkdown}This field is used by the user to limit which word processing<br/>fields should be edited by LetterMan.{:/} | [STRING] |  |  |  | 
| vpid | 9000 | Vpid | {::nomarkdown}The VA Person Identification Number which was assigned by the Person<br/>Service central system.  Used to uniquely identify a Person.{:/} | STRING |  | INDEXED |  | 

## <a name="User_Class-200_07"></a>User_Class-200_07 

 property | value 
--- | --- 
 id | User_Class-200_07
 label | User Class

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
| user_class | .01 | User Class |  | POINTER |  | REQUIRED, INDEXED | User_Class-201 | 
| isprimary | 2 | Isprimary | {::nomarkdown}This field notes if this User Class is the primary User Class for this <br/>user.  If returning just one User Class then this is the one to be <br/>returned.{:/} | BOOLEAN |  |  | {::nomarkdown}<dl><dt>1</dt><dd>false</dd><dt>0</dt><dd>true</dd></dl>{:/} | 

## <a name="Division-200_02"></a>Division-200_02 

 property | value 
--- | --- 
 id | Division-200_02
 label | Division

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
| division | .01 | Division | {::nomarkdown}The name of a Division that this user may sign on to.{:/} | POINTER |  | REQUIRED, INDEXED | [Institution-4](Institution-4.md) | 
| default | 1 | Default | {::nomarkdown}This field is used to indicate that a particular division should be<br/>presented to the user as a default when selecting a division.  This will<br/>only affect users that have more than one division.<br/>A cross reference will only allow one entry to have this flag set.{:/} | BOOLEAN |  |  | {::nomarkdown}<dl><dt>0</dt><dd>false</dd><dt>1</dt><dd>true</dd></dl>{:/} | 

## <a name="Alert_Date_Time-200_194"></a>Alert_Date_Time-200_194 

 property | value 
--- | --- 
 id | Alert_Date_Time-200_194
 label | Alert Date Time

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
| alert_date_time | .01 | Alert Date Time | {::nomarkdown}This is the date and time when the alert was generated.{:/} | DATE-TIME |  | REQUIRED |  | 
| package_id | .02 | Package Id | {::nomarkdown}This is a field in which the package id passed during alert filing.  This<br/>id may simply be a package namespace, or it may be a namespace followed by<br/>additional data to more accurately identify the type or purpose of the<br/>alert.{:/} | STRING |  |  |  | 
| message_text | .03 | Message Text | {::nomarkdown}This field contains the text of the message to be presented to the user at<br/>the time when he cycles through the menu system the first time after the<br/>alert has been filed for the user, and when the user selects the VIEW<br/>ALERTS option.{:/} | STRING |  |  |  | 
| new_alert_flag | .04 | New Alert Flag | {::nomarkdown}This flag is used by the alert processing to indicate a new alert which<br/>has not previously been presented to the user.  After the alert message<br/>text has been shown to the user, this flag is cleared and the user must<br/>then select the VIEW ALERTS option to process the alert.{:/} | ENUMERATION |  |  | {::nomarkdown}<dl><dt>1</dt><dd>NEW</dd></dl>{:/} | 
| action_flag | .05 | Action Flag | {::nomarkdown}This flag is optional at the present time, since the need for action<br/>processing can be determined by the presence of an option name or a<br/>routine name for use during alert processing.{:/} | ENUMERATION |  |  | {::nomarkdown}<dl><dt>R</dt><dd>RUN ROUTINE</dd><dt>I</dt><dd>IMMEDIATE RUN</dd><dt>D</dt><dd>DELETE</dd></dl>{:/} | 
| reserved1 | .06 | Reserved1 | {::nomarkdown}This field is reserved for future use by the alert system.{:/} | STRING |  |  |  | 
| entry_point | .07 | Entry Point | {::nomarkdown}While named ENTRY POINT, this is a dual function field.  If the next field<br/>(#.08, AROUTINE NAME) contains a routine name, this field contains the<br/>desired entry point within that routine (this field may also be null,<br/>indicating that the entry point should be at the top of the routine).  If<br/>field #.08 is null, then the contents of this field is interpreted as the<br/>name of an option which is to be entered when the alert is processed.{:/} | STRING |  |  |  | 
| aroutine_name | .08 | Aroutine Name | {::nomarkdown}If this field is not null, it contains the name of a routine which is to<br/>be used when the alert is processed.  If there is also a value in field<br/>#.07, that value is used as an entry point into the routine specified in<br/>this field.<br/> <br/>If this field is null, field #.07 is interpreted as an option name which<br/>is to be used when the alert is processed.<br/> <br/>If both this field and field #.07 are null, the alert is processed as an<br/>information only alert.{:/} | STRING |  |  |  | 
| reserved_field | .09 | Reserved Field | {::nomarkdown}This field is reserved for future use in the alert processing system.{:/} | STRING |  |  |  | 
| first_data_piece | .1 | First Data Piece | {::nomarkdown}This field and all following ^-separated fields are processed as a single<br/>entity and are returned in the variable XQADATA for use by the application<br/>which generated the alert.  The package may pass a series of variables<br/>using any desired separator in the variable XQADATA at the time the alert<br/>is setup.  When the alert is processed the value of XQADATA is returned to<br/>the application and may be used to establish parameters related to the<br/>alert without requiring interaction or provision of information by the<br/>user.  In this way information related to patient entry number, specific<br/>internal numbers for the desired data, etc may be stored and returned.{:/} | STRING |  |  |  | 
| data_string | 1 | Data String |  | STRING |  |  |  | 

## <a name="Delegated_Options-200_19"></a>Delegated_Options-200_19 

 property | value 
--- | --- 
 id | Delegated_Options-200_19
 label | Delegated Options

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
| delegated_options | .01 | Delegated Options | {::nomarkdown}This field identifies which options this user may delegate to others.{:/} | POINTER |  | REQUIRED, INDEXED | Option-19 | 
| delegated_by | 1 | Delegated By | {::nomarkdown}This field indicates who granted authority for this user to delegate<br/>this option to others.{:/} | POINTER |  |  | [New_Person-200](New_Person-200.md) | 
| date_delegated | 2 | Date Delegated | {::nomarkdown}This field records the date when this option was added to the list<br/>of options this user may delegate to others.{:/} | DATE-TIME |  |  |  | 
| editable | 3 | Editable | {::nomarkdown}This field indicates whether this use is allowed to edit this option.{:/} | BOOLEAN |  |  | {::nomarkdown}<dl><dt>1</dt><dd>false</dd><dt>0</dt><dd>true</dd></dl>{:/} | 

## <a name="Menu_Template-200_198"></a>Menu_Template-200_198 

 property | value 
--- | --- 
 id | Menu_Template-200_198
 label | Menu Template

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
| menu_template | .01 | Menu Template |  | STRING |  | REQUIRED, INDEXED |  | 
| pathway | 1 | Pathway | {::nomarkdown}This multiple contains the information on the option sequence specified<br/>for a given MENU TEMPLATE.{:/} | STRING |  |  |  | 

## <a name="Uci-200_01"></a>Uci-200_01 

 property | value 
--- | --- 
 id | Uci-200_01
 label | Uci

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
| uci | .01 | Uci | {::nomarkdown}This is one of a set of UCI's that this user may choose to work in<br/>at sign-on time.{:/} | STRING |  | REQUIRED, INDEXED |  | 
| routines_rn1rn2 | 2 | Routines (rn1:rn2) | {::nomarkdown}This is a list of routines that the user may choose to run when signing on<br/>to this UCI.  The routines are seperated by ':'s.{:/} | STRING |  |  |  | 

## <a name="Accessible_File-200_032"></a>Accessible_File-200_032 

 property | value 
--- | --- 
 id | Accessible_File-200_032
 label | Accessible File

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
| file_number | .001 | File Number | {::nomarkdown}When defined, this field makes the sub-file's internal entry number<br/>accessible for inquiry and edit.{:/} | IEN |  |  |  | 
| accessible_file | .01 | Accessible File |  | POINTER |  | REQUIRED, INDEXED | File-1 | 
| data_dictionary_access | 1 | Data Dictionary Access | {::nomarkdown}This field is a flag that, when set to 1, gives the user data dictionary<br/>access to the file (in the .01 field) represented in this record.{:/} | BOOLEAN |  |  | {::nomarkdown}<dl><dt>0</dt><dd>false</dd><dt>1</dt><dd>true</dd></dl>{:/} | 
| delete_access | 2 | Delete Access | {::nomarkdown}This field is a flag that, when set to 1, gives the user delete access to<br/>the file (in the .01 field) represented in this record.{:/} | BOOLEAN |  |  | {::nomarkdown}<dl><dt>0</dt><dd>false</dd><dt>1</dt><dd>true</dd></dl>{:/} | 
| laygo_access | 3 | Laygo Access | {::nomarkdown}This field is a flag that, when set to 1, gives the user LAYGO access to<br/>the file (in the .01 field) represented in this record.{:/} | BOOLEAN |  |  | {::nomarkdown}<dl><dt>0</dt><dd>false</dd><dt>1</dt><dd>true</dd></dl>{:/} | 
| read_access | 4 | Read Access | {::nomarkdown}This field is a flag that, when set to 1, gives the user read access to<br/>the file (in the .01 field) represented in this record.{:/} | BOOLEAN |  |  | {::nomarkdown}<dl><dt>0</dt><dd>false</dd><dt>1</dt><dd>true</dd></dl>{:/} | 
| write_access | 5 | Write Access | {::nomarkdown}This field is a flag that, when set to 1, gives the user write access to<br/>the file (in the .01 field) represented in this record.{:/} | BOOLEAN |  |  | {::nomarkdown}<dl><dt>0</dt><dd>false</dd><dt>1</dt><dd>true</dd></dl>{:/} | 
| audit_access | 6 | Audit Access | {::nomarkdown}This field is a flag that, when set to 1, gives the user audit access to<br/>the file (in the .01 field) represented in this record.{:/} | BOOLEAN |  |  | {::nomarkdown}<dl><dt>0</dt><dd>false</dd><dt>1</dt><dd>true</dd></dl>{:/} | 

## <a name="Effective_Date_time-200_042"></a>Effective_Date_time-200_042 

 property | value 
--- | --- 
 id | Effective_Date_time-200_042
 label | Effective Date/time

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
| effective_date_time | .01 | Effective Date/time | {::nomarkdown}This field contains the date and time of the last change to the NPI field.{:/} | DATE-TIME |  | REQUIRED, INDEXED |  | 
| status | .02 | Status | {::nomarkdown}The Status of an NPI is either 'ACTIVE' or 'INACTIVE'. I 'ACTIVE' then <br/>the NPI will be accessible by end-users to document a particular <br/>provider. If 'INACTIVE', then the NPI will only be accessible by the <br/>application to display legacy data.{:/} | ENUMERATION |  | REQUIRED | {::nomarkdown}<dl><dt>1</dt><dd>ACTIVE</dd><dt>0</dt><dd>INACTIVE</dd></dl>{:/} | 
| npi | .03 | Npi | {::nomarkdown}Each VHA Billable Practitioner should have applied for the NPI through<br/>CMS' National Plan and Provider Enumeration System (NPPES).  NPI<br/>Confirmation Letters are sent by CMS and indicate the NPI assigned.<br/>Practitioners may present their NPI Confirmation Letter as a source<br/>document to verify the accuracy of the NPI or you may contact your Local<br/>NPI Maintenance Team Leader for assistance.{:/} | STRING |  | REQUIRED, INDEXED |  | 

## <a name="Keys-200_051"></a>Keys-200_051 

 property | value 
--- | --- 
 id | Keys-200_051
 label | Keys

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
| key | .01 | Key | {::nomarkdown}This is a security key that this person holds.{:/} | POINTER |  | REQUIRED, INDEXED | Security_Key-19_1 | 
| given_by | 1 | Given By | {::nomarkdown}This is a pointer to the person that entered this security  key into this<br/>persons file.{:/} | POINTER |  |  | [New_Person-200](New_Person-200.md) | 
| date_given | 2 | Date Given | {::nomarkdown}This is the date that the security key was given to the person.<br/>There is know history.{:/} | DATE-TIME |  |  |  | 
| review_date | 3 | Review Date | {::nomarkdown}This is the date after which the persons need for this security key should<br/>be reviewed.{:/} | DATE-TIME |  |  |  | 

## <a name="Delegated_Keys-200_052"></a>Delegated_Keys-200_052 

 property | value 
--- | --- 
 id | Delegated_Keys-200_052
 label | Delegated Keys

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
| delegated_key | .01 | Delegated Key | {::nomarkdown}This is a security key that this person my allocate to another person.{:/} | POINTER |  | REQUIRED, INDEXED | Security_Key-19_1 | 
| delegated_by | 1 | Delegated By | {::nomarkdown}This is the person that gave the security key that may be delegated.{:/} | POINTER |  |  | [New_Person-200](New_Person-200.md) | 
| date_delegated | 2 | Date Delegated | {::nomarkdown}This is the date that the security key was given to be delegated.{:/} | DATE-TIME |  |  |  | 
| may_redelegate | 3 | May Re-delegate | {::nomarkdown}Re-delegation means that the person has total control over the key,<br/>the person may not only delegate the key to others but may also give<br/>others the authorization to delegate it.{:/} | ENUMERATION |  |  | {::nomarkdown}<dl><dt>1</dt><dd>YES</dd><dt>0</dt><dd>no</dd><dt>1</dt><dd>yes</dd><dt>0</dt><dd>NO</dd></dl>{:/} | 

## <a name="Licensing_State-200_541"></a>Licensing_State-200_541 

 property | value 
--- | --- 
 id | Licensing_State-200_541
 label | Licensing State

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
| licensing_state | .01 | Licensing State | {::nomarkdown}This is the state issuing a license to practice medicine for a provider.{:/} | POINTER |  | REQUIRED, INDEXED | State-5 | 
| license_number | 1 | License Number | {::nomarkdown}This is the licence number that was issued to a provider by the sate<br/>he is licenced in.{:/} | STRING |  | REQUIRED |  | 
| expiration_date | 2 | Expiration Date | {::nomarkdown}This is the expiration date of the provider's licence issued by the state.<br/>by the state.{:/} | DATE-TIME |  | REQUIRED |  | 

## <a name="State_Issuing_Dea_Number-200_55"></a>State_Issuing_Dea_Number-200_55 

 property | value 
--- | --- 
 id | State_Issuing_Dea_Number-200_55
 label | State Issuing Dea Number

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
| state_issuing_dea_number | .01 | State Issuing Dea Number | {::nomarkdown}This is the state which has issued a State DEA# to a provider.  Not all<br/>states require a seperate DEA #{:/} | POINTER |  | REQUIRED, INDEXED | State-5 | 
| state_dea_number | 1 | State Dea Number | {::nomarkdown}This is the DEA # issued by an individual state, it is not required<br/>by all states and in some cases may be the same as the Federal<br/>DEA #.{:/} | STRING |  | REQUIRED |  | 

## <a name="Cprs_Tab-200_010113"></a>Cprs_Tab-200_010113 

 property | value 
--- | --- 
 id | Cprs_Tab-200_010113
 label | Cprs Tab

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
| cprs_tab | .01 | Cprs Tab | {::nomarkdown}This is a pointer to the OR CPRS TABS (#101.13) file. Enter the name of<br/>the CPRS tab for which you want to set effective and expiration dates for<br/>access for this user.{:/} | POINTER |  | REQUIRED, INDEXED | Or_Cprs_Tabs-101_13 | 
| effective_date | .02 | Effective Date | {::nomarkdown}This is the effective date of access to the CPRS tab.{:/} | DATE-TIME |  | REQUIRED |  | 
| expiration_date | .03 | Expiration Date | {::nomarkdown}This is the expiration date of access to the CPRS tab.{:/} | DATE-TIME |  |  |  | 

## <a name="Secondary_Menu_Options-200_03"></a>Secondary_Menu_Options-200_03 

 property | value 
--- | --- 
 id | Secondary_Menu_Options-200_03
 label | Secondary Menu Options

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
| secondary_menu_options | .01 | Secondary Menu Options | {::nomarkdown}This is an option which is merged with the users primary menu<br/>and XUCOMMAND option, giving the user this option on all of her/his<br/>menus.{:/} | POINTER |  | REQUIRED, INDEXED | Option-19 | 
| synonym | 2 | Synonym | {::nomarkdown}This is a user-specific synonym which may be used in addressing this<br/>option.{:/} | STRING |  |  |  | 

## <a name="Personal_Diagnoses_List-200_0351"></a>Personal_Diagnoses_List-200_0351 

 property | value 
--- | --- 
 id | Personal_Diagnoses_List-200_0351
 label | Personal Diagnoses List

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
| diagnosis | .01 | Diagnosis | {::nomarkdown}A diagnosis in the provider's preferred list.{:/} | POINTER |  | REQUIRED, INDEXED | [Icd_Diagnosis-80](Icd_Diagnosis-80.md) | 
| expression | 1 | Expression | {::nomarkdown}This is the diagnosis code's Lexicon<br/>expression as stored in the EXPRESSION file,<br/>file # 757.01.{:/} | POINTER |  |  | [Expressions-757_01](Expressions-757_01.md) | 

## <a name="Network_Address-200_005"></a>Network_Address-200_005 

 property | value 
--- | --- 
 id | Network_Address-200_005
 label | Network Address

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
| network_address_lastname | .01 | Network Address Lastname | {::nomarkdown}This is the last name of the user.{:/} | STRING |  | REQUIRED, INDEXED |  | 
| network_address_first_name | 1 | Network Address First Name | {::nomarkdown}The recipient's first name should be entered into this field.{:/} | STRING |  | REQUIRED |  | 
| x400_user_id | 2 | X.400 User Id | {::nomarkdown}Enter a string that uniquely identifies the user at the remote system.{:/} | STRING |  |  |  | 
| generation | 3 | Generation | {::nomarkdown}The generation of the recipient is a suffix that further identifies him.<br/>Common strings used as such suffixes are: 'junior', 'senior', 'III'.{:/} | STRING |  |  |  | 
| country | 4 | Country | {::nomarkdown}All X.400 addresses require a 'country'.  If no country is known this system<br/>will not deliver the mail.  As of 11/90 'US' was the only valid country.<br/>SMTP addresses such as 'name@domain' where domain ends with such strings as<br/>'.EDU' need no country.{:/} | ENUMERATION |  |  | {::nomarkdown}<dl><dt>US</dt><dd>US</dd></dl>{:/} | 
| organization | 5 | Organization | {::nomarkdown}If you are filling in this field for an X.400 address, it is a standard<br/>field.  If, however, you are filling in this field for an SMTP address,<br/>you must fill in the third level of the domain.  For example, the third<br/>level of the domain 'SILVER.DOMAIN.EXT' is the string after the second<br/>\.\ starting from the right.  'GOV' is the first.  'VA' is the second.<br/>'SILVER' is the fourth level.{:/} | STRING |  |  |  | 
| organizational_unit_sub0 | 5.1 | Organizational Unit Sub0 | {::nomarkdown}This field contains the 'Orgainzational Unit' of the address if it is the<br/>address of an X.400 recipient.  IF it is the address of an SMTP recipient,<br/>this is the FOURTH LEVEL NAME of the DOMAIN.  See the ORGANIZATION field<br/>for a description of domain levels of SMTP domains.{:/} | STRING |  |  |  | 
| organizational_unit_sub1 | 5.2 | Organizational Unit Sub1 | {::nomarkdown}The Organizational Unit field of X.400 recipients is infinitely repeating.<br/>This system will only be able to handle 4 levels of Organizational Units.<br/>SMTP domains also have levels.  Each Organizational Unit 'subn' field is<br/>a deeper definition (and level) of the SMTP domain.  'Sub1' is the fift<br/>level of the domain field.  'Sub2' is the sixth level. 'Sub3' is the seventh.<br/>See the description of the ORGANIZATION field for further information on<br/>levels of SMTP domains.{:/} | STRING |  |  |  | 
| organizational_unit_sub2 | 5.3 | Organizational Unit Sub2 | {::nomarkdown}See the description of the 'ORGANIZATIONAL UNIT sub1' field for further<br/>information.{:/} | STRING |  |  |  | 
| organizational_unit_sub3 | 5.4 | Organizational Unit Sub3 | {::nomarkdown}See the description of the 'ORGANIZATIONAL UNIT SUB1' field for further<br/>information.{:/} | STRING |  |  |  | 
| locality | 6 | Locality |  | STRING |  |  |  | 
| application_entity | 7 | Application Entity | {::nomarkdown}The 'Application Entity' field is the name of a piece of software that will<br/>receive and process any messages it receives.{:/} | STRING |  |  |  | 
| private_administrative_domain | 98 | Private Administrative Domain | {::nomarkdown}For X.400 addresses this field is standard.  For mapping into the SMTP<br/>mail system (MailMan is an SMTP mail system.), this field is filled in<br/>with a special string.  'DHCP' will be interpreted as \.DOMAIN.EXT\ for all<br/>Department of Veterans' Affairs SMTP systems.  If the address does have<br/>\DHCP' in this field, MailMan will try to deliver it to a VA site.  If<br/>the address has anything else, MailMan will try to deliver to an X.400<br/>system as of 11/90.  Later there may be additional special PRMDs.{:/} | STRING |  |  |  | 
| administrative_domain | 99 | Administrative Domain | {::nomarkdown}The Administrative domain is the carrier of the electronic channels.  Some<br/>examples of carriers in the US are US SPRINT, AT&T and MCI Communications.<br/>This field is required only for X.400 addresses.{:/} | STRING |  |  |  | 

## <a name="Visited_From-200_06"></a>Visited_From-200_06 

 property | value 
--- | --- 
 id | Visited_From-200_06
 label | Visited From

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
| visited_from | .01 | Visited From | {::nomarkdown}This field holds the official Station Number ID of the remote site that<br/>did the user authentication. This may be the site that caused this user to<br/>be added to the NPF.{:/} | STRING |  | REQUIRED, INDEXED |  | 
| site_name | 1 | Site Name | {::nomarkdown}This field contains the name of the site where the visitor was<br/>authenticated.{:/} | STRING |  |  |  | 
| duz_at_home_site | 2 | Duz At Home Site | {::nomarkdown}This field contains the internal entry number in the New Person File at<br/>the site where this visitor was authenticated.{:/} | NUMERIC |  |  |  | 
| first_visit | 3 | First Visit | {::nomarkdown}This field contains the date when this visitor first visited from the site<br/>recorded in the .01 field.{:/} | DATE-TIME |  |  |  | 
| last_visited | 4 | Last Visited | {::nomarkdown}This field is updated each time a visitor arrives from the site in the .01<br/>field.{:/} | DATE-TIME |  |  |  | 
| phone_at_site | 5 | Phone At Site | {::nomarkdown}This field may contain a phone number for the visitor at their home site.<br/>Since phone numbers are not always entered, this field may be blank.{:/} | STRING |  |  |  | 

## <a name="Person_Class-200_05"></a>Person_Class-200_05 

 property | value 
--- | --- 
 id | Person_Class-200_05
 label | Person Class

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
| person_class | .01 | Person Class | {::nomarkdown}This is a pointer to the Person class file.{:/} | POINTER |  | REQUIRED, INDEXED | Person_Class-8932_1 | 
| effective_date | 2 | Effective Date | {::nomarkdown}This field is trigger by adding a new person class.{:/} | DATE-TIME |  | REQUIRED, INDEXED |  | 
| expiration_date | 3 | Expiration Date | {::nomarkdown}This field is the date after which this class becomes inactive.<br/>This field must be not less than the EFFECTIVE DATE and not greater <br/>than the DATE INACTIVATED field(#4) of the Person Class entry in the<br/>PERSON CLASS file(#8932.1).<br/>       <br/>It will get triggered if a new Person Class is entered or someone<br/>edits the field to inactivate the class.{:/} | DATE-TIME |  |  |  | 

## <a name="Defined_Formats_For_Lm-200_0089832"></a>Defined_Formats_For_Lm-200_0089832 

 property | value 
--- | --- 
 id | Defined_Formats_For_Lm-200_0089832
 label | Defined Formats For Lm

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
| number | .01 | Number | {::nomarkdown}This is the reference number to the predefined format line.{:/} | NUMERIC |  | REQUIRED, INDEXED |  | 
| default | 1 | Default | {::nomarkdown}If set to yes, this format line will be used as the default format line<br/>when using the screen editor.  If a document already has a format line<br/>defined, then the document format will be used.{:/} | BOOLEAN |  | INDEXED | {::nomarkdown}<dl><dt>n</dt><dd>false</dd><dt>y</dt><dd>true</dd></dl>{:/} | 
| format_line | 2 | Format Line | {::nomarkdown}This field stores the predefined format lines of the user.{:/} | STRING |  |  |  | 

## <a name="Defined_Phrases_For_Lm-200_0089833"></a>Defined_Phrases_For_Lm-200_0089833 

 property | value 
--- | --- 
 id | Defined_Phrases_For_Lm-200_0089833
 label | Defined Phrases For Lm

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
| keyword | .01 | Keyword | {::nomarkdown}The predefined phrase 'keyword' used to select the phrase.{:/} | STRING |  | REQUIRED, INDEXED |  | 
| phrase | 1 | Phrase | {::nomarkdown}The phrase to be inserted into the document.{:/} | STRING |  |  |  | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 22nd 2017, 3:23:36 am</p>{:/}