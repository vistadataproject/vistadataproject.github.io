---
layout: default
title: VDM
---

#### [Developer Documentation](../index) &#187; [VDM](TableOfContents) &#187; Usr_Authorization_subscription-8930_1<br/>
<a name="top"></a>
# Usr Authorization/subscription (8930.1)
This file associates users with actions on documents.   Actions are of 2 kinds: authorization actions such as the signature action, which an associated user is authorized to perform, and subscription actions, such as an unsigned document notification, which the associated user "signs up to receive."   An action may be associated with a USER CLASS in the User Class file (e.g. Staff Physician class) AND/OR with a USER ROLE in relation to the document (e.g. author of document).   If an Authorization/Subscription entry has both User Class AND User Role, the AND FLAG field permits these requirements to be "AND'ed", that is, a user must both belong to the User Class AND must fill the User Role in order to perform the action.  If the AND FLAG has value OR, or has no value, then User Class and User Role within the same entry are "OR'ed".   Each file entry associates an action with 1 user class and/or 1 role.  The entry makes this association for a given Document Definition (e.g. Progress Note) of a given status (e.g. Unsigned).   Multiple file entries for the SAME action/Document Definition/document status allow association with more than one user class/role.  Such entries are "OR'ed":  that is, if a user belongs to the user class/role of one OR another of these entries, the user may perform the action.   User classes automatically INCLUDE user subclasses of the given class as defined in the User Class file.   Document Definitions exist in hierarchy in file 8925.1, with Classes at the top level, Document Classes at the next level down, and Titles under Document Classes.  Authorization/Subscription entries may be defined at any of the above levels.  For example, an authorization which applies to most or all Progress Notes should be defined at the Class level for Document Definition "Progress Note."  On the other hand, an authorization which applies only to Progress Notes of Title "Dental Hygiene Note" should be defined at the Title level for Document Definition "Dental Hygiene Note".   When using authorizations/subscriptions to determine whether a given user should receive/may perform a given action for a Document Definition of a given Title, code begins by checking entries for that action and status FOR THAT TITLE.  If ANY such entries exist, then entries for higher Document Definition levels will be ignored, and the user passes/fails based on that level alone.  Thus, if a Title is linked with a certain action, status and user class, then rules for that Title, action, and status should be entered for ALL user classes which can perform the action on the Title, since broader authorization (e.g. Provider class) set at higher levels (e.g. Progress Notes) is ignored.   If such entries do NOT exist, the next higher level of Document Definition is checked.  And so on.   If no entries are found on any level, no users can perform/subscribe to the action for the given Document Definition and status.

**Global:** ^USR(8930.1,

**Domain:** Non-Clinical

## Properties

Label/Field Name | Field # | Description | Datatype | Attributes | Range
--- | --- | --- | --- | --- | ---
**Document Definition**{::nomarkdown}<pre><code>  document_definition</code></pre>{:/} | .01 | This is a Document Definition of Type Class, Document Class, or Title from<br/>the Document Definition File 8925.1 | POINTER | INDEXED<br/>REQUIRED | TIU_Document_Definition-8925_1
**Status**{::nomarkdown}<pre><code>  status</code></pre>{:/} | .02 |  | POINTER | REQUIRED | Usr_Record_Status-8930_6
**Action**{::nomarkdown}<pre><code>  action</code></pre>{:/} | .03 | This is the action to be permitted for a given document type and status. | POINTER | REQUIRED | [Usr_Action-8930_8](Usr_Action-8930_8)
**User Class**{::nomarkdown}<pre><code>  user_class</code></pre>{:/} | .04 | This is the User Class which is being authorized to perform an action on a <br/>document of the type and status indicated. | POINTER | INDEXED | [Usr_Class-8930](Usr_Class-8930)
**And Flag**{::nomarkdown}<pre><code>  and_flag</code></pre>{:/} | .05 | This field allows the ADPAC to indicate whether the conditions specified <br/>by User Class and User Role should be logically "AND'ed," or logically "OR'ed," <br/>as they will be unless otherwise specified.  i.e., if you want to specify <br/>that an unsigned discharge summary may be signed by a user, where:<br/><br/>User Class = Provider AND User Role = Author,<br/><br/>then you'll want to set this field to AND. | ENUMERATION |  | {::nomarkdown}AND: <em><strong>&</strong></em><br/>OR: <em><strong>!</strong></em>{:/}
**User Role**{::nomarkdown}<pre><code>  user_role</code></pre>{:/} | .06 | This identifies the role of the user with respect to the document in<br/>question (e.g., Author/Dictator, Expected Signer, Expected Cosigner,<br/>Attending Physician, etc.). | POINTER | INDEXED | Usr_Role-8930_2
**Description**{::nomarkdown}<pre><code>  description</code></pre>{:/} | 1 |  <br/>For most entries, the meaning of the entry will be clear from the<br/>description of the associated event in the TIU Event file.  In some cases,<br/>that may not suffice, in which case this field may be used to further<br/> <br/>For example, if an entry associates the Signature event with a document of<br/>status completed, it might help to note in the description field that such<br/>a signature is a walkup signature.<br/> <br/>It should not be necessary to describe consequences in this field - those<br/>descriptions may be gotten from the associated protocol descriptions<br/>instead.<br/> <br/>This field will be used when persons associating users with user classes<br/>wish to know the meaning of events associated with certain user classes. | STRING |  | 
**Prerequisite Action**{::nomarkdown}<pre><code>  prerequisite_action</code></pre>{:/} | 2 |  | STRING |  | 
**Consequence**{::nomarkdown}<pre><code>  consequence</code></pre>{:/} | 3 |  | STRING |  | 

[&uarr; Return to top](#top)<br/>



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:39 pm</p>{:/}