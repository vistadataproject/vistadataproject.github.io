---
layout: default
title: VDM documentation
---

## [VDM](TableOfContent.md) &#8594; Mail_Group-3_8 

<dl>
<dt>id</dt><dd>Mail_Group-3_8</dd>
<dt>fmId</dt><dd>3.8</dd>
<dt>label</dt><dd>Mail Group</dd>
<dt>location</dt><dd>^XMB(3.8,</dd>
<dt>description</dt><dd>This file holds the names of all groups known to MailMan, and their<br/>members.</dd>
</dl>

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
| name | .01 | Name | {::nomarkdown}The name of a mail group, i.e. a list of recipients who can<br/>all be addressed at once by reference to this name.{:/} | STRING |  | REQUIRED, INDEXED |  | 
| member | 2 | Member | {::nomarkdown}A member of a Mail Group is a user to whom messages will be sent when the<br/>message is addressed to this mail group.{:/} | [OBJECT] |  |  | [Member-3_81](#Member-3_81)  | 
| description | 3 | Description | {::nomarkdown}The definition and/or purpose of this mail group.{:/} | STRING |  |  |  | 
| type-4 | 4 | Type | {::nomarkdown}The type of mail group determines who can send mail to it.<br/>Provided there are no AUTHORIZED SENDERS specified, anyone can send mail<br/>to a public group and only its members can send mail to a private group.<br/>If there are AUTHORIZED SENDERS specified, only those users can address<br/>the group.{:/} | ENUMERATION |  | REQUIRED | {::nomarkdown}<dl><dt>PU</dt><dd>public</dd><dt>PR</dt><dd>private</dd></dl>{:/} | 
| organizer | 5 | Organizer | {::nomarkdown}The user who has the privileges of an \Organizer\ for<br/>the mail group. For example, an organizer can add new members to a<br/>\Private\ mail group.{:/} | POINTER |  |  | [New_Person-200](New_Person-200.md) | 
| coordinator | 5.1 | Coordinator | {::nomarkdown}This field is used as a screen when a user tries to edit a mail group<br/>that he is a coordinator of.  If the screen fails and the user does not<br/>hold the XMMGR key, he cannot edit the mail group.<br/> <br/>Even if the coordinator is REMOVED from the Mail System, this field will<br/>remain to indicate who created the Mail Group if others can use it.  If it<br/>is a Personal Group, it will be deleted.{:/} | POINTER |  | INDEXED | [New_Person-200](New_Person-200.md) | 
| authorized_sender | 6 | Authorized Sender | {::nomarkdown}If you wish to restrict this mail group to only a limited set of senders,<br/>name them in this field.  If no names are entered here, then it is assumed<br/>that anyone may send mail to this group (if public), or only members<br/>may send to it (if private).  <br/> <br/>If a user attempts to send mail to a group which has one or more authorized<br/>senders, but is not an authorized sender, then he is shown a list of<br/>authorized senders.  He may send the message to them, and they may forward<br/>it, if desired.<br/><br/>NOTE:  Remote users may not send mail to any local group which has<br/>authorized senders{:/} | [POINTER] |  |  | {id:New_Person-200} | 
| allow_self_enrollment | 7 | Allow Self Enrollment? | {::nomarkdown}If this field is set to \YES\, then users may use the JOIN option to <br/>make themselves members of the group, or to drop their names from the<br/>group.  This option is only operative with public groups.{:/} | BOOLEAN |  |  | {::nomarkdown}<dl><dt>n</dt><dd>false</dd><dt>y</dt><dd>true</dd></dl>{:/} | 
| reference_count | 8 | Reference Count | {::nomarkdown}This is a count of the number of times this mailgroup has been<br/>used as a recipient of a message.  This will help site managers<br/>monitor the activity of mail groups.{:/} | NUMERIC |  |  |  | 
| last_referenced | 9 | Last Referenced | {::nomarkdown}This is the date on which this mail group was last referenced.{:/} | DATE-TIME |  |  |  | 
| restrictions | 10 | Restrictions | {::nomarkdown}This field is only applicable for PRIVATE mail groups.<br/>It is ignored for PUBLIC mail groups.<br/> <br/>This field controls who may address (send messages to) this<br/>PRIVATE mail group.<br/> <br/>If 0 (zero) or null, then the group is unrestricted, and all<br/>members may address the group.<br/> <br/>If 1, then only the organizer may address the group.<br/>The group is a personal group.<br/><br/>Note that non-members cannot address private mail groups.{:/} | ENUMERATION |  |  | {::nomarkdown}<dl><dt>1</dt><dd>ORGANIZER ONLY</dd><dt>0</dt><dd>UNRESTRICTED</dd></dl>{:/} | 
| member_groups | 11 | Member Groups | {::nomarkdown}Member Groups are mail groups that are members of this mail group.  When<br/>a Mail Group is made a member of another in this fashion, the individuals<br/>of it are added to the mailing list at delivery time.{:/} | [OBJECT] |  |  | [Member_Groups-3_811](#Member_Groups-3_811)  | 
| members__remote | 12 | Members - Remote | {::nomarkdown}This multiple contains remote addresses or local devices or local servers.<br/>The input to the field is checked for validity at the time it is entered.<br/>If the address BECOMES INCORRECT MailMan will try to inform<br/>a responsible person of the non-delivery of a message.{:/} | [STRING] |  |  |  | 
| distribution_list | 13 | Distribution List | {::nomarkdown}This field will allow distribution lists to be included in Mail Groups.<br/>In this way a message that must be sent to the same name at many domains<br/>may easily be included in the recipient chain of a message.{:/} | [POINTER] |  |  | {id:Distribution_List-3_816} | 
| fax_recipient | 14 | Fax Recipient |  | [] |  |  |  | 
| fax_group | 15 | Fax Group |  | [] |  |  |  | 

## <a name="Member-3_81"></a>Member-3_81 

<dl>
<dt>id</dt><dd>Member-3_81</dd>
<dt>label</dt><dd>Member</dd>
</dl>

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
| member | .01 | Member | {::nomarkdown}The local user who is a member of this mail group.<br/>The user must have an access code and a mailbox.{:/} | POINTER |  | REQUIRED | [New_Person-200](New_Person-200.md) | 
| type-1 | 1 | Type | {::nomarkdown}This field indicates what type of recipient this is.<br/><br/>If this field has nothing in it, it indicates that this recipient is<br/>a primary recipient, and may reply.<br/><br/>CC:  indicates that the recipient is being sent a copy, but is not the<br/>primary recipient.  The recipient may reply.<br/> <br/>INFO: indicates that the recipient may not reply to the message; the<br/>message is being transmitted to the recipient for information purposes<br/>only.{:/} | ENUMERATION |  |  | {::nomarkdown}<dl><dt>C</dt><dd>CC</dd><dt>I</dt><dd>INFO</dd></dl>{:/} | 

## <a name="Member_Groups-3_811"></a>Member_Groups-3_811 

<dl>
<dt>id</dt><dd>Member_Groups-3_811</dd>
<dt>label</dt><dd>Member Groups</dd>
</dl>

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
| member_group_name | .01 | Member Group Name | {::nomarkdown}This is a pointer to another entry in this Mail Group file.<br/>See the description of the multiple for more information.{:/} | POINTER |  | REQUIRED, INDEXED | Mail_Group-3_8 | 
| type-1 | 1 | Type | {::nomarkdown}This field indicates what type of recipient this is.<br/><br/>If this field has nothing in it, it indicates that this recipient is<br/>a primary recipient, and may reply.<br/><br/>CC:  indicates that the recipient is being sent a copy, but is not the<br/>primary recipient.  The recipient may reply.<br/><br/>INFO: indicates that the recipient may not reply to the message; the<br/>message is being transmitted to the recipient for information purposes<br/>only.{:/} | ENUMERATION |  |  | {::nomarkdown}<dl><dt>C</dt><dd>CC</dd><dt>I</dt><dd>INFO</dd></dl>{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on February 2nd 2017, 6:55:25 am</p>{:/}