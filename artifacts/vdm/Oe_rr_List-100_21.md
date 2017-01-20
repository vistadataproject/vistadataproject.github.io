---
layout: default
title: VDM documentation
---

## [VDM](TableOfContent.md) &#8594; Oe_rr_List-100_21 

 property | value 
--- | --- 
 id | Oe_rr_List-100_21
 fmId | 100.21
 label | Oe/rr List
 location | ^OR(100.21,
 description | {::nomarkdown}This file contains data related to lists.  Generally these lists take the<br/>form of provider(s)/patients.{:/}

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
| name | .01 | Name | {::nomarkdown}This is the name of the list being defined.{:/} | STRING |  | REQUIRED, INDEXED |  | 
| upper_case | .1 | Upper Case | {::nomarkdown}This is the name of the list in upper case.  Used for look-up.{:/} | STRING |  | REQUIRED, INDEXED |  | 
| type-1 | 1 | Type | {::nomarkdown}This is the type of list being defined.  List type currently includes<br/>team and personal.<br/>o  Team lists<br/>     o  TM - Manually maintained (addition and removal)<br/>     o  TA - Maintained by Autolinks for addition and removal of patients.<br/>     o  MRAL - Manual removal of patients from the list with Autolink<br/>        addition of patients to the list.<br/> <br/>o  Personal lists<br/>     o  P - Manually maintained (addition and removal)<br/> <br/> {:/} | ENUMERATION |  | REQUIRED | {::nomarkdown}<dl><dt>P</dt><dd>PERSONAL PATIENT</dd><dt>MRAL</dt><dd>MANUAL REMOVAL/AUTOLINK ADDITION</dd><dt>TA</dt><dd>TEAM PATIENT AUTOLINKED</dd><dt>TM</dt><dd>TEAM PATIENT MANUAL</dd></dl>{:/} | 
| device | 1.5 | Device | {::nomarkdown}Device from the DEVICE file linked to the list.{:/} | POINTER |  |  | [Device-3_5](Device-3_5.md) | 
| creator | 1.6 | Creator | {::nomarkdown}This is the IEN of the user who creates the Team List.{:/} | POINTER |  |  | [New_Person-200](New_Person-200.md) | 
| creation_d_t | 1.65 | Creation D/t | {::nomarkdown}This field stores the date of creation of the list.{:/} | DATE-TIME |  |  |  | 
| subscribe | 1.7 | Subscribe | {::nomarkdown}This field stores either a Y or N (for YES or NO) entry and is used in<br/>CPRS to determine whether or not individual users will be allowed to add<br/>or remove themselves as members of the team list if it is of autolink<br/>type.{:/} | BOOLEAN |  |  | {::nomarkdown}<dl><dt>N</dt><dd>false</dd><dt>Y</dt><dd>true</dd></dl>{:/} | 
| user | 2 | User | {::nomarkdown}These are the user(s) that belong to the list.  If the list is of type<br/>TEAM PATIENT or PERSONAL PATIENT, users on the list may receive clinical <br/>notifications for patients also on the list.{:/} | [OBJECT] |  |  | [User-100_212](#User-100_212)  | 
| autolink | 3 | Autolink | {::nomarkdown}This field is used to link the list with WARDs, ROOM-BEDs,<br/>PROVIDERs, TREATING SPECIALTYs, or CLINICs.  This field  <br/>points to the entry in the file where the link is to <br/>occur.  When ADT movement occur for patients, they are<br/>added to the appropriate OE/RR lists as identified by the<br/>AUTOLINK field (via \AC\ cross-ref).<br/>Lists with autolink providers are updated (patient added) when the PROVIDER<br/>link matches the entry at the PRIMARY CARE PHYSICIAN or ATTENDING<br/>PHYSICIAN prompts.{:/} | [OBJECT] |  |  | [Autolink-100_213](#Autolink-100_213)  | 
| member | 10 | Member | {::nomarkdown}The list member is an item on the list.  The member for personal and team <br/>patient lists is a patient (if list type is P or T, this field points to<br/>the patient file.){:/} | [OBJECT] |  |  | [Member-100_2101](#Member-100_2101)  | 
| visibility | 11 | Visibility | {::nomarkdown}This field is used as a means to control who can see this list and the <br/>patients that are contained within it.  If it is set to 0, then only the <br/>owner can see it.  If it is set to 1, then everybody can see it. The <br/>default is owner only.{:/} | ENUMERATION |  | REQUIRED | {::nomarkdown}<dl><dt>0</dt><dd>OWNER</dd><dt>1</dt><dd>ALLUSERS</dd></dl>{:/} | 

## <a name="User-100_212"></a>User-100_212 

 property | value 
--- | --- 
 id | User-100_212
 label | User

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
| user | .01 | User | {::nomarkdown}This is a user that belongs to the list.  If the list is of type<br/>TEAM PATIENT or PERSONAL PATIENT, users on the list may receive clinical <br/>notifications for patients also on the list.{:/} | POINTER |  | REQUIRED | [New_Person-200](New_Person-200.md) | 
| last_date_time_used | 1 | Last Date/time Used | {::nomarkdown}This is the date/time that the user last used this list.{:/} | DATE-TIME |  |  |  | 

## <a name="Autolink-100_213"></a>Autolink-100_213 

 property | value 
--- | --- 
 id | Autolink-100_213
 label | Autolink

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
| autolink | .01 | Autolink | {::nomarkdown}Links for automatic patient addition/removal based on ADT movements and<br/>CLINIC enrollments.{:/} | POINTER |  | REQUIRED, INDEXED | undefined | 
| primary_or_attending | 1 | Primary Or Attending | {::nomarkdown}This field will determine how the Autolinks for Providers will work. If the<br/>field is set to;<br/><br/>\P\ - Primary:  The autolink will add patients to the list that have the<br/>pointed to provider assigned to them thru the MAS options as PROVIDER.<br/><br/>\A\ - Attending:  The autolink will add patients to the list that have the<br/>pointed to provider assigned to them thru the MAS options as ATTENDING<br/>PHYSICIAN.<br/><br/>\B\ - Both:  The autolink will add patients to the list that have the pointed<br/>to provider assigned to them thru the MAS options as  'PROVIDER' and those<br/>patients that have the pointed to provider assigned to them as ATTENDING<br/>PHYSICIAN.{:/} | ENUMERATION |  |  | {::nomarkdown}<dl><dt>A</dt><dd>attending</dd><dt>P</dt><dd>primary</dd><dt>B</dt><dd>both</dd></dl>{:/} | 

## <a name="Member-100_2101"></a>Member-100_2101 

 property | value 
--- | --- 
 id | Member-100_2101
 label | Member

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
| member | .01 | Member | {::nomarkdown}An item on the list, member is a patient if the list type is P or T.{:/} | POINTER |  | REQUIRED, INDEXED | [Patient-2](Patient-2.md) | 
| view_date_time | 1 | View Date/time | {::nomarkdown}This is the date/time this item was last viewed.{:/} | DATE-TIME |  |  |  | 
| notification_selection | 2 | *notification Selection | {::nomarkdown}This field is unused and will be deleted post-CPRS 1.{:/} | [POINTER] |  |  |  | {::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 20th 2017, 4:59:48 am</p>{:/}