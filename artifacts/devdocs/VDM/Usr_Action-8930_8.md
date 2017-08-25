---
layout: default
title: VDM
---

#### [Developer Documentation](../index) &#187; [VDM](TableOfContents) &#187; Usr_Action-8930_8<br/>
<a name="top"></a>
# Usr Action (8930.8)
This file encodes actions which occur in connection with clinical narrative documents.   These actions are referenced by entries in the User Authorization/Subscription file to associate users with actions.   This file contains 2 kinds of actions: those a user is authorized to perform on a document, and those a user subscribes to for a document.  For example, a user is authorized to perform the Signature action, but a user subscribes to ("signs up to receive") a Notification action.

**Global:** ^USR(8930.8,

**Domain:** Non-Clinical

## Properties

Label/Field Name | Field # | Description | Datatype | Attributes | Range
--- | --- | --- | --- | --- | ---
**Name**{::nomarkdown}<pre><code>  name</code></pre>{:/} | .01 | These are names of events which occur in connection with clinical<br/>narrative documents.  These are referenced by the User<br/>Authorization/Subscription file to associate users with events. | STRING | INDEXED<br/>REQUIRED | 
**Event Type**{::nomarkdown}<pre><code>  event_type</code></pre>{:/} | .02 | This file contains two types of events: those a user is AUTHORIZED to<br/>perform and those a user SUBSCRIBES to.  For example, a user is authorized<br/>to perform the Signature event, but a user subscribes to ("signs up to<br/>receive") a Notification event.<br/>This field helps to define the meaning of an event and its relationship to<br/>a user. | ENUMERATION |  | {::nomarkdown}authorization: <em><strong>A</strong></em><br/>subscription: <em><strong>S</strong></em>{:/}
**Applies To**{::nomarkdown}<pre><code>  applies_to</code></pre>{:/} | .03 |  | ENUMERATION |  | {::nomarkdown}definition: <em><strong>DEF</strong></em><br/>document: <em><strong>DOC</strong></em>{:/}
**Associated Protocol**{::nomarkdown}<pre><code>  associated_protocol</code></pre>{:/} | .04 |  | POINTER |  | [Protocol-101](Protocol-101)
**User Verb**{::nomarkdown}<pre><code>  user_verb</code></pre>{:/} | .05 | This word or phrase is displayed in explanatory messages when the user is<br/>denied authority to perform the given action.  Such a message might read,<br/>"You cannot SIGN this unsigned progress note", where the USER VERB is<br/>"SIGN".<br/> <br/>The USER VERB must make grammatical sense inserted in a sentence of the<br/>form: "You cannot [     ] this unsigned progress note."<br/> <br/>Please use uppercase, 3-50 characters. | STRING |  | 
**Document Verb**{::nomarkdown}<pre><code>  document_verb</code></pre>{:/} | .06 | This word or phrase is used in business rule options when displaying<br/>an authorization in sentence form.<br/>     <br/>A business rule might read: "An unsigned Progress Note can BE SIGNED by<br/>an author/dictator." The DOCUMENT VERB in this rule is "BE SIGNED".<br/> <br/>The DOCUMENT VERB must make grammatical sense inserted in a sentence of<br/>the form: "An unsigned progress note can [      ] by an author/dictator."<br/> <br/>Please use uppercase, 3-40 characters. | STRING |  | 
**User Verb Modifier**{::nomarkdown}<pre><code>  user_verb_modifier</code></pre>{:/} | .07 | Sometimes, in writing messages to the user denying a permission, the<br/>action must be split into two parts.  In such cases, the USER VERB<br/>MODIFIER is the second part.<br/> <br/>Example: In "You cannot LINK this UNSIGNED PROGRESS NOTE with a request",<br/>the USER VERB is "LINK", and the USER VERB MODIFIER is "with a request".<br/> <br/>The USER VERB MODIFIER must make grammatical sense when inserted in: <br/>     "You cannot LINK this UNSIGNED PROGRESS NOTE [    ]."<br/> <br/>Please use lowercase, 3-30 characters.<br/> <br/>If an action has an IDENTIFYING PHRASE or a USER VERB MODIFIER, the<br/>business rule ADD or EDIT action presents the user with a clarifying note<br/>about the rule they are creating immediately after the user enters an<br/>action. | STRING |  | 
**Identifying Phrase**{::nomarkdown}<pre><code>  identifying_phrase</code></pre>{:/} | .08 | This field is NOT required.  It is available for use in helping users<br/>identify the correct action when writing business rules.  It appears<br/>when selecting actions from a list.<br/> <br/>For examples, see actions ATTACH TO ID NOTE, and ATTACH ID ENTRY.<br/> <br/>If an action has an IDENTIFYING PHRASE or a USER VERB MODIFIER, the<br/>business rule ADD or EDIT action presents the user with a clarifying note<br/>about the rule they are creating immediately after the user enters an<br/>action. | STRING |  | 
**Implied Event**{::nomarkdown}<pre><code>  implied_event</code></pre>{:/} | 1 | Some events imply other events.  For example, the ability to Sign a<br/>document implies the ability to View the document.  Thus, View is an<br/>implied event for the Signature event.<br/> <br/>Authorization/Subscription file, the user will be shown implied events for<br/>the given event and asked if they wish to include implied events for the<br/>current entry.  If so, a copy of the current entry will be created for each<br/>implied event. | POINTER |  | [Usr_Action-8930_8](Usr_Action-8930_8)
**Description**{::nomarkdown}<pre><code>  description</code></pre>{:/} | 2 |  <br/>The event description will be used in conjunction with the<br/>Authorization/Subscription field to define what it means to associate<br/>users with the event.<br/>In most cases, this event description will suffice to determine the<br/>meaning of User Authorization/Subscription file entries.<br/> <br/>In rare cases, further description of what an event means when associated<br/>with users, document type and document status will be made in the<br/>description field of the User Authorization/Subscription file.  For<br/>example, a signature event associated with documents of status<br/>completed means a walkup signature.<br/> <br/>This information will be used by persons creating entries in the User<br/>Authorization/Subscription file and by persons assigning users to user<br/>classes, when checking what events those user classes are associated with. | STRING |  | 

[&uarr; Return to top](#top)<br/>



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:39 pm</p>{:/}