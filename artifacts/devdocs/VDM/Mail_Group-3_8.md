---
layout: default
title: VDM
---

## [VDM](TableOfContents) &#8594; Mail_Group-3_8
# Mail Group (3.8)
This file holds the names of all groups known to MailMan, and their members.

<dl>
<dt>Global</dt><dd>^XMB(3.8,</dd>
<dt>Domain</dt><dd>Non-Clinical</dd>
</dl>

### Properties

Field | ID | Description | Datatype | Attributes | Range
--- | --- | --- | --- | --- | ---
**Name**{::nomarkdown}<pre><code>  name</code></pre>{:/} | .01 | The name of a mail group, i.e. a list of recipients who can<br/>all be addressed at once by reference to this name. | STRING | INDEXED<br/>REQUIRED | 
**Member**{::nomarkdown}<pre><code>  member</code></pre>{:/} | 2 | A member of a Mail Group is a user to whom messages will be sent when the<br/>message is addressed to this mail group. | OBJECT |  | [Member-3_81](#Member-3_81)
**Description**{::nomarkdown}<pre><code>  description</code></pre>{:/} | 3 | The definition and/or purpose of this mail group. | STRING |  | 
**Type**{::nomarkdown}<pre><code>  type-4</code></pre>{:/} | 4 | The type of mail group determines who can send mail to it.<br/>Provided there are no AUTHORIZED SENDERS specified, anyone can send mail<br/>to a public group and only its members can send mail to a private group.<br/>If there are AUTHORIZED SENDERS specified, only those users can address<br/>the group. | ENUMERATION | REQUIRED | {::nomarkdown}public: <em><strong>PU</strong></em><br/>private: <em><strong>PR</strong></em>{:/}
**Organizer**{::nomarkdown}<pre><code>  organizer</code></pre>{:/} | 5 | The user who has the privileges of an "Organizer" for<br/>the mail group. For example, an organizer can add new members to a<br/>"Private" mail group. | POINTER |  | [New_Person-200](New_Person-200)
**Coordinator**{::nomarkdown}<pre><code>  coordinator</code></pre>{:/} | 5.1 | This field is used as a screen when a user tries to edit a mail group<br/>that he is a coordinator of.  If the screen fails and the user does not<br/>hold the XMMGR key, he cannot edit the mail group.<br/> <br/>Even if the coordinator is REMOVED from the Mail System, this field will<br/>remain to indicate who created the Mail Group if others can use it.  If it<br/>is a Personal Group, it will be deleted. | POINTER | INDEXED | [New_Person-200](New_Person-200)
**Authorized Sender**{::nomarkdown}<pre><code>  authorized_sender</code></pre>{:/} | 6 | If you wish to restrict this mail group to only a limited set of senders,<br/>name them in this field.  If no names are entered here, then it is assumed<br/>that anyone may send mail to this group (if public), or only members<br/>may send to it (if private).  <br/> <br/>If a user attempts to send mail to a group which has one or more authorized<br/>senders, but is not an authorized sender, then he is shown a list of<br/>authorized senders.  He may send the message to them, and they may forward<br/>it, if desired.<br/><br/>NOTE:  Remote users may not send mail to any local group which has<br/>authorized senders | POINTER |  | [New_Person-200](New_Person-200)
**Allow Self Enrollment?**{::nomarkdown}<pre><code>  allow_self_enrollment</code></pre>{:/} | 7 | If this field is set to "YES", then users may use the JOIN option to <br/>make themselves members of the group, or to drop their names from the<br/>group.  This option is only operative with public groups. | BOOLEAN |  | {::nomarkdown}false: <em><strong>n</strong></em><br/>true: <em><strong>y</strong></em>{:/}
**Reference Count**{::nomarkdown}<pre><code>  reference_count</code></pre>{:/} | 8 | This is a count of the number of times this mailgroup has been<br/>used as a recipient of a message.  This will help site managers<br/>monitor the activity of mail groups. | NUMERIC |  | 
**Last Referenced**{::nomarkdown}<pre><code>  last_referenced</code></pre>{:/} | 9 | This is the date on which this mail group was last referenced. | DATE-TIME |  | 
**Restrictions**{::nomarkdown}<pre><code>  restrictions</code></pre>{:/} | 10 | This field is only applicable for PRIVATE mail groups.<br/>It is ignored for PUBLIC mail groups.<br/> <br/>This field controls who may address (send messages to) this<br/>PRIVATE mail group.<br/> <br/>If 0 (zero) or null, then the group is unrestricted, and all<br/>members may address the group.<br/> <br/>If 1, then only the organizer may address the group.<br/>The group is a personal group.<br/><br/>Note that non-members cannot address private mail groups. | ENUMERATION |  | {::nomarkdown}ORGANIZER ONLY: <em><strong>1</strong></em><br/>UNRESTRICTED: <em><strong>0</strong></em>{:/}
**Member Groups**{::nomarkdown}<pre><code>  member_groups</code></pre>{:/} | 11 | Member Groups are mail groups that are members of this mail group.  When<br/>a Mail Group is made a member of another in this fashion, the individuals<br/>of it are added to the mailing list at delivery time. | OBJECT |  | [Member_Groups-3_811](#Member_Groups-3_811)
**Members - Remote**{::nomarkdown}<pre><code>  members__remote</code></pre>{:/} | 12 | This multiple contains remote addresses or local devices or local servers.<br/>The input to the field is checked for validity at the time it is entered.<br/>If the address BECOMES INCORRECT MailMan will try to inform<br/>a responsible person of the non-delivery of a message. | STRING |  | 
**Distribution List**{::nomarkdown}<pre><code>  distribution_list</code></pre>{:/} | 13 | This field will allow distribution lists to be included in Mail Groups.<br/>In this way a message that must be sent to the same name at many domains<br/>may easily be included in the recipient chain of a message. | POINTER |  | [Distribution_List-3_816](Distribution_List-3_816)
**Fax Recipient**{::nomarkdown}<pre><code>  fax_recipient</code></pre>{:/} | 14 |  |  |  | 
**Fax Group**{::nomarkdown}<pre><code>  fax_group</code></pre>{:/} | 15 |  |  |  | 

### Subfile
#### <a name="Member-3_81"></a>Member

<dl>
<dt>ID</dt><dd>Member-3_81</dd>
<dt>File Type</dt><dd>3.81</dd>
<dt>Label</dt><dd>Member</dd></dl>

#### Properties

Field | ID | Description | Datatype | Attributes | Range
--- | --- | --- | --- | --- | ---
**Member**{::nomarkdown}<pre><code>  member</code></pre>{:/} | .01 | The local user who is a member of this mail group.<br/>The user must have an access code and a mailbox. | POINTER | REQUIRED | [New_Person-200](New_Person-200)
**Type**{::nomarkdown}<pre><code>  type-1</code></pre>{:/} | 1 | This field indicates what type of recipient this is.<br/><br/>If this field has nothing in it, it indicates that this recipient is<br/>a primary recipient, and may reply.<br/><br/>CC:  indicates that the recipient is being sent a copy, but is not the<br/>primary recipient.  The recipient may reply.<br/> <br/>INFO: indicates that the recipient may not reply to the message; the<br/>message is being transmitted to the recipient for information purposes<br/>only. | ENUMERATION |  | {::nomarkdown}CC: <em><strong>C</strong></em><br/>INFO: <em><strong>I</strong></em>{:/}

#### <a name="Member_Groups-3_811"></a>Member Groups

<dl>
<dt>ID</dt><dd>Member_Groups-3_811</dd>
<dt>File Type</dt><dd>3.811</dd>
<dt>Label</dt><dd>Member Groups</dd></dl>

#### Properties

Field | ID | Description | Datatype | Attributes | Range
--- | --- | --- | --- | --- | ---
**Member Group Name**{::nomarkdown}<pre><code>  member_group_name</code></pre>{:/} | .01 | This is a pointer to another entry in this Mail Group file.<br/>See the description of the multiple for more information. | POINTER | INDEXED<br/>REQUIRED | [Mail_Group-3_8](Mail_Group-3_8)
**Type**{::nomarkdown}<pre><code>  type-1</code></pre>{:/} | 1 | This field indicates what type of recipient this is.<br/><br/>If this field has nothing in it, it indicates that this recipient is<br/>a primary recipient, and may reply.<br/><br/>CC:  indicates that the recipient is being sent a copy, but is not the<br/>primary recipient.  The recipient may reply.<br/><br/>INFO: indicates that the recipient may not reply to the message; the<br/>message is being transmitted to the recipient for information purposes<br/>only. | ENUMERATION |  | {::nomarkdown}CC: <em><strong>C</strong></em><br/>INFO: <em><strong>I</strong></em>{:/}



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:00 pm</p>{:/}