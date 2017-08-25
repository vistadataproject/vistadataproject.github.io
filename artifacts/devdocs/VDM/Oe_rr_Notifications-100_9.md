---
layout: default
title: VDM
---

#### [Developer Documentation](../index) &#187; [VDM](TableOfContents) &#187; Oe_rr_Notifications-100_9<br/>
<a name="top"></a>
# Oe/rr Notifications (100.9)
This file contains data used to generate notifications.  Packages determine if a notification should be sent then send the patient ID and notification ID (IEN in this file) to order entry routines.  Based on the notification IEN, data from this file is used to generate the notification and help determine its recipients.

**Global:** ^ORD(100.9,

**Domain:** Non-Clinical

## Properties

Label/Field Name | Field # | Description | Datatype | Attributes | Range
--- | --- | --- | --- | --- | ---
**Number**{::nomarkdown}<pre><code>  number</code></pre>{:/} | .001 | This is the internal entry number assigned to a notification.  Entries<br/>1 through 9999 are reserved for National release by the OE/RR <br/>Notifications package.<br/> <br/>For local site-defined notifications, the internal entry number must be <br/>specific to your VAMC in the following format:<br/> <br/><your station number><incremental notification number 01-99><br/> <br/>For example, if your site is number 456, your first locally created <br/>notification would be 45601.                          | IEN |  | 
**Name**{::nomarkdown}<pre><code>  name</code></pre>{:/} | .01 | This is the name of the notification.  It should match the text in the<br/>MESSAGE TEXT field as closely as possible (it may be an abbreviated version<br/>of the entry in MESSAGE TEXT.)  This field is displayed to users when<br/>selecting or reviewing entries in this file (100.9). | STRING | INDEXED<br/>REQUIRED | 
**Package Id**{::nomarkdown}<pre><code>  package_id</code></pre>{:/} | .02 | This entry should always be "OR" to indicate the alert (notification) is <br/>processed by OE/RR.  "OR" is stuffed via a trigger x-ref in field .01.<br/>This Package ID will have ";DFN;NIEN" concatenated to the end of it, to<br/>make the XQAID variable which is used by the XQALERT routine to provide a<br/>unique cross-reference.  The order entry notification system will check<br/>the New person file to determine if this message is already pending for<br/>the user.  If it already exists, the user will not receive a second message.<br/> <br/>DFN is the Patient File internal entry number.<br/>NIEN is the Notification File internal entry number. | STRING | INDEXED<br/>REQUIRED | 
**Message Text**{::nomarkdown}<pre><code>  message_text</code></pre>{:/} | .03 | This text will be appended to the Patient last name and last 4 characters of<br/>the social security number to create the order notification text.<br/>(e.g., SMITH (4356): Unsigned orders. - Where "Unsigned orders." is the <br/>content of MESSAGE TEXT.)  Text entered into this field is the default text<br/>for notifications where the text message usually comes from the package<br/>(MESSAGE TYPE = PKG). | STRING | INDEXED<br/>REQUIRED | 
**Message Type**{::nomarkdown}<pre><code>  message_type</code></pre>{:/} | .04 | MESSAGE TYPE field is used as a flag to determine where the message text originates.  If from the NOTIFICATION file, MESSAGE TYPE is 'NOT.'  If the message comes from the package, MESSAGE TYPE is 'PKG.' | ENUMERATION | REQUIRED | {::nomarkdown}NOTIFICATION FILE PROVIDES MESSAGE: <em><strong>NOT</strong></em><br/>PACKAGE PROVIDES A VARIABLE MESSAGE: <em><strong>PKG</strong></em>{:/}
**Action Flag**{::nomarkdown}<pre><code>  action_flag</code></pre>{:/} | .05 | This a mandatory flag used to regulate processing in XQALERT processing.<br/>The flag is set to I to indicate the notification is for INFORMATION ONLY - <br/>no follow-up action is to be taken.  'I' notifications are deleted as each<br/>user reviews them.  'R' notifications have a follow-up action associated<br/>with them.  The user will be taken to another routine or option when they<br/>select a notification with ACTION FLAG = R and a follow-up routine/option<br/>is defined. | ENUMERATION | REQUIRED | {::nomarkdown}RUN ROUTINE: <em><strong>R</strong></em><br/>INFORMATION ONLY: <em><strong>I</strong></em>{:/}
**Entry Point**{::nomarkdown}<pre><code>  entry_point</code></pre>{:/} | .06 | This is an optional field used to create the XQAROU variable to be used by<br/>the XQALERT routine.  This field represents the TAG in tag^routine.  | STRING |  | 
**Routine Name**{::nomarkdown}<pre><code>  routine_name</code></pre>{:/} | .07 | This is an optional variable identifying a routine or tag(field .06)^routine<br/>used to create XQAROU for processing by XQALERT. | STRING |  | 
**Non-menu Type Option Action**{::nomarkdown}<pre><code>  nonmenu_type_option_action</code></pre>{:/} | 1 | This is an optional field used to create the variable XQAOPT for use<br/>by XQALERT.  It should indicate a non-menu type option on the user's<br/>primary or secondary menu, not on the Common menu.  The phantom jump <br/>is used to navigate to the destination option and will check pathway<br/>restrictions in doing so. | POINTER |  | [Option-19](Option-19)
**Related Package**{::nomarkdown}<pre><code>  related_package</code></pre>{:/} | 1.5 | This field contains the name of the package where the notification originates or is triggered (e.g., LAB, MAS, Pharmacy.) | STRING |  | 
**Description**{::nomarkdown}<pre><code>  description</code></pre>{:/} | 4 | This field contains free text describing the notification, how it is trig-<br/>gered and what action(s) delete it. | STRING | REQUIRED | 
**Follow-up Type**{::nomarkdown}<pre><code>  followup_type</code></pre>{:/} | 5 | This field contains the type of follow-up action to be taken.  It is used <br/>by the application managing the follow-up action  (e.g. GUI interface) to<br/>initiate the proper follow-up action separate from the underlying data <br/>base and application layers.  Example follow-up types include: report,<br/>e/s, flag. | ENUMERATION |  | {::nomarkdown}EXPIRING_ORDER: <em><strong>2</strong></em><br/>COSIGN_ORDER: <em><strong>8</strong></em><br/>COSIGN_PN: <em><strong>1</strong></em><br/>FLAGGED_ORDER: <em><strong>3</strong></em><br/>UNVERIFIED_MED: <em><strong>11</strong></em><br/>NEW_ORDER: <em><strong>7</strong></em><br/>NEW_CONSULT: <em><strong>6</strong></em><br/>UNSIGN_PN: <em><strong>10</strong></em><br/>REPORT: <em><strong>0</strong></em><br/>ES_ORDER: <em><strong>9</strong></em><br/>UNLINKED: <em><strong>5</strong></em><br/>ORDER: <em><strong>4</strong></em>{:/}

[&uarr; Return to top](#top)<br/>



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:39 pm</p>{:/}