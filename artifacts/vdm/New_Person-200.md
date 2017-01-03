---
layout: default
title: VDM documentation
---

## [VDM](TableOfContent.md) --> New_Person-200 

 property | value 
--- | --- 
 id | New_Person-200
 fmId | 200
 label | New Person
 location | ^VA(200,
 description | This file contains data on employees, users, practitioners, etc.\rwho were previously in Files 3,6,16 and others.\r \rDHCP packages must check with the KERNEL developers to see that\ra given number/namespace is clear for them to use.\r \rField numbers 53-59.9 reserved for Pharm.\r Nodes and X-ref 'PS*'.\rField numbers 70-79.9 reserved for Radiology\r Nodes and X-ref 'RA*'.\rField numbers 720-725 reserved for DSSM\r Nodes and X-ref 'EC*' and 'AEC*'.\rField numbers 740-749.9 reserved for QA\r Nodes and X-ref 'QA*'.\rField numbers 654-654.9 reserved for Social work\r Node 654 and X-ref 'SW*'.\rField numbers 500-500.9 reserved for mailman\r Node 500 and X-ref 'XM*' and 'AXM*'.\rField numbers 740-749.9 reserved for QA\r Nodes and X-ref 'QA*'.\rField numbers 910-910.9 reserved for Police Package\r Node and X-ref 'ESP'

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
| name | .01 | Name | Enter only data that is actually part of the person's name. Do not\rinclude extra titles, identification, flags, local information, etc.\rEnter the person's name in 'LAST,FIRST MIDDLE SUFFIX' format.\rThis value must be 3-35 characters in length and may contain only\ruppercase alpha characters, spaces, apostrophes, hyphens and one comma.\rAll other characters and parenthetical text will be removed. | STRING |  | REQUIRED, INDEXED |  | 
| street_address_1 | .111 | Street Address 1 | This is the first line of the street address of the permanent\r address of the new person. | STRING |  |  |  | 
| street_address_2 | .112 | Street Address 2 |  This is the second line of the street address of the permanent\raddress of the new person. | STRING |  |  |  | 
| street_address_3 | .113 | Street Address 3 | This is the third line of the street address of the permanent\raddress of the new person. | STRING |  |  |  | 
| city | .114 | City | This is the city of the permanent address of\rthe new person. | STRING |  |  |  | 
| state | .115 | State | This is the state of the permanent address of\rthe new person. | POINTER |  |  | {id:State-5} | 
| zip_code | .116 | ZIP Code | This is the postal ZIP code of the\rpermanent address of the new person. | STRING |  |  |  | 
| temporary_address_1 | .1211 | Temporary Address 1 | This is the first line of a temporary address\rfor the new person. | STRING |  |  |  | 
| temporary_address_2 | .1212 | Temporary Address 2 | This is the second line of a temporary address\rfor the new person. | STRING |  |  |  | 
| temporary_address_3 | .1213 | Temporary Address 3 | This is the third line of a temporary address\rfor the new person. | STRING |  |  |  | 
| temporary_city | .1214 | Temporary City | This is the city of the temporary location for the new person. | STRING |  |  |  | 
| temporary_state | .1215 | Temporary State | This is the state of the temporary location for the new person. | POINTER |  |  | {id:State-5} | 
| temporary_zip_code | .1216 | Temporary ZIP Code | This is the postal ZIP code for the temporary location for the new person. | STRING |  |  |  | 
| start_date_of_temp_addres | .1217 | Start Date Of Temp Addres | This is the beginning date for use of the temporary address for the\rnew person. | DATE-TIME |  |  |  | 
| end_date_of_temp_address | .1218 | End Date Of Temp Address | This is the ending date for use of the temporary address for the\rnew person. | DATE-TIME |  |  |  | 
| phone_home | .131 | Phone (home) | This is the telephone number for the new person. | STRING |  |  |  | 
| office_phone | .132 | Office Phone | This is the business/office telephone for the new person. | STRING |  |  |  | 
| phone_number3 | .133 | Phone #3 | This is an alternate telephone number where the new person might also\rbe reached. | STRING |  |  |  | 
| phone_number4 | .134 | Phone #4 | This is another alternate telephone number where the new person might\ralso be reached. | STRING |  |  |  | 
| commercial_phone | .135 | Commercial Phone | This is a commercial phone number used by IFCAP. | STRING |  |  |  | 
| fax_number | .136 | Fax Number | This field holds a phone number for a FAX machine for this user.\rIt needs to be a format that can be understood by a sending \rMODEM. | STRING |  |  |  | 
| voice_pager | .137 | Voice Pager | This field holds a phone number for an ANALOG PAGER that this person\rcarries with them.\rIt needs to be a format that can be understood by a sending \rMODEM. | STRING |  |  |  | 
| digital_pager | .138 | Digital Pager | This field holds a phone number for a DIGITAL PAGER that this person\rcarries with them.\rIt needs to be a format that can be understood by a sending \rMODEM. | STRING |  |  |  | 
| room | .141 | Room | This is the room number assigned to the new person. | STRING |  |  |  | 
| email_address | .151 | Email Address | This field contains the e-mail address to which an outside person or\rvendor can send correspondence.\r \r(i.e. firstname.lastname@med.va.gov or \r lastname.firstname@forum.va.gov or\r lastname.firstname_i+@forum.va.gov as in\r smith.robert_b+@forum.va.gov for Robert B. Smith on Forum).\r \r(* Note: period replaces comma in lastname.firstname syntax, underscore\rreplaces space, and plus sign replaces period following middle initial for\rVISTA MailMan addresses.)\r \rThis address may appear on documents going to vendors. | STRING |  |  |  | 
| initial | 1 | Initial | These are the initials of the user, which may be entered for naming\rusers. | STRING |  | INDEXED |  | 
| access_code | 2 | Access Code | This is a unique code to identify a user to the system.\rThis code is hashed so that it can't be looked up to find out the code.\rThe access code will appear as a string of numbers, but must be entered\ras a separate entry.  Users who have no access code will not receive\rmail.\r*** This field should never be edited directly - do not remove WRITE ACCESS! | STRING |  |  |  | 
| want_to_edit_access_code_y_n | 2.1 | Want To Edit Access Code (y/n) | Entering a YES to this field calls the KERNEL routine\rfor entering ACCESS codes. No data is stored for this field. | STRING |  |  |  | 
| file_manager_access_code | 3 | File Manager Access Code | This is the string that is put in DUZ(0) for use by fileman\rto check file and field access. | STRING |  |  |  | 
| sex | 4 | Sex | This is the gender for the new person. | ENUMERATION |  |  | <dl><dt>M</dt><dd>MALE</dd><dt>F</dt><dd>FEMALE</dd></dl> | 
| dob | 5 | Dob | This is the date of birth of the new person. | DATE-TIME |  |  |  | 
| disuser | 7 | Disuser | This field, if set to YES (1), marks a user that is not allowed to\rlog on to this system.  It will leave all Menus, Keys and other attributes\rexabled for the user.\rAn example would be an external support person\rthat you only want to be able to log on to your system when you are\rmonitoring them.  Setting this field would prevent them from loging\ron to the system untill you cleared the field. | BOOLEAN |  |  | {false:1,true:0} | 
| verify_code_never_expires | 7.2 | Verify Code Never Expires | This field will control if the users VERIFY code will expire at the\rinterval set by the Kernel System Parameter LIFETIME OF VERIFY CODE.\rThis field should only be used for access to the VistA system from other\rsystems making connection with the RPCBroker and have very controlled\raccess.\rOnly persons with the XUMGR key are allowed to set this flag. | BOOLEAN |  |  | {false:1,true:0} | 
| title | 8 | Title | This is the title for the new person. | POINTER |  |  | {id:Title-3_1} | 
| ssn | 9 | Ssn | This is the social security number of the new person. | STRING |  | INDEXED |  | 
| termination_date | 9.2 | Termination Date | This is the date after which the computer will no longer recognize this\ruser's ACCESS CODE.\rOnce this date has passed, when the USER TERMINATE job runs it will clean\rout this users data based on flags in the NEW PERSON file. | DATE-TIME |  |  |  | 
| delete_all_mail_access | 9.21 | Delete All Mail Access | This gives you the ability to purge all of a user's mail related\rinformation. This includes Mail messages, Mail Boxes, Mail Groups,\rSurrogate privlages when that user is terminated.\rThis is recomended. | BOOLEAN |  |  | {false:n,true:y} | 
| delete_keys_at_termination | 9.22 | Delete Keys At Termination | This gives you the ability to delete all of a user's security\rkeys, and delagated keys when the user is terminated.\rThis is recomended. | BOOLEAN |  |  | {false:n,true:y} | 
| terminal_type_last_used | 9.3 | Terminal Type Last Used | This field holds a pointer to the last terminal type the user selected\rat sign-on or in edit user char. | POINTER |  |  | {id:Terminal_Type-3_2} | 
| termination_reason | 9.4 | Termination Reason | This field holds a short description of why the user has been terminated\ror has DISUSER flag set. | STRING |  |  |  | 
| user_class | 9.5 | User Class |  | [OBJECT] |  |  | [User_Class-200_07](#user_class-200_07)  | 
| alias | 10 | Alias | Other names used by this new person. | [STRING] |  |  |  | 
| name_components | 10.1 | Name Components | Answer with the entry in the NAME COMPONENTS file that contains the\rcomponents of the person's name. | POINTER |  | REQUIRED | {id:Name_Components-20} | 
| degree | 10.6 | Degree | This field holds any academic or professional degree that have been earned\rby the user. This would be things like BS, BA, MD, and PHD. | STRING |  |  |  | 
| verify_code | 11 | Verify Code | This is the code that is used to verify that the ACCESS CODE was not\rfound by accident.\rIt may be entered at logon time immediately after the ACCESS CODE\rby typing a semicolon, then the VERIFY CODE.\r\rVerify codes may be changed by the user with the CHANGE USER CHARACTERISTICS\roption.  The kernel site parameter field LIFETIME OF VERIFY CODE forces\rthe user to periodically enter a new verify code. | STRING |  |  |  | 
| want_to_edit_verify_code_y_n | 11.1 | Want To Edit Verify Code (y/n) | Entering a YES to this field calls the KERNEL routine\rfor entering VERIFY codes. No data is stored for this field. | STRING |  |  |  | 
| date_verify_code_last_changed | 11.2 | Date Verify Code Last Changed | This field is triggered by a change in the VERIFY CODE.  It is used\rto determine when the USER must be notified to change their code. | STRING |  |  |  | 
| allow_ara_access | 11.6 | Allow Ara Access | This field is for a control that is under development. | BOOLEAN |  |  | {false:1,true:0} | 
| ara_value | 11.7 | Ara Value | This value is used to identify the user in non interactive connections. | STRING |  | INDEXED |  | 
| current_degree_level | 12.1 | Current Degree Level | This is the current degree level upon entry into the current training\rprogram/residency at this VA medical facility. | POINTER |  |  | {id:Hl7_Degree-771_9} | 
| program_of_study | 12.2 | Program Of Study | This is the discipline that best describes the trainee's current\rprogram of study at this VA medical facility. | POINTER |  |  | {id:Program_Of_Study-8932_2} | 
| last_training_month__year | 12.3 | Last Training Month & Year | This is the MONTH and LAST year the trainee anticipates being in a\rtraining program at this VA medical facility. | STRING |  |  |  | 
| vha_training_facility | 12.4 | Vha Training Facility |  | POINTER |  |  | [Institution-4](Institution-4.md) | 
| date_hl7_trainee_record_built | 12.5 | Date Hl7 Trainee Record Built | This is the date that the trainee information was built and sent to the\rOAA server. | DATE-TIME |  | INDEXED |  | 
| clinical_core_trainee | 12.6 | Clinical Core Trainee | This field designates whether or not the person is an active Trainee. | BOOLEAN |  |  | {false:N,true:Y} | 
| date_no_longer_trainee | 12.7 | Date No Longer Trainee | This is the date when a Registered Trainee is no longer to be considered\ran trainee.  This may be at the end of a rotation period or at the end VA\rtraining experience. | DATE-TIME |  |  |  | 
| start_of_training | 12.8 | Start Of Training |  | DATE-TIME |  |  |  | 
| nick_name | 13 | Nick Name | This is a string that is used in the sign-on greeting and\rfor mailman user lookup. | STRING |  |  |  | 
| pac | 14 | Pac | This is a code to be checked before a user is allowed to get into\rprogrammer mode. | STRING |  |  |  | 
| hinq_employee_number | 14.9 | Hinq Employee Number | The employee number associated with HINQ passwords from the DVB should\rbe entered here. | STRING |  | INDEXED |  | 
| prohibited_times_for_signon | 15 | Prohibited Times For Sign-on | This is a pair of times within which the user will not be allowed\raccess to the computer.\rThey should be entered in Military format, for example 0900-1300 would\rprohibit signons from 9AM to 1PM each day. | STRING |  |  |  | 
| division | 16 | Division | This is the one or more divisions that this user may sign-on and do\rwork for. | [OBJECT] |  |  | [Division-200_02](#division-200_02)  | 
| delegate_of | 19 | Delegate Of | This field holds the name of the person who has delegated menu manager\rauthority to the user.  The user is thus the 'delegate of' the person\rnamed here. | POINTER |  |  | [New_Person-200](New_Person-200.md) | 
| delegation_date | 19.1 | Delegation Date | This field records the data that the user became a delegate. | DATE-TIME |  |  |  | 
| delegation_level | 19.2 | Delegation Level | This field records the level of delegation authority with respect to\rthe systems manager, level zero.  When the systems manager delegates\rauthority to someone else, that person will be at level one.  Levels\rare maintained so that lower level delegates cannot interfere with\rthe menus of higher level delegates. | NUMERIC |  |  |  | 
| alert_date_time | 19.4 | Alert Date/time | This is a multiple field which is used to generate alerts to the users.\rThe data for alerts is filed by date and time. | [OBJECT] |  |  | [Alert_Date_Time-200_194](#alert_date_time-200_194)  | 
| delegated_options | 19.5 | Delegated Options | This is a sub-file of pointers to the Option File which detail those\roptions this user may delegate to others. | [OBJECT] |  |  | [Delegated_Options-200_19](#delegated_options-200_19)  | 
| allowable_new_menu_prefix | 19.6 | Allowable New Menu Prefix | This subfile holds the set of namespaces available to this user in\rthe creation of menus with delegated options.\r | [STRING] |  |  |  | 
| menu_template | 19.8 | Menu Template | This multiple holds sets of predefined menus which can be envoked by\rthe user by entering a right-square-bracket (\[\) followed by a\rtemplate's name. | [OBJECT] |  |  | [Menu_Template-200_198](#menu_template-200_198)  | 
| uci | 20 | Uci | This is the set of UCI's that this user must choose from at sign-on\rtime. | [OBJECT] |  |  | [Uci-200_01](#uci-200_01)  | 
| date_esig_last_changed | 20.1 | Date E-sig Last Changed | A $H date of the last time the E-Sig code was changed. Triggered by a\rX-ref on the ELECTRONIC SIGNATURE CODE field. | STRING |  |  |  | 
| signature_block_printed_name | 20.2 | Signature Block Printed Name | The name entered must contain the surname of the user.\rThe name must be 2 to 40 characters in length.\r \rThis field can then contain the name of the user as they wish it to\rbe displayed with the notation that they signed the document electronically.\rFor example:  John R. Doe, M.D.   or    Fred A. Sample, RN. | STRING |  |  |  | 
| signature_block_title | 20.3 | Signature Block Title | This field should contain the title of the person who is electronically\rsigning a document.  Examples of titles are Chief of Surgery, Dietician,\rClinical Pharmacist, etc.  This title will print next to the name of the\rperson who signs the document.  The person's name will be taken from the\rSIGNATURE BLOCK PRINTED NAME field.\r \rThe title must be 2 to 50 characters in length. | STRING |  |  |  | 
| electronic_signature_code | 20.4 | Electronic Signature Code | This field contains the encrypted code which the user types when\rsigning documents electronically.  The user's input will be compared to\rthis field when validating his electronic signature.\rAll electronic signature codes should be treated as confidential. | STRING |  |  |  | 
| mail_code | 28 | Mail Code | This is the mail code for the new person. | STRING |  |  |  | 
| service_section | 29 | Service/section | This is the name of the service or section for the new person. | POINTER |  | REQUIRED, INDEXED | {id:Service_section-49} | 
| date_entered | 30 | Date Entered | This is the date on which the user was entered into the user file.\rIt is automatically inserted into the file by the ADD USER option. | DATE-TIME |  |  |  | 
| creator | 31 | Creator | This is the name of the user who entered this user into the user file.\rIt is automatically set by the ADD USER option. | POINTER |  |  | [New_Person-200](New_Person-200.md) | 
| file_range | 31.1 | File Range | This field limits a user to a specific range of file numbers.  When\rcreating new files, only a number within this range can be assigned\rto the new file. | STRING |  |  |  | 
| text_terminator | 31.2 | Text Terminator | If specified, the character string in this field will be used instead\rof a carriage return to mark the end of word-processing text.  It will\rbe used in all VA FileMan word-processing contexts, e.g. in mail\rmessages.  It can facilitate the uploading of files from a PC\renvironment.\r \rNote that the VA FileMan edit menu provides an option for temporarily\rspecifying a text terminator for that edit session only. | STRING |  |  |  | 
| preferred_editor | 31.3 | Preferred Editor | If an entry exists in this field, then whenever a user edits data in a\rFileMan word-processing field, they will automatically be transferred into\rtheir preferred editor.  If this field is blank, then the default editor\rwill be either the FileMan screen editor when editing within ScreenMan\rformat, or the standard FileMan line editor in all other cases. | POINTER |  |  | {id:Alternate_Editor-1_2} | 
| accessible_file | 32 | Accessible File | This multiple-valued field contains the list of files the user may access.\rThe type of access granted to the user is included for each file that\rappears on the list.  The user may be allowed to look at records (READ\raccess), edit existing records (WRITE access), add new record (LAYGO\raccess), delete records (DELETE access), or modify the file structure\r(DATA DICTIONARY ACCESS). | [OBJECT] |  |  | [Accessible_File-200_032](#accessible_file-200_032)  | 
| allowed_to_use_spooler | 41 | Allowed To Use Spooler | If set to 'YES', this user will be able to use the spool device to\rcreate spool documents. | BOOLEAN |  |  | {false:n,true:y} | 
| multidevice_despooling | 41.1 | Multi-device Despooling | If set to 'YES', the user will be able to print (despool) a spooled\rdocument to more than one device simultaneously. | BOOLEAN |  |  | {false:n,true:y} | 
| can_make_into_a_mail_message | 41.2 | Can Make Into A Mail Message | If set to 'YES', the document is given the status of a mail message and\rthe user will be able to use all MailMan functions such as copying and\rforwarding.  As a mail message, the document can no longer be manipulated\rwith the spooler since its flag in the Spool Document File has been\rdeleted. | BOOLEAN |  |  | {false:n,true:y} | 
| authorize_release_of_npi | 41.97 | Authorize Release Of Npi | Answer 1 (Yes) if this disclosure of an individual practitioner's NPI is \rto a non-VA health care provider or its agent to support, or in \ranticipation of supporting, the submission of health care reimbursement \rclaims by non-VA health care providers or their agents (ex., display of \rFEE Basis authorizations). Per Routine Use Amendment #18 to the Privacy \rAct of 1974 this disclosure can be made without requiring consent \r(Blanket Authority) from the practitioner. | BOOLEAN |  |  | {true:1} | 
| npi_entry_status | 41.98 | Npi Entry Status | This field is used in tracking the entry status of NPI d ata for those\rproviders who require an NPI.  The providers needing this value are\ridentified based on data entered in the PERSON CLASS subfile which\rindicates providers that may be related to billing activities.\r \rThe value is initially set to N or NEEDS ENTRY.  It can be changed to E or\rEXEMPT for individuals who have been identified, but who due to\radministrative activities, etc., will not be involved in activities\rrequiring billing.  When the NPI value is entered, the value is changed to\rD or DONE. | ENUMERATION |  |  | <dl><dt>N</dt><dd>NEEDS ENTRY</dd><dt>D</dt><dd>DONE</dd><dt>E</dt><dd>EXEMPT</dd></dl> | 
| npi | 41.99 | Npi | Each VHA Billable Practitioner should have applied for the NPI through\rCMS' National Plan and Provider Enumeration System (NPPES).  NPI\rConfirmation Letters are sent by CMS and indicate the NPI assigned.\rPractitioners may present their NPI Confirmation Letter as a source\rdocument to verify the accuracy of the NPI or you may contact your Local\rNPI Maintenance Team Leader for assistance. | STRING |  | INDEXED |  | 
| effective_date_time | 42 | Effective Date/time |  | [OBJECT] |  |  | [Effective_Date_time-200_042](#effective_date_time-200_042)  | 
| key_delegation_level | 50.1 | Key Delegation Level | This a simple, numeric value which prevents removing delegated keys\rfrom someone with a lower level number. | NUMERIC |  |  |  | 
| keys | 51 | Keys | These are \keys\ that define the characteristic(s), authorization(s), or\rprivilege(s) of the person. | [OBJECT] |  |  | [Keys-200_051](#keys-200_051)  | 
| delegated_keys | 52 | Delegated Keys | This subfile contains pointers to the Key File of those keys that\rthis person is allowed to allocate to other users. | [OBJECT] |  |  | [Delegated_Keys-200_052](#delegated_keys-200_052)  | 
| authorized_to_write_med_orders | 53.1 | Authorized To Write Med Orders | This field is used to determin if the provider is authorized to write orders. | BOOLEAN |  |  | {true:1} | 
| detox_maintenance_id_number | 53.11 | Detox/maintenance Id Number | This field holds the Detoxification/Maintenance ID number used for the \rsubstance abuse providers that is \DATA-waived\. (one X, one alpha, \r7 numbers)\r\r\r | STRING |  |  |  | 
| deanumber | 53.2 | Dea# | This field is used to enter the Drug Enforcement Agency (DEA) number.\rEnter the DEA number as two upper case letters followed by 7 digits.\re.g., AA1234567.  Each provider must have a unique number.\r | STRING |  | INDEXED |  | 
| vanumber | 53.3 | Va# | This field is used to enter the VA number.\rThe VA number must be unique. | STRING |  | INDEXED |  | 
| inactive_date | 53.4 | Inactive Date | This field is used to show the inactive date of a provider whereas they\rcan no longer write orders. | DATE-TIME |  |  |  | 
| provider_class | 53.5 | Provider Class | This field is used to show the providers class. | POINTER |  |  | {id:Provider_Class-7} | 
| provider_type | 53.6 | Provider Type | This field is used to show the type of provider (staff, fee, etc.) | ENUMERATION |  |  | <dl><dt>4</dt><dd>FEE BASIS</dd><dt>3</dt><dd>C & A</dd><dt>1</dt><dd>FULL TIME</dd><dt>2</dt><dd>PART TIME</dd><dt>5</dt><dd>HOUSE STAFF</dd></dl> | 
| requires_cosigner | 53.7 | Requires Cosigner | This field is used to determine if the provider needs a cosigner. | BOOLEAN |  |  | {true:1} | 
| usual_cosigner | 53.8 | Usual Cosigner | This field is used to show the usual cosigner for the provider. | POINTER |  |  | [New_Person-200](New_Person-200.md) | 
| remarks | 53.9 | Remarks | This field is used to enter remarks and or comments about the provider. | STRING |  |  |  | 
| nonva_prescriber | 53.91 | Non-va Prescriber | The Transitional Pharmacy Care Project (TPB) introduces fields 53.91 - \r53.96, to allow a NON-VA Physician to be added to the New Person file\r(#200), so that Outpatient Pharmacy could process medication prescribed by\rsuch physicians.\r \rA value of 1 indicates that this person is a NON-VA Physician. | BOOLEAN |  |  | {false:0,true:1} | 
| tax_id | 53.92 | Tax Id | TAX ID of the NON-VA Physician's Private Clinic, where the prescription\rwas written. | STRING |  |  |  | 
| exclusionary_check_performed | 53.93 | Exclusionary Check Performed | Department of Health and Human Services provides an exclusionary list of\rMedical Practitioners (providers excluded are those who are not allowed to\rreceive payment for government services due to various reasons). When\radding NON-VA Physicians, they must be checked against this list.\r \rA value of 1 indicates that an Exclusionary Check was performed for this\rphysician. | BOOLEAN |  |  | {true:1} | 
| date_exclusionary_list_checked | 53.94 | Date Exclusionary List Checked | The date Exclusionary Check was performed. | DATE-TIME |  |  |  | 
| on_exclusionary_list | 53.95 | On Exclusionary List | Was the NON-VA Physician on the Exclusionary Check List?\rA value of 1 indicates that the Physician was on the Exclusionary Check. | BOOLEAN |  |  | {false:0,true:1} | 
| exclusionary_checked_by | 53.96 | Exclusionary Checked By | User ID of the person who made the entry. | POINTER |  |  | [New_Person-200](New_Person-200.md) | 
| licensing_state | 54.1 | Licensing State | This multiple contains credentialing information about a provider\rthat is used by the state. | [OBJECT] |  |  | [Licensing_State-200_541](#licensing_state-200_541)  | 
| state_issuing_dea_number | 54.2 | State Issuing Dea Number | This mutiple contains the DEA# issued by a state in order to allow\rproviders to write medication orders for controlled medications. | [OBJECT] |  |  | [State_Issuing_Dea_Number-200_55](#state_issuing_dea_number-200_55)  | 
| schedule_ii_narcotic | 55.1 | Schedule Ii Narcotic | This field is used to determine if the provider has privileges for \rSchedule II narcotic. | BOOLEAN |  |  | {false:0,true:1} | 
| schedule_ii_nonnarcotic | 55.2 | Schedule Ii Non-narcotic | This field is used to determine if the provider has privileges for \rSchedule II non-narcotic. | BOOLEAN |  |  | {false:0,true:1} | 
| schedule_iii_narcotic | 55.3 | Schedule Iii Narcotic | This field is used to determine if the provider has privileges for \rSchedule III narcotic. | BOOLEAN |  |  | {false:0,true:1} | 
| schedule_iii_nonnarcotic | 55.4 | Schedule Iii Non-narcotic | This field is used to determine if the provider has privileges for \rSchedule III non-narcotic. | BOOLEAN |  |  | {false:0,true:1} | 
| schedule_iv | 55.5 | Schedule Iv | This field is used to determine if the provider has privileges for \rSchedule IV controlled substances. | BOOLEAN |  |  | {false:0,true:1} | 
| schedule_v | 55.6 | Schedule V | This field is used to determine if the provider has privileges for \rSchedule V controlled substances. | BOOLEAN |  |  | {false:0,true:1} | 
| staff_review_required | 70 | Staff Review Required | This field applies to 'Interpreting Resident' personnel. If\rit contains a 'yes', an interpreting staff is required to\rreview this resident's report results. | BOOLEAN |  |  | {false:N,true:Y} | 
| allow_verifying_of_others | 71 | Allow Verifying Of Others | If this field is set to 'YES' and the 'ALLOW VERIFYING BY RESIDENTS'\rdivision parameter is also set to 'YES' then this resident is allowed to\rverify reports associated with another interpreting physician.  (If both\rparameters are set to 'YES' the 'On-line Verifying of Reports' option will\rprompt the user to 'Select Interpreting Physician: ' allowing the user to\rselect an interpreting physician other than him/herself.) If this field is\rset to 'NO' then this resident is only allowed to verify his/her own\rreports.  If the division parameter 'ALLOW VERIFYING BY RESIDENT' is set\rto 'NO' then regardless of how this field is set, the resident will not be\rallowed to verify other interpreting physicians' reports.\r \rIf the user is classified as Interpreting Staff, s/he will be allowed to\rselect another interpreting physician's name and reports if this field is\rset to 'YES'. | BOOLEAN |  |  | {false:n,true:y} | 
| rad_nuc_med_classification | 72 | Rad/nuc Med Classification | This multiple field contains information about the classification assigned\rto Rad/Nuc Med personnel.  Possible classifications are Technologist,\rInterpreting Resident, Interpreting Staff, and Clerk. | [ENUMERATION] |  |  | <dl><dt>R</dt><dd>resident</dd><dt>C</dt><dd>clerk</dd><dt>T</dt><dd>technologist</dd><dt>S</dt><dd>staff</dd></dl> | 
| rad_nuc_med_inactive_date | 73 | Rad/nuc Med Inactive Date | This field contains the date that this person was inactivated as a Rad/Nuc\rMed user. | DATE-TIME |  |  |  | 
| rad_nuc_med_location_access | 74 | Rad/nuc Med Location Access | This field will allow the user to access all data specific to a particular\rRadiology/Nuclear Medicine location. | [POINTER] |  |  | {id:Imaging_Locations-79_1} | 
| restrict_patient_selection | 101.01 | Restrict Patient Selection | Answer 'YES' to restrict this user to selecting only those patients\rassociated with the list pointed to by the PATIENT SELECTION LIST field\r(#101.02). | BOOLEAN |  |  | {false:1,true:0} | 
| patient_selection_list | 101.02 | Patient Selection List | If a value is entered into this field, the user is allowed to select only\rthose patients associated with this OE/RR LIST. | POINTER |  |  | {id:Oe_rr_List-100_21} | 
| cprs_tab | 101.13 | Cprs Tab |  | [OBJECT] |  |  | [Cprs_Tab-200_010113](#cprs_tab-200_010113)  | 
| problem_list_primary_view | 125 | Problem List Primary View | This string contains the user's preferred view of the problem list.\rProblems are assigned a category based upon the service of the provider\rwho entered and/or is treating the problem; a screen may then be invoked\rallowing a filtered view of the problem list. | STRING |  |  |  | 
| problem_selection_list | 125.1 | Problem Selection List | This is the user's preferred default list of problems to select from\rwhen adding to a patient's problem list.  If there is a list specified\rhere from the Problem Selection List File (#125), it will be automatically\rpresented to the user when the \Add New Problem(s)\ action is selected;\rotherwise, the user will simply be prompted to select a problem from\rthe Clinical Lexicon Utility. | POINTER |  |  | {id:Problem_Selection_List-125} | 
| multiple_signon | 200.04 | Multiple Sign-on | This field, if filled in, overrides the SITE and DEVICE Files as to\rwhether this user can sign-on to multiple terminals at the same time, \ror is limited to one workstation (IP), only one connection.\rIf you select \Only one IP\ be sure to put a value into the \MULTIPLE\rSIGN-ON LIMIT\ field so users can sign-on at least once.\rValues are:\r0 = Only one connection.\r1 = Multiple connections from multiple IP's.\r2 = Only one IP address. | ENUMERATION |  |  | <dl><dt>2</dt><dd>Only one IP</dd><dt>0</dt><dd>NOT ALLOWED</dd><dt>1</dt><dd>ALLOWED</dd></dl> | 
| ask_device_type_at_signon | 200.05 | Ask Device Type At Sign-on | This field controls if the user/terminal should be asked for a terminal\rtype during sign-on. If set to YES then the system will try and get the\rterminal type from the terminal. If this doesn't work, then user is\rprompted. If set to NO then the one from the users Last Sign-on field or\rthe device subtype will be used. | ENUMERATION |  |  | <dl><dt>1</dt><dd>ASK</dd><dt>0</dt><dd>DON'T ASK</dd></dl> | 
| auto_menu | 200.06 | Auto Menu | This field controls whether the user will see menus automatically\rdisplayed (as if he had typed a \?\) each time a new option is presented. | ENUMERATION |  |  | <dl><dt>0</dt><dd>NO MENUS GENERATED</dd><dt>1</dt><dd>YES, MENUS GENERATED</dd></dl> | 
| language | 200.07 | Language | The value in this field replaces the Default Language field in the\rKernel Site Parameters file.  It points to the Language file\rfor the VA FileMan Dialog file. | POINTER |  |  | {id:Language-_85} | 
| reserved | 200.08 | Reserved | Place holder, see file 3.5 #51.8 | STRING |  |  |  | 
| typeahead | 200.09 | Type-ahead | If type ahead is selected, the user will be able to type text ahead\rof what the computer is actually reading.  The computer stores the\rkeystrokes from the user, which may be confusing if the computer is slow\rbut more efficient if the user is careful. | ENUMERATION |  |  | <dl><dt>N</dt><dd>NOT ALLOWED</dd><dt>Y</dt><dd>ALLOWED</dd></dl> | 
| timed_read_number_of_seconds | 200.1 | Timed Read (# Of Seconds) | This field, if filled in, overrides the SITE and DEVICE files as to\rthe time this user has to respond to a timed read.  Stored in DTIME. | NUMERIC |  |  |  | 
| always_show_secondaries | 200.11 | Always Show Secondaries | This field is a flag used by the menu system to control if\rthe user is shown there secondary menu list with one '?' or two. | BOOLEAN |  |  | {true:1} | 
| auto_signon | 200.18 | Auto Sign-on | This field will control if the Auto Sign-on (Single Sign-on) is enabled\rfor use with terminal sessions. | BOOLEAN |  |  | {false:1,true:0} | 
| multiple_signon_limit | 200.19 | Multiple Sign-on Limit | This field, if filled in, overrides the SITE file. This field sets an\rupper limit on the number of concurrent sessions that this user can have\rfrom one IP address when the Multiple Sign-on field (#204) is set to \One\rIP\ | NUMERIC |  |  |  | 
| primary_menu_option | 201 | Primary Menu Option | This is the menu option that this user will be dropped into\rif none of the following are set: (in the order checked)\rTied routine, Device primary menu. | POINTER |  | INDEXED | {id:Option-19} | 
| primary_window | 201.1 | Primary Window | This is the lead or first window launched at startup. | POINTER |  |  | {id:Option-19} | 
| startup_default | 201.2 | Startup Default | This field determines if the Primary Menu or the Primary Window is\rloaded at logon. | ENUMERATION |  |  | <dl><dt>W</dt><dd>Primary Window</dd><dt>M</dt><dd>Primary Menu Option</dd></dl> | 
| last_signon_date_time | 202 | Last Sign-on Date/time | This field is set when a user signs on to the system. | DATE-TIME |  |  |  | 
| xus_logon_attempt_count | 202.02 | Xus Logon Attempt Count | This is used to let the user know about unsuccessful logon atempts. | NUMERIC |  |  |  | 
| xus_active_user | 202.03 | Xus Active User | If a user gets the ** MULTIPULE SIGN-ON NOT ALLOWED ** message\rthis field can be set to NO to allow them to sign-on again.\rThis flag is set by XUS and XUSCLEAN. | BOOLEAN |  |  | {false:1,true:0} | 
| entry_last_edit_date | 202.04 | Entry Last Edit Date | This field holds the date time this entry in the file was last edited.\rThe following fields now trigger the current date to the ENTRY LAST EDIT\rDATE field: DISUSER (#7), ACCESS CODE (#2), and TERMINATION DATE (#9.2).  | DATE-TIME |  |  |  | 
| lockout_user_until | 202.05 | Lockout User Until | This field is used by the signon code to lockout users that have\rtried bad VERIFY codes too many times.  This field holds the date/time \rthat the user should be locked out of the system until.\rIt is set with the current time plus the lockout time. | DATE-TIME |  |  |  | 
| last_option_accessed | 202.1 | Last Option Accessed | This field holds the last option accessed by the user, when the user\rselects the CONTINUE option instead of HALTing.  When the user logs\ron again, he will be able to continue directly at that option. | POINTER |  |  | {id:Option-19} | 
| last_option_main_menu | 202.2 | Last Option Main Menu | This field holds an indicator of which primary or secondary menu a\ruser was in, after selecting the CONTINUE option.  It is used in con-\rjunction with the LAST OPTION ACCESSED to resume when a user logs back\ron. | STRING |  |  |  | 
| secondary_menu_options | 203 | Secondary Menu Options | Options awarded a user not on his or her primary menu option | [OBJECT] |  |  | [Secondary_Menu_Options-200_03](#secondary_menu_options-200_03)  | 
| timestamp | 203.1 | Timestamp | This is the time at which this option was last modified.  It is triggered\rautomatically by the appropriate fields.  If a CPU references an option\rwhich has been modified since it was last rebuilt, it triggers a rebuilding\rof the options. | STRING |  |  |  | 
| secid | 205.1 | Secid | Identity and Access Management SECID field used to uniquely identify a \rVistA user by Security ID.\r \r*** This field should never be edited directly - do not remove WRITE \rACCESS! | STRING |  | INDEXED |  | 
| subject_organization | 205.2 | Subject Organization | Identity and Access Management SUBJECT ORGANIZATION field used to \ridentify the Organization of an externally authenticated user (Subject). \rExamples: \Department of Veterans Affairs\ or \Department of Defense\\r \r*** This field should never be edited directly - do not remove WRITE \rACCESS! | STRING |  |  |  | 
| subject_organization_id | 205.3 | Subject Organization Id | Identity and Access Management SUBJECT ORGANIZATION ID field used to \runiquely identify the Organization that is providing the identification \rfor an externally authenticated user (Subject). The organization ID \rmay be an Object Identifier (OID), using the urn format (that is, \r\urn:oid:\ appended with the OID); or it may be a URL assigned to \rthat organization. For SSOi this will be hard-coded to Department of \rVeterans Affairs official Home Community ID. NHIN standards specify that\rthe web address of the Subject Organization is typically stored in this\rfield (example: http://familymedicalclinic.org).\r \r*** This field should never be edited directly - do not remove WRITE \rACCESS! | STRING |  |  |  | 
| unique_user_id | 205.4 | Unique User Id | Identity and Access Management UNIQUE USER ID field used to uniquely \ridentify a user (Subject) within the Subject Organization. The combination\rof Subject Organization ID (OID) and Unique User ID (UID) is\rcross-referenced in VistA and must be unique. For VA SSOi, this will be \rthe user SecID. Within NHIN this could be the subject of the NHIN SAML \rtoken which would contain email address of a X.509 name.\r \r*** This field should never be edited directly - do not remove WRITE \rACCESS! | STRING |  |  |  | 
| adupn | 205.5 | Adupn | Identity and Access Management Active Directory User Principle Name (AD \rUPN) field. | STRING |  | INDEXED |  | 
| personal_diagnoses_list | 351 | Personal Diagnoses List | This is the provider's personal list of preferred diagnoses codes. | [OBJECT] |  |  | [Personal_Diagnoses_List-200_0351](#personal_diagnoses_list-200_0351)  | 
| supply_employee | 400 | Supply Employee |  | ENUMERATION |  |  | <dl><dt>1</dt><dd>WAREHOUSE</dd><dt>2</dt><dd>PPM ACCOUNTABLE OFFICER</dd><dt>4</dt><dd>MANAGER</dd><dt>3</dt><dd>PURCHASING AGENT</dd></dl> | 
| paid_employee | 450 | Paid Employee | This field is a pointer to the PAID EMPLOYEE (#450) file. | POINTER |  |  | {id:Paid_Employee-450} | 
| network_address | 500 | Network Address | This is the begining of a network address.  Enter the Lastname of the user\ror an identifier that he is known as on the receiving system. | [OBJECT] |  |  | [Network_Address-200_005](#network_address-200_005)  | 
| network_username | 501.1 | Network Username | This is the username that is used by the Windows Active Directory.\rIt should be 'VHA' + 3 char station ID + first 5 of last name + first\rcharacter of first name.\rHolders of the XUMGR key can override this. | STRING |  |  |  | 
| subject_alternative_name | 501.2 | Subject Alternative Name | This is a name from the PIV card field SUBJECT ALTERNATIVE NAME\ralso known as USER PRINCIPLE NAME. \r \rThe subject alternative name extension allows identities to be bound\rto the subject of the certificate.  These identities may be included\rin addition to or in place of the identity in the subject field of\rthe certificate.  Subject alternative name is defined by an Internet \relectronic mail address.\r \rWhen the subjectAltName extension contains an Internet mail address,\rthe address MUST be stored in the rfc822Name.\r | STRING |  | INDEXED |  | 
| social_worker_ | 654 | Social Worker ? | This field will be used to indicate if the user is a Social Worker.\rIt will also act as a screen for lookups. | BOOLEAN |  |  | {false:0,true:1} | 
| immediate_supervisor | 654.1 | Immediate Supervisor | This field is used to indicate the immediate supervisor of the social worker. | POINTER |  | INDEXED | [New_Person-200](New_Person-200.md) | 
| position_title | 654.15 | Position/title | This field will be used to indicate the position/title of the social worker. | ENUMERATION |  |  | <dl><dt>4</dt><dd>SW COORDINATOR</dd><dt>3</dt><dd>SUPERVISOR</dd><dt>1</dt><dd>SW CHIEF</dd><dt>2</dt><dd>ASST. CHIEF</dd><dt>5</dt><dd>SOCIAL WORKER</dd><dt>10</dt><dd>VOLUNTEER</dd><dt>6</dt><dd>SW ASSOCIATE</dd><dt>9</dt><dd>STUDENT</dd><dt>8</dt><dd>SW CLERK/STENO</dd><dt>11</dt><dd>WOC</dd><dt>7</dt><dd>SECRETARY</dd></dl> | 
| social_workers_number | 654.2 | Social Worker's Number | Unique number assigned to social worker by service.  Enter a number 01-999. | NUMERIC |  | INDEXED |  | 
| surrogate | 654.3 | Surrogate | This field will be used to indicate a surrogate supervisor.  When this\rfield has data, the surrogate supervisor will have access to data pertaining\rto worker information for the surrogated supervisor. | POINTER |  | INDEXED | [New_Person-200](New_Person-200.md) | 
| dmms_units | 720 | Dmms Units | This multiple field contains the DMMS units to which this person has\raccess for entering data and generating reports. | [POINTER] |  |  | {id:Dss_Unit-724} | 
| appointment_status | 747.11 | Appointment Status | Contains the Appointment Status for this person. | ENUMERATION |  |  | <dl><dt>1</dt><dd>FULL-TIME</dd><dt>5</dt><dd>RESIDENT</dd><dt>3</dt><dd>CONSULTING</dd><dt>4</dt><dd>CONTRACT</dd><dt>6</dt><dd>FEE BASIS, ON STATION</dd><dt>2</dt><dd>PART-TIME</dd><dt>9</dt><dd>OTHER</dd><dt>7</dt><dd>SPECIALTY FELLOW</dd><dt>8</dt><dd>WOC</dd></dl> | 
| renew_date | 747.113 | Renew Date | Contains the Renewal Date for our General Privilege. | DATE-TIME |  |  |  | 
| dea_expiration_date | 747.44 | Dea Expiration Date | This field contains the expiration date for DEA #. | DATE-TIME |  |  |  | 
| enumeration_initiated | 900 | Enumeration Initiated | This field notes the date/time the VPID enumeration attempt was \rinitiated. | DATE-TIME |  |  |  | 
| enumeration_completed | 901 | Enumeration Completed | This field notes the date/time the VPID assignment was completed. | DATE-TIME |  |  |  | 
| requires_transmission | 902 | Requires Transmission | This field is used to note that this record was just added to this file, \ror that an edit was made to the fields that MPI cares about capturing and \ra VPID needs to be assigned or an update message needs to be sent.\r \rFields being monitored for change are:\r \r .01           NAME \r .111          STREET ADDRESS 1 \r .112          STREET ADDRESS 2 \r .113          STREET ADDRESS 3 \r .114          CITY \r .115          STATE \r .116          ZIP CODE \r .131          PHONE (HOME) \r 4             SEX \r 5             DOB \r 9             SSN \r 41.99         NPI \r 53.2          DEA# \r 200.06,.01    VISITED FROM \r 200.06,2      DUZ AT HOME SITE | BOOLEAN |  |  | {true:Y} | 
| badge_number | 910.1 | Badge Number | Enter the badge number assigned to the VA police officer. | NUMERIC |  |  |  | 
| rank | 910.2 | Rank | Enter the VA police officer's assigned rank designation, i.e., CHIEF,\rLIEUTENANT, PATROL OFFICER, etc. | STRING |  |  |  | 
| visited_from | 8910 | Visited From | This subfile stores the information that travels along with visitors using\rthe CPRS Foreign Views software to look at medical data of a patient which\rresides on a system where the visitor may not have valid access or verify\rcodes.  When that person name and Social Security Number is put into the\rvisited system's New Person File this multiple is updated to provide the\rability to trace the visitors back to the system from which they are\rvisiting.  This field (.01) stores the number of the site where the\rvisitor was authenticated. | [OBJECT] |  |  | [Visited_From-200_06](#visited_from-200_06)  | 
| mutually_exclusive_keys | 8911 | Mutually Exclusive Keys |  | [POINTER] |  |  | {id:Security_Key-19_1} | 
| person_class | 8932.1 | Person Class |  | [OBJECT] |  |  | [Person_Class-200_05](#person_class-200_05)  | 
| pgyear | 8932.2 | Pgyear | This field holds what Post Graduate year a person is. | NUMERIC |  |  |  | 
| pgy_assigned | 8932.21 | Pgy Assigned | This field holds the date that the PGYear field was last edited. | DATE-TIME |  |  |  | 
| fyear | 8932.3 | Fyear | This field is the Fellowship year of a person. | NUMERIC |  |  |  | 
| fy_assigned | 8932.31 | Fy Assigned | This field holds the Date that the FYear field was edited. | DATE-TIME |  |  |  | 
| person_file_pointer | 8980.16 | Person File Pointer | This field holds a pointer to the person file so there will be a way to\rprovide a cross reference to help convert 'person file' pointers into\r'new person file' pointer after the person file is removed. |  |  |  |  | 
| display_help_at_entry_to_lm | 8983.11 | Display Help At Entry To Lm | If set to yes, a help text will be displayed before entering the editor.\rThis is used primarily for new users. | BOOLEAN |  |  | {false:n,true:y} | 
| ask_terminal_type_at_lm_entry | 8983.12 | Ask Terminal Type At Lm Entry | If set to yes, the terminal type will be asked upon entry to the editor. | BOOLEAN |  |  | {false:n,true:y} | 
| default_terminal_type_for_lm | 8983.13 | Default Terminal Type For Lm | This field stores the default terminal type for a user. | POINTER |  |  | {id:Terminal_Type-3_2} | 
| display_lm_commands | 8983.14 | Display Lm Commands | If set to yes, the list of commands will be displayed at the bottom\rof the screen when entering the command mode. | BOOLEAN |  |  | {false:n,true:y} | 
| bright_chars_at_exit_from_lm | 8983.15 | Bright Chars At Exit From Lm | If set to yes, the terminal will be left in high intensity after exiting. | BOOLEAN |  |  | {false:n,true:y} | 
| date_last_accessed_lm_wp | 8983.16 | Date Last Accessed Lm Wp | The date and time a user last accessed the LetterMan word processor\rdocument editor. | DATE-TIME |  |  |  | 
| total_minutes_using_lm_wp | 8983.17 | Total Minutes Using Lm Wp | The total minutes a user has used the LetterMan word processor\rdocument editor. | NUMERIC |  |  |  | 
| keystrokes_from_lm_wp | 8983.18 | Keystrokes From Lm Wp | This field stores the total number of keystrokes a user has typed from\rthe word processor document editor. | NUMERIC |  |  |  | 
| spelling_exception_dictionary | 8983.5 | Spelling Exception Dictionary | This field stores the exception spelling dictionary for the user. | [STRING] |  |  |  | 
| defined_formats_for_lm | 8983.51 | Defined Formats For Lm | This field is used to store predefined format lines which a user can\rselect from during editing. | [OBJECT] |  |  | [Defined_Formats_For_Lm-200_0089832](#defined_formats_for_lm-200_0089832)  | 
| defined_phrases_for_lm | 8983.52 | Defined Phrases For Lm | This field stores predefined phrases which can be inserted into the document during editing. | [OBJECT] |  |  | [Defined_Phrases_For_Lm-200_0089833](#defined_phrases_for_lm-200_0089833)  | 
| lm_limit_wp_fields_to_edit | 8983.6 | Lm Limit Wp Fields To Edit | This field is used by the user to limit which word processing\rfields should be edited by LetterMan. | [STRING] |  |  |  | 
| vpid | 9000 | Vpid | The VA Person Identification Number which was assigned by the Person\rService central system.  Used to uniquely identify a Person. | STRING |  | INDEXED |  | 
| ess_people | 776000 | Ess People |  | STRING |  |  |  | 
| ess_customer_id | 776001 | Ess Customer Id |  | STRING |  |  |  | 

## User_Class-200_07 

 property | value 
--- | --- 
 id | User_Class-200_07
 label | User Class

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
| user_class | .01 | User Class |  | POINTER |  | REQUIRED, INDEXED | {id:User_Class-201} | 
| isprimary | 2 | Isprimary | This field notes if this User Class is the primary User Class for this \ruser.  If returning just one User Class then this is the one to be \rreturned. | BOOLEAN |  |  | {false:1,true:0} | 

## Division-200_02 

 property | value 
--- | --- 
 id | Division-200_02
 label | Division

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
| division | .01 | Division | The name of a Division that this user may sign on to. | POINTER |  | REQUIRED, INDEXED | [Institution-4](Institution-4.md) | 
| default | 1 | Default | This field is used to indicate that a particular division should be\rpresented to the user as a default when selecting a division.  This will\ronly affect users that have more than one division.\rA cross reference will only allow one entry to have this flag set. | BOOLEAN |  |  | {false:0,true:1} | 

## Alert_Date_Time-200_194 

 property | value 
--- | --- 
 id | Alert_Date_Time-200_194
 label | Alert Date Time

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
| alert_date_time | .01 | Alert Date Time | This is the date and time when the alert was generated. | DATE-TIME |  | REQUIRED |  | 
| package_id | .02 | Package Id | This is a field in which the package id passed during alert filing.  This\rid may simply be a package namespace, or it may be a namespace followed by\radditional data to more accurately identify the type or purpose of the\ralert. | STRING |  |  |  | 
| message_text | .03 | Message Text | This field contains the text of the message to be presented to the user at\rthe time when he cycles through the menu system the first time after the\ralert has been filed for the user, and when the user selects the VIEW\rALERTS option. | STRING |  |  |  | 
| new_alert_flag | .04 | New Alert Flag | This flag is used by the alert processing to indicate a new alert which\rhas not previously been presented to the user.  After the alert message\rtext has been shown to the user, this flag is cleared and the user must\rthen select the VIEW ALERTS option to process the alert. | ENUMERATION |  |  | <dl><dt>1</dt><dd>NEW</dd></dl> | 
| action_flag | .05 | Action Flag | This flag is optional at the present time, since the need for action\rprocessing can be determined by the presence of an option name or a\rroutine name for use during alert processing. | ENUMERATION |  |  | <dl><dt>R</dt><dd>RUN ROUTINE</dd><dt>I</dt><dd>IMMEDIATE RUN</dd><dt>D</dt><dd>DELETE</dd></dl> | 
| reserved1 | .06 | Reserved1 | This field is reserved for future use by the alert system. | STRING |  |  |  | 
| entry_point | .07 | Entry Point | While named ENTRY POINT, this is a dual function field.  If the next field\r(#.08, AROUTINE NAME) contains a routine name, this field contains the\rdesired entry point within that routine (this field may also be null,\rindicating that the entry point should be at the top of the routine).  If\rfield #.08 is null, then the contents of this field is interpreted as the\rname of an option which is to be entered when the alert is processed. | STRING |  |  |  | 
| aroutine_name | .08 | Aroutine Name | If this field is not null, it contains the name of a routine which is to\rbe used when the alert is processed.  If there is also a value in field\r#.07, that value is used as an entry point into the routine specified in\rthis field.\r \rIf this field is null, field #.07 is interpreted as an option name which\ris to be used when the alert is processed.\r \rIf both this field and field #.07 are null, the alert is processed as an\rinformation only alert. | STRING |  |  |  | 
| reserved_field | .09 | Reserved Field | This field is reserved for future use in the alert processing system. | STRING |  |  |  | 
| first_data_piece | .1 | First Data Piece | This field and all following ^-separated fields are processed as a single\rentity and are returned in the variable XQADATA for use by the application\rwhich generated the alert.  The package may pass a series of variables\rusing any desired separator in the variable XQADATA at the time the alert\ris setup.  When the alert is processed the value of XQADATA is returned to\rthe application and may be used to establish parameters related to the\ralert without requiring interaction or provision of information by the\ruser.  In this way information related to patient entry number, specific\rinternal numbers for the desired data, etc may be stored and returned. | STRING |  |  |  | 
| data_string | 1 | Data String |  | STRING |  |  |  | 

## Delegated_Options-200_19 

 property | value 
--- | --- 
 id | Delegated_Options-200_19
 label | Delegated Options

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
| delegated_options | .01 | Delegated Options | This field identifies which options this user may delegate to others. | POINTER |  | REQUIRED, INDEXED | {id:Option-19} | 
| delegated_by | 1 | Delegated By | This field indicates who granted authority for this user to delegate\rthis option to others. | POINTER |  |  | [New_Person-200](New_Person-200.md) | 
| date_delegated | 2 | Date Delegated | This field records the date when this option was added to the list\rof options this user may delegate to others. | DATE-TIME |  |  |  | 
| editable | 3 | Editable | This field indicates whether this use is allowed to edit this option. | BOOLEAN |  |  | {false:1,true:0} | 

## Menu_Template-200_198 

 property | value 
--- | --- 
 id | Menu_Template-200_198
 label | Menu Template

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
| menu_template | .01 | Menu Template |  | STRING |  | REQUIRED, INDEXED |  | 
| pathway | 1 | Pathway | This multiple contains the information on the option sequence specified\rfor a given MENU TEMPLATE. | STRING |  |  |  | 

## Uci-200_01 

 property | value 
--- | --- 
 id | Uci-200_01
 label | Uci

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
| uci | .01 | Uci | This is one of a set of UCI's that this user may choose to work in\rat sign-on time. | STRING |  | REQUIRED, INDEXED |  | 
| routines_rn1rn2 | 2 | Routines (rn1:rn2) | This is a list of routines that the user may choose to run when signing on\rto this UCI.  The routines are seperated by ':'s. | STRING |  |  |  | 

## Accessible_File-200_032 

 property | value 
--- | --- 
 id | Accessible_File-200_032
 label | Accessible File

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
| file_number | .001 | File Number | When defined, this field makes the sub-file's internal entry number\raccessible for inquiry and edit. | IEN |  |  |  | 
| accessible_file | .01 | Accessible File |  | POINTER |  | REQUIRED, INDEXED | {id:File-1} | 
| data_dictionary_access | 1 | Data Dictionary Access | This field is a flag that, when set to 1, gives the user data dictionary\raccess to the file (in the .01 field) represented in this record. | BOOLEAN |  |  | {false:0,true:1} | 
| delete_access | 2 | Delete Access | This field is a flag that, when set to 1, gives the user delete access to\rthe file (in the .01 field) represented in this record. | BOOLEAN |  |  | {false:0,true:1} | 
| laygo_access | 3 | Laygo Access | This field is a flag that, when set to 1, gives the user LAYGO access to\rthe file (in the .01 field) represented in this record. | BOOLEAN |  |  | {false:0,true:1} | 
| read_access | 4 | Read Access | This field is a flag that, when set to 1, gives the user read access to\rthe file (in the .01 field) represented in this record. | BOOLEAN |  |  | {false:0,true:1} | 
| write_access | 5 | Write Access | This field is a flag that, when set to 1, gives the user write access to\rthe file (in the .01 field) represented in this record. | BOOLEAN |  |  | {false:0,true:1} | 
| audit_access | 6 | Audit Access | This field is a flag that, when set to 1, gives the user audit access to\rthe file (in the .01 field) represented in this record. | BOOLEAN |  |  | {false:0,true:1} | 

## Effective_Date_time-200_042 

 property | value 
--- | --- 
 id | Effective_Date_time-200_042
 label | Effective Date/time

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
| effective_date_time | .01 | Effective Date/time | This field contains the date and time of the last change to the NPI field. | DATE-TIME |  | REQUIRED, INDEXED |  | 
| status | .02 | Status | The Status of an NPI is either 'ACTIVE' or 'INACTIVE'. I 'ACTIVE' then \rthe NPI will be accessible by end-users to document a particular \rprovider. If 'INACTIVE', then the NPI will only be accessible by the \rapplication to display legacy data. | ENUMERATION |  | REQUIRED | <dl><dt>1</dt><dd>ACTIVE</dd><dt>0</dt><dd>INACTIVE</dd></dl> | 
| npi | .03 | Npi | Each VHA Billable Practitioner should have applied for the NPI through\rCMS' National Plan and Provider Enumeration System (NPPES).  NPI\rConfirmation Letters are sent by CMS and indicate the NPI assigned.\rPractitioners may present their NPI Confirmation Letter as a source\rdocument to verify the accuracy of the NPI or you may contact your Local\rNPI Maintenance Team Leader for assistance. | STRING |  | REQUIRED, INDEXED |  | 

## Keys-200_051 

 property | value 
--- | --- 
 id | Keys-200_051
 label | Keys

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
| key | .01 | Key | This is a security key that this person holds. | POINTER |  | REQUIRED, INDEXED | {id:Security_Key-19_1} | 
| given_by | 1 | Given By | This is a pointer to the person that entered this security  key into this\rpersons file. | POINTER |  |  | [New_Person-200](New_Person-200.md) | 
| date_given | 2 | Date Given | This is the date that the security key was given to the person.\rThere is know history. | DATE-TIME |  |  |  | 
| review_date | 3 | Review Date | This is the date after which the persons need for this security key should\rbe reviewed. | DATE-TIME |  |  |  | 

## Delegated_Keys-200_052 

 property | value 
--- | --- 
 id | Delegated_Keys-200_052
 label | Delegated Keys

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
| delegated_key | .01 | Delegated Key | This is a security key that this person my allocate to another person. | POINTER |  | REQUIRED, INDEXED | {id:Security_Key-19_1} | 
| delegated_by | 1 | Delegated By | This is the person that gave the security key that may be delegated. | POINTER |  |  | [New_Person-200](New_Person-200.md) | 
| date_delegated | 2 | Date Delegated | This is the date that the security key was given to be delegated. | DATE-TIME |  |  |  | 
| may_redelegate | 3 | May Re-delegate | Re-delegation means that the person has total control over the key,\rthe person may not only delegate the key to others but may also give\rothers the authorization to delegate it. | ENUMERATION |  |  | <dl><dt>1</dt><dd>YES</dd><dt>0</dt><dd>no</dd><dt>1</dt><dd>yes</dd><dt>0</dt><dd>NO</dd></dl> | 

## Licensing_State-200_541 

 property | value 
--- | --- 
 id | Licensing_State-200_541
 label | Licensing State

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
| licensing_state | .01 | Licensing State | This is the state issuing a license to practice medicine for a provider. | POINTER |  | REQUIRED, INDEXED | {id:State-5} | 
| license_number | 1 | License Number | This is the licence number that was issued to a provider by the sate\rhe is licenced in. | STRING |  | REQUIRED |  | 
| expiration_date | 2 | Expiration Date | This is the expiration date of the provider's licence issued by the state.\rby the state. | DATE-TIME |  | REQUIRED |  | 

## State_Issuing_Dea_Number-200_55 

 property | value 
--- | --- 
 id | State_Issuing_Dea_Number-200_55
 label | State Issuing Dea Number

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
| state_issuing_dea_number | .01 | State Issuing Dea Number | This is the state which has issued a State DEA# to a provider.  Not all\rstates require a seperate DEA # | POINTER |  | REQUIRED, INDEXED | {id:State-5} | 
| state_dea_number | 1 | State Dea Number | This is the DEA # issued by an individual state, it is not required\rby all states and in some cases may be the same as the Federal\rDEA #. | STRING |  | REQUIRED |  | 

## Cprs_Tab-200_010113 

 property | value 
--- | --- 
 id | Cprs_Tab-200_010113
 label | Cprs Tab

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
| cprs_tab | .01 | Cprs Tab | This is a pointer to the OR CPRS TABS (#101.13) file. Enter the name of\rthe CPRS tab for which you want to set effective and expiration dates for\raccess for this user. | POINTER |  | REQUIRED, INDEXED | {id:Or_Cprs_Tabs-101_13} | 
| effective_date | .02 | Effective Date | This is the effective date of access to the CPRS tab. | DATE-TIME |  | REQUIRED |  | 
| expiration_date | .03 | Expiration Date | This is the expiration date of access to the CPRS tab. | DATE-TIME |  |  |  | 

## Secondary_Menu_Options-200_03 

 property | value 
--- | --- 
 id | Secondary_Menu_Options-200_03
 label | Secondary Menu Options

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
| secondary_menu_options | .01 | Secondary Menu Options | This is an option which is merged with the users primary menu\rand XUCOMMAND option, giving the user this option on all of her/his\rmenus. | POINTER |  | REQUIRED, INDEXED | {id:Option-19} | 
| synonym | 2 | Synonym | This is a user-specific synonym which may be used in addressing this\roption. | STRING |  |  |  | 

## Personal_Diagnoses_List-200_0351 

 property | value 
--- | --- 
 id | Personal_Diagnoses_List-200_0351
 label | Personal Diagnoses List

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
| diagnosis | .01 | Diagnosis | A diagnosis in the provider's preferred list. | POINTER |  | REQUIRED, INDEXED | [Icd_Diagnosis-80](Icd_Diagnosis-80.md) | 
| expression | 1 | Expression | This is the diagnosis code's Lexicon\rexpression as stored in the EXPRESSION file,\rfile # 757.01. | POINTER |  |  | [Expressions-757_01](Expressions-757_01.md) | 

## Network_Address-200_005 

 property | value 
--- | --- 
 id | Network_Address-200_005
 label | Network Address

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
| network_address_lastname | .01 | Network Address Lastname | This is the last name of the user. | STRING |  | REQUIRED, INDEXED |  | 
| network_address_first_name | 1 | Network Address First Name | The recipient's first name should be entered into this field. | STRING |  | REQUIRED |  | 
| x400_user_id | 2 | X.400 User Id | Enter a string that uniquely identifies the user at the remote system. | STRING |  |  |  | 
| generation | 3 | Generation | The generation of the recipient is a suffix that further identifies him.\rCommon strings used as such suffixes are: 'junior', 'senior', 'III'. | STRING |  |  |  | 
| country | 4 | Country | All X.400 addresses require a 'country'.  If no country is known this system\rwill not deliver the mail.  As of 11/90 'US' was the only valid country.\rSMTP addresses such as 'name@domain' where domain ends with such strings as\r'.EDU' need no country. | ENUMERATION |  |  | <dl><dt>US</dt><dd>US</dd></dl> | 
| organization | 5 | Organization | If you are filling in this field for an X.400 address, it is a standard\rfield.  If, however, you are filling in this field for an SMTP address,\ryou must fill in the third level of the domain.  For example, the third\rlevel of the domain 'SILVER.FORUM.VA.GOV' is the string after the second\r\.\ starting from the right.  'GOV' is the first.  'VA' is the second.\r'SILVER' is the fourth level. | STRING |  |  |  | 
| organizational_unit_sub0 | 5.1 | Organizational Unit Sub0 | This field contains the 'Orgainzational Unit' of the address if it is the\raddress of an X.400 recipient.  IF it is the address of an SMTP recipient,\rthis is the FOURTH LEVEL NAME of the DOMAIN.  See the ORGANIZATION field\rfor a description of domain levels of SMTP domains. | STRING |  |  |  | 
| organizational_unit_sub1 | 5.2 | Organizational Unit Sub1 | The Organizational Unit field of X.400 recipients is infinitely repeating.\rThis system will only be able to handle 4 levels of Organizational Units.\rSMTP domains also have levels.  Each Organizational Unit 'subn' field is\ra deeper definition (and level) of the SMTP domain.  'Sub1' is the fift\rlevel of the domain field.  'Sub2' is the sixth level. 'Sub3' is the seventh.\rSee the description of the ORGANIZATION field for further information on\rlevels of SMTP domains. | STRING |  |  |  | 
| organizational_unit_sub2 | 5.3 | Organizational Unit Sub2 | See the description of the 'ORGANIZATIONAL UNIT sub1' field for further\rinformation. | STRING |  |  |  | 
| organizational_unit_sub3 | 5.4 | Organizational Unit Sub3 | See the description of the 'ORGANIZATIONAL UNIT SUB1' field for further\rinformation. | STRING |  |  |  | 
| locality | 6 | Locality |  | STRING |  |  |  | 
| application_entity | 7 | Application Entity | The 'Application Entity' field is the name of a piece of software that will\rreceive and process any messages it receives. | STRING |  |  |  | 
| private_administrative_domain | 98 | Private Administrative Domain | For X.400 addresses this field is standard.  For mapping into the SMTP\rmail system (MailMan is an SMTP mail system.), this field is filled in\rwith a special string.  'DHCP' will be interpreted as \.VA.GOV\ for all\rDepartment of Veterans' Affairs SMTP systems.  If the address does have\r\DHCP' in this field, MailMan will try to deliver it to a VA site.  If\rthe address has anything else, MailMan will try to deliver to an X.400\rsystem as of 11/90.  Later there may be additional special PRMDs. | STRING |  |  |  | 
| administrative_domain | 99 | Administrative Domain | The Administrative domain is the carrier of the electronic channels.  Some\rexamples of carriers in the US are US SPRINT, AT&T and MCI Communications.\rThis field is required only for X.400 addresses. | STRING |  |  |  | 

## Visited_From-200_06 

 property | value 
--- | --- 
 id | Visited_From-200_06
 label | Visited From

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
| visited_from | .01 | Visited From | This field holds the official Station Number ID of the remote site that\rdid the user authentication. This may be the site that caused this user to\rbe added to the NPF. | STRING |  | REQUIRED, INDEXED |  | 
| site_name | 1 | Site Name | This field contains the name of the site where the visitor was\rauthenticated. | STRING |  |  |  | 
| duz_at_home_site | 2 | Duz At Home Site | This field contains the internal entry number in the New Person File at\rthe site where this visitor was authenticated. | NUMERIC |  |  |  | 
| first_visit | 3 | First Visit | This field contains the date when this visitor first visited from the site\rrecorded in the .01 field. | DATE-TIME |  |  |  | 
| last_visited | 4 | Last Visited | This field is updated each time a visitor arrives from the site in the .01\rfield. | DATE-TIME |  |  |  | 
| phone_at_site | 5 | Phone At Site | This field may contain a phone number for the visitor at their home site.\rSince phone numbers are not always entered, this field may be blank. | STRING |  |  |  | 

## Person_Class-200_05 

 property | value 
--- | --- 
 id | Person_Class-200_05
 label | Person Class

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
| person_class | .01 | Person Class | This is a pointer to the Person class file. | POINTER |  | REQUIRED, INDEXED | {id:Person_Class-8932_1} | 
| effective_date | 2 | Effective Date | This field is trigger by adding a new person class. | DATE-TIME |  | REQUIRED, INDEXED |  | 
| expiration_date | 3 | Expiration Date | This field is the date after which this class becomes inactive.\rThis field must be not less than the EFFECTIVE DATE and not greater \rthan the DATE INACTIVATED field(#4) of the Person Class entry in the\rPERSON CLASS file(#8932.1).\r       \rIt will get triggered if a new Person Class is entered or someone\redits the field to inactivate the class. | DATE-TIME |  |  |  | 

## Defined_Formats_For_Lm-200_0089832 

 property | value 
--- | --- 
 id | Defined_Formats_For_Lm-200_0089832
 label | Defined Formats For Lm

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
| number | .01 | Number | This is the reference number to the predefined format line. | NUMERIC |  | REQUIRED, INDEXED |  | 
| default | 1 | Default | If set to yes, this format line will be used as the default format line\rwhen using the screen editor.  If a document already has a format line\rdefined, then the document format will be used. | BOOLEAN |  | INDEXED | {false:n,true:y} | 
| format_line | 2 | Format Line | This field stores the predefined format lines of the user. | STRING |  |  |  | 

## Defined_Phrases_For_Lm-200_0089833 

 property | value 
--- | --- 
 id | Defined_Phrases_For_Lm-200_0089833
 label | Defined Phrases For Lm

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
| keyword | .01 | Keyword | The predefined phrase 'keyword' used to select the phrase. | STRING |  | REQUIRED, INDEXED |  | 
| phrase | 1 | Phrase | The phrase to be inserted into the document. | STRING |  |  |  | 