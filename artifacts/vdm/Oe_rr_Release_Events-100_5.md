---
layout: default
title: VDM documentation
---

## [VDM](TableOfContent.md) &#8594; Oe_rr_Release_Events-100_5 

<dl>
<dt>id</dt><dd>Oe_rr_Release_Events-100_5</dd>
<dt>fmId</dt><dd>100.5</dd>
<dt>label</dt><dd>Oe/rr Release Events</dd>
<dt>location</dt><dd>^ORD(100.5,</dd>
<dt>description</dt><dd>}This file contains the locally-defined events that can release delayed<br/>orders within each division.<br/> <br/>It is strongly recommended that this file not be edited with<br/>File Manager.  Please use the edit options provided within CPRS.</dd>
</dl>

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
| name | .01 | Name | {::nomarkdown}This is the name of the event, used to uniquely identify it in the file;<br/>it is visible in the Event Editor only.{:/} | STRING |  | REQUIRED, INDEXED |  | 
| short_name | .1 | Short Name | {::nomarkdown}This field contains a shorter version of the Display Text, to be used<br/>for displaying and grouping delayed orders on the Orders tab where space<br/>is limited.{:/} | STRING |  |  |  | 
| inactivated | 1 | Inactivated | {::nomarkdown}This field contains the date and time that this event became inactive;<br/>once this date/time has passed, this event may no longer be selected for<br/>delaying orders, however any orders already delayed for this event will<br/>still be released when the event occurs.  If this date/time is in the<br/>future, this event may continue to be selected for delaying orders until<br/>this time passes.{:/} | DATE-TIME |  |  |  | 
| activation_history | 1.5 | Activation History |  | [OBJECT] |  |  | [Activation_History-100_52](#Activation_History-100_52)  | 
| type_of_event | 2 | Type Of Event | {::nomarkdown}This is the event that should cause delayed orders to be released to the<br/>service(s) for action; for OR (Surgery) events, the orders will be<br/>released when TIME PAT IN OR (#130,.205) is entered in the Surgery<br/>package.  <br/> <br/>Orders delayed for Manual Release will not be automatically<br/>released by CPRS at all and can only be released via the \Release to<br/>Service\ action by a user who is authorized to do so.  Authorization is<br/>controlled by the parameter OREVNT MANUAL RELEASE CONTROL, which lets<br/>sites choose whether release is controlled by keys or by the parameter<br/>OREVNT MANUAL RELEASE or both.{:/} | ENUMERATION |  | REQUIRED, INDEXED | {::nomarkdown}<dl><dt>T</dt><dd>TRANSFER</dd><dt>A</dt><dd>ADMISSION</dd><dt>O</dt><dd>O.R.</dd><dt>M</dt><dd>MANUAL RELEASE</dd><dt>D</dt><dd>DISCHARGE</dd></dl>{:/} | 
| division | 3 | Division | {::nomarkdown}This is the division that this event will apply to; for transfers across<br/>divisions, this should be the new division that the patient is going to.{:/} | POINTER |  | REQUIRED | [Institution-4](Institution-4.md) | 
| event_order_dialog | 4 | Event Order Dialog | {::nomarkdown}This should be the dialog for a generic order requesting this event; if<br/>such an order is not necessary for this event, leave this empty.  Unlike<br/>other delayed orders, the order created by this dialog will become<br/>active right away when signed and be visible on the Active Orders view<br/>as well as with the delayed orders on the Orders tab.{:/} | POINTER |  |  | Order_Dialog-101_41 | 
| order_set_menu | 5 | Order Set/menu | {::nomarkdown}This is a menu or order set containing items that are either necessary<br/>or commonly ordered when this event occurs.  It will be invoked right<br/>away when first placing delayed orders for this event; if an EVENT ORDER<br/>DIALOG was defined for this event, this order set will be presented to the<br/>user immediately following that dialog.  You may enter any type of order<br/>dialog except prompt types.{:/} | POINTER |  |  | Order_Dialog-101_41 | 
| lapse_in_numberdays | 6 | Lapse In #days | {::nomarkdown}This is the number of days to allow orders for this event to remain<br/>delayed for a patient.  Patient Events are evaluated whenever delayed<br/>orders are acted upon or viewed, and if this number of days has passed<br/>since delayed orders were entered for this event for the patient then<br/>the status of all orders delayed for this event will be changed to<br/>\lapsed\ and the Patient Event itself will be terminated.  The orders<br/>can no longer be released to the service then.{:/} | NUMERIC |  |  |  | 
| mas_movement_type | 7 | Mas Movement Type | {::nomarkdown}This is an MAS Movement Type that can further define this event; it is<br/>optional, but if defined then it must match the patient's movement data<br/>to satisfy the event and cause any delayed orders to be released.  For<br/>example, to have delayed orders released when a patient returns from<br/>pass enter the movement type of AUTH ABSENCE 96 HOURS OR LESS, or leave<br/>this field empty to have the transfer event defined by other criteria<br/>such as treating specialty or ward location.{:/} | POINTER |  |  | Mas_Movement_Type-405_2 | 
| display_text | 8 | Display Text | {::nomarkdown}This field is the name of the event as it will appear to the user in<br/>CPRS.{:/} | STRING |  | REQUIRED |  | 
| ordering_parameters_location | 9 | Ordering Parameters Location | {::nomarkdown}Many order dialogs use parameters that depend on location; this field<br/>will be used as the default location for retrieving those parameter<br/>values when delaying orders to this event.  The patient's actual<br/>location will be saved with the order at the time of its release.{:/} | POINTER |  |  | [Hospital_Location-44](Hospital_Location-44.md) | 
| included_treating_specialties | 10 | Included Treating Specialties | {::nomarkdown}These are treating specialties that can satisfy this event; if the<br/>patient's new specialty matches one in this list then orders delayed<br/>for this event may be released.{:/} | [OBJECT] |  |  | [Included_Treating_Specialties-100_51](#Included_Treating_Specialties-100_51)  | 
| included_locations | 11 | Included Locations | {::nomarkdown}These are ward locations that can satisfy this event; if the patient's new<br/>location matches one in this list then orders delayed for this event may<br/>be released.{:/} | [POINTER] |  |  | {id:Ward_Location-42} | 
| edit_history | 12 | Edit History |  | [OBJECT] |  |  | [Edit_History-100_512](#Edit_History-100_512)  | 
| copy_active_orders | 13 | Copy Active Orders | {::nomarkdown}This field determines whether or not the user will be presented <br/>with the patient's active orders, which may then be copied to the <br/>delayed event being created.<br/> <br/>If this field is set to no then the user will not see the <br/>patient's active orders and will not be allowed to copy any <br/>current orders.<br/> <br/>If this field is set to yes then the user will be shown the <br/>patient's active orders and the user may select orders to be <br/>copied to the delayed event.  The list of active orders will be <br/>presented to the user after the ORDER DIALOG for the release <br/>event is processed (if it exists) and before the ORDER SET/MENU <br/>for the release event is processed (if it exists).{:/} | BOOLEAN |  |  | {::nomarkdown}<dl><dt>0</dt><dd>false</dd><dt>1</dt><dd>true</dd></dl>{:/} | 
| parent | 14 | Parent | {::nomarkdown}For release events that have a common trigger event (e.g. same<br/>treating specialty or same locations) but require different names<br/>or display text a parent-child relationship can be set up.  The parent<br/>contains the base trigger event logic while the child contains the<br/>information unique to this event.  In a sense, the child events are<br/>\synonyms\ to the parent event as all childen are related to the parent.<br/>When the trigger event occurs that would release orders for the parent<br/>all the child orders related to that parent are also released.{:/} | POINTER |  | INDEXED | Oe_rr_Release_Events-100_5 | 

## <a name="Activation_History-100_52"></a>Activation_History-100_52 

<dl>
<dt>id</dt><dd>Activation_History-100_52</dd>
<dt>label</dt><dd>Activation History</dd>
</dl>

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
| activation_date_time | .01 | Activation Date/time |  | DATE-TIME |  | REQUIRED, INDEXED |  | 
| inactivation_date_time | 1 | Inactivation Date/time |  | DATE-TIME |  |  |  | 

## <a name="Included_Treating_Specialties-100_51"></a>Included_Treating_Specialties-100_51 

<dl>
<dt>id</dt><dd>Included_Treating_Specialties-100_51</dd>
<dt>label</dt><dd>Included Treating Specialties</dd>
</dl>

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
| included_treating_specialties | .01 | Included Treating Specialties | {::nomarkdown}This is a treating specialty that can satisfy this event; if defined,<br/>then the patient's new specialty must match one in this list for any<br/>delayed orders to be released.  A specialty may only be included in one<br/>active delay event at a time.<br/> <br/>If locations are also defined for this event then both the treating<br/>specialty and the location must match for orders to be released.{:/} | POINTER |  | REQUIRED, INDEXED | Facility_Treating_Specialty-45_7 | 
| default | 1 | Default |  | BOOLEAN |  | INDEXED | {::nomarkdown}<dl><dt>1</dt><dd>true</dd></dl>{:/} | 

## <a name="Edit_History-100_512"></a>Edit_History-100_512 

<dl>
<dt>id</dt><dd>Edit_History-100_512</dd>
<dt>label</dt><dd>Edit History</dd>
</dl>

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
| edit_history | .01 | Edit History | {::nomarkdown}This field will track when an event was added.  It also tracks when<br/>the edit option was used on this event.{:/} | DATE-TIME |  | REQUIRED, INDEXED |  | 
| who_entered_edited | 1 | Who Entered/edited | {::nomarkdown}This field identifies the person who entered or edited the event{:/} | POINTER |  |  | [New_Person-200](New_Person-200.md) | 
| action | 2 | Action | {::nomarkdown}This field describes whether the event was newly entered or if it<br/>was edited.{:/} | ENUMERATION |  |  | {::nomarkdown}<dl><dt>E</dt><dd>EDIT</dd><dt>N</dt><dd>NEW</dd></dl>{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 30th 2017, 8:13:27 pm</p>{:/}