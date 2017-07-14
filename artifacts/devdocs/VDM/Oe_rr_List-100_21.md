---
layout: default
title: VDM
---

#### [Developer Documentation](../index) &#187; [VDM](TableOfContents) &#187; Oe_rr_List-100_21<br/>
<a name="top"></a>
# Oe/rr List (100.21)
This file contains data related to lists.  Generally these lists take the form of provider(s)/patients.

**Global:** ^OR(100.21,

**Domain:** Non-Clinical

## Properties

Field | ID | Description | Datatype | Attributes | Range
--- | --- | --- | --- | --- | ---
**Name**{::nomarkdown}<pre><code>  name</code></pre>{:/} | .01 | This is the name of the list being defined. | STRING | INDEXED<br/>REQUIRED | 
**Upper Case**{::nomarkdown}<pre><code>  upper_case</code></pre>{:/} | .1 | This is the name of the list in upper case.  Used for look-up. | STRING | INDEXED<br/>REQUIRED | 
**Type**{::nomarkdown}<pre><code>  type-1</code></pre>{:/} | 1 | This is the type of list being defined.  List type currently includes<br/>team and personal.<br/>o  Team lists<br/>     o  TM - Manually maintained (addition and removal)<br/>     o  TA - Maintained by Autolinks for addition and removal of patients.<br/>     o  MRAL - Manual removal of patients from the list with Autolink<br/>        addition of patients to the list.<br/> <br/>o  Personal lists<br/>     o  P - Manually maintained (addition and removal)<br/> <br/>  | ENUMERATION | REQUIRED | {::nomarkdown}PERSONAL PATIENT: <em><strong>P</strong></em><br/>MANUAL REMOVAL/AUTOLINK ADDITION: <em><strong>MRAL</strong></em><br/>TEAM PATIENT AUTOLINKED: <em><strong>TA</strong></em><br/>TEAM PATIENT MANUAL: <em><strong>TM</strong></em>{:/}
**Device**{::nomarkdown}<pre><code>  device</code></pre>{:/} | 1.5 | Device from the DEVICE file linked to the list. | POINTER |  | [Device-3_5](Device-3_5)
**Creator**{::nomarkdown}<pre><code>  creator</code></pre>{:/} | 1.6 | This is the IEN of the user who creates the Team List. | POINTER |  | [New_Person-200](New_Person-200)
**Creation D/t**{::nomarkdown}<pre><code>  creation_d_t</code></pre>{:/} | 1.65 | This field stores the date of creation of the list. | DATE-TIME |  | 
**Subscribe**{::nomarkdown}<pre><code>  subscribe</code></pre>{:/} | 1.7 | This field stores either a Y or N (for YES or NO) entry and is used in<br/>CPRS to determine whether or not individual users will be allowed to add<br/>or remove themselves as members of the team list if it is of autolink<br/>type. | BOOLEAN |  | {::nomarkdown}false: <em><strong>N</strong></em><br/>true: <em><strong>Y</strong></em>{:/}
**User**{::nomarkdown}<pre><code>  user</code></pre>{:/} | 2 | These are the user(s) that belong to the list.  If the list is of type<br/>TEAM PATIENT or PERSONAL PATIENT, users on the list may receive clinical <br/>notifications for patients also on the list. | OBJECT |  | [User-100_212](#User-100_212)
**Autolink**{::nomarkdown}<pre><code>  autolink</code></pre>{:/} | 3 | This field is used to link the list with WARDs, ROOM-BEDs,<br/>PROVIDERs, TREATING SPECIALTYs, or CLINICs.  This field  <br/>points to the entry in the file where the link is to <br/>occur.  When ADT movement occur for patients, they are<br/>added to the appropriate OE/RR lists as identified by the<br/>AUTOLINK field (via "AC" cross-ref).<br/>Lists with autolink providers are updated (patient added) when the PROVIDER<br/>link matches the entry at the PRIMARY CARE PHYSICIAN or ATTENDING<br/>PHYSICIAN prompts. | OBJECT |  | [Autolink-100_213](#Autolink-100_213)
**Member**{::nomarkdown}<pre><code>  member</code></pre>{:/} | 10 | The list member is an item on the list.  The member for personal and team <br/>patient lists is a patient (if list type is P or T, this field points to<br/>the patient file.) | OBJECT |  | [Member-100_2101](#Member-100_2101)
**Visibility**{::nomarkdown}<pre><code>  visibility</code></pre>{:/} | 11 | This field is used as a means to control who can see this list and the <br/>patients that are contained within it.  If it is set to 0, then only the <br/>owner can see it.  If it is set to 1, then everybody can see it. The <br/>default is owner only. | ENUMERATION | REQUIRED | {::nomarkdown}OWNER: <em><strong>0</strong></em><br/>ALLUSERS: <em><strong>1</strong></em>{:/}

## Sub-Files
### <a name="User-100_212"></a>User (100.212)

<dl>
<dt>ID</dt><dd>User-100_212</dd></dl>

#### Properties

Field | ID | Description | Datatype | Attributes | Range
--- | --- | --- | --- | --- | ---
**User**{::nomarkdown}<pre><code>  user</code></pre>{:/} | .01 | This is a user that belongs to the list.  If the list is of type<br/>TEAM PATIENT or PERSONAL PATIENT, users on the list may receive clinical <br/>notifications for patients also on the list. | POINTER | REQUIRED | [New_Person-200](New_Person-200)
**Last Date/time Used**{::nomarkdown}<pre><code>  last_date_time_used</code></pre>{:/} | 1 | This is the date/time that the user last used this list. | DATE-TIME |  | 

[&uarr; Return to top](#top)<br/>


### <a name="Autolink-100_213"></a>Autolink (100.213)

<dl>
<dt>ID</dt><dd>Autolink-100_213</dd></dl>

#### Properties

Field | ID | Description | Datatype | Attributes | Range
--- | --- | --- | --- | --- | ---
**Autolink**{::nomarkdown}<pre><code>  autolink</code></pre>{:/} | .01 | Links for automatic patient addition/removal based on ADT movements and<br/>CLINIC enrollments. | POINTER | INDEXED<br/>REQUIRED | [Ward_Location-42](Ward_Location-42)<br/>[Roombed-405_4](Roombed-405_4)<br/>[New_Person-200](New_Person-200)<br/>[Facility_Treating_Specialty-45_7](Facility_Treating_Specialty-45_7)<br/>[Hospital_Location-44](Hospital_Location-44)
**Primary Or Attending**{::nomarkdown}<pre><code>  primary_or_attending</code></pre>{:/} | 1 | This field will determine how the Autolinks for Providers will work. If the<br/>field is set to;<br/><br/>"P" - Primary:  The autolink will add patients to the list that have the<br/>pointed to provider assigned to them thru the MAS options as PROVIDER.<br/><br/>"A" - Attending:  The autolink will add patients to the list that have the<br/>pointed to provider assigned to them thru the MAS options as ATTENDING<br/>PHYSICIAN.<br/><br/>"B" - Both:  The autolink will add patients to the list that have the pointed<br/>to provider assigned to them thru the MAS options as  'PROVIDER' and those<br/>patients that have the pointed to provider assigned to them as ATTENDING<br/>PHYSICIAN. | ENUMERATION |  | {::nomarkdown}attending: <em><strong>A</strong></em><br/>primary: <em><strong>P</strong></em><br/>both: <em><strong>B</strong></em>{:/}

[&uarr; Return to top](#top)<br/>


### <a name="Member-100_2101"></a>Member (100.2101)

<dl>
<dt>ID</dt><dd>Member-100_2101</dd></dl>

#### Properties

Field | ID | Description | Datatype | Attributes | Range
--- | --- | --- | --- | --- | ---
**Member**{::nomarkdown}<pre><code>  member</code></pre>{:/} | .01 | An item on the list, member is a patient if the list type is P or T. | POINTER | INDEXED<br/>REQUIRED | [Patient-2](Patient-2)
**View Date/time**{::nomarkdown}<pre><code>  view_date_time</code></pre>{:/} | 1 | This is the date/time this item was last viewed. | DATE-TIME |  | 
***notification Selection**{::nomarkdown}<pre><code>  notification_selection</code></pre>{:/} | 2 | This field is unused and will be deleted post-CPRS 1. | POINTER | DEPRECATED | 

[&uarr; Return to top](#top)<br/>




{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:28 pm</p>{:/}