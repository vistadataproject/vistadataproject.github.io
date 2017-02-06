---
layout: default
title: VDM documentation
---

## [VDM](TableOfContent.md) &#8594; Order_Dialog-101_41 

<dl>
<dt>id</dt><dd>Order_Dialog-101_41</dd>
<dt>fmId</dt><dd>101.41</dd>
<dt>label</dt><dd>Order Dialog</dd>
<dt>location</dt><dd>^ORD(101.41,</dd>
<dt>description</dt><dd>This file contains the information needed to define how to prompt for each<br/>order, what values are acceptable, etc.</dd>
</dl>

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
| name | .01 | Name | {::nomarkdown}This is the name of the dialog; entries that were converted from the<br/>Protocol file will retain the same name.  Namespacing is not required,<br/>but still encouraged.{:/} | STRING |  | REQUIRED |  | 
| display_text | 2 | Display Text | {::nomarkdown}The text of this dialog's name as it appears on a menu or subheader.{:/} | STRING |  | INDEXED |  | 
| disable | 3 | Disable | {::nomarkdown}This field disables use of this dialog when it contains text.  The text<br/>should be a short message explaining why use of this dialog has been<br/>disabled, as it will be displayed if this dialog is selected.{:/} | STRING |  |  |  | 
| type-4 | 4 | Type | {::nomarkdown}This field defines the type of order dialog to be processed.  Control<br/>will be passed to the OE/RR Dialog Processor for dialog items; menu types<br/>are used for displaying and selecting dialog items.  Action types will only<br/>execute the entry and exit actions, ignoring any items that may exist; these<br/>dialogs should not create entries in the Orders file.{:/} | ENUMERATION |  | REQUIRED | {::nomarkdown}<dl><dt>P</dt><dd>prompt</dd><dt>D</dt><dd>dialog</dd><dt>M</dt><dd>menu</dd><dt>O</dt><dd>order set</dd><dt>Q</dt><dd>quick order</dd><dt>A</dt><dd>action</dd></dl>{:/} | 
| display_group | 5 | Display Group | {::nomarkdown}This field determines what display group this dialog has been defined for.<br/>It will define which orderable items are selectable with this dialog,<br/>as well as what service to send the order to when it is complete.{:/} | POINTER |  |  | Display_Group-100_98 | 
| signature_required | 6 | Signature Required | {::nomarkdown}This field indicates what signature will be required for orders created by<br/>this dialog, to be considered complete and ready to release to the service<br/>for action.  If this flag is set to NO and the dialog contains a prompt<br/>for item(s) from the Orderable Item file, the order created may still<br/>require a signature if any of the items ordered are individually flagged<br/>as requiring a signature.{:/} | ENUMERATION |  |  | {::nomarkdown}<dl><dt>0</dt><dd>NONE</dd><dt>1</dt><dd>ORELSE</dd><dt>2</dt><dd>ORES</dd></dl>{:/} | 
| package | 7 | Package | {::nomarkdown}This is the VISTA package that is intended to receive orders created by<br/>this dialog; this is required for creating the HL7 messages to pass the<br/>order.{:/} | POINTER |  | INDEXED | Package-9_4 | 
| verify_order | 8 | Verify Order | {::nomarkdown}This field is a flag, which determines if the order created by this dialog<br/>will be presented to the user for verification before saving in the Orders<br/>file; for most quick orders, this flag should be set to 0 (no).{:/} | BOOLEAN |  |  | {::nomarkdown}<dl><dt>0</dt><dd>false</dd><dt>1</dt><dd>true</dd></dl>{:/} | 
| ask_for_another_order | 9 | Ask For Another Order | {::nomarkdown}This field allows the user to add another order from this dialog, when the<br/>initial order is accepted and placed; if set to YES, the user will be<br/>asked \Add another <dialog display text> order?\ to allow for either<br/>exiting the processor or adding an additional order of the same type.<br/>This field can also be set to YES-DON'T ASK to force the processor to<br/>automatically drop into prompting for another order without asking first.{:/} | ENUMERATION |  |  | {::nomarkdown}<dl><dt>1</dt><dd>YES</dd><dt>2</dt><dd>YES-DON'T ASK</dd><dt>0</dt><dd>NO</dd></dl>{:/} | 
| items | 10 | Items | {::nomarkdown}This field contains the components for dialogs:<br/>     Dialogs      -> prompts<br/>     Quick orders -> prompts (completed)<br/>     Order sets   -> dialogs or quick orders<br/>     Menus        -> dialogs, quick orders, or order sets{:/} | [OBJECT] |  |  | [Items-101_412](#Items-101_412)  | 
| data_type | 11 | Data Type | {::nomarkdown}This is the type of data being prompted for; this field is used to define<br/>a call to the reader (^DIR) in most cases.{:/} | ENUMERATION |  |  | {::nomarkdown}<dl><dt>F</dt><dd>free text</dd><dt>S</dt><dd>set of codes</dd><dt>N</dt><dd>numeric</dd><dt>Y</dt><dd>yes/no</dd><dt>D</dt><dd>date/time</dd><dt>W</dt><dd>word processing</dd><dt>R</dt><dd>free text date/time</dd><dt>P</dt><dd>pointer</dd></dl>{:/} | 
| domain | 12 | Domain | {::nomarkdown}This is a parameter that may be used to further specify the data type.<br/>The string stored here should be appropriate for the second ^-piece of<br/>DIR(0) when used with the data type field.{:/} | STRING |  |  |  | 
| id-13 | 13 | Id | {::nomarkdown}This field may contain a single word identifier which will be<br/>stored with the user response in the Orders file #100, where it<br/>will be indexed for quick reference to certain values in the<br/>order dialog.  The following are some examples of values<br/>currently in use:<br/> <br/>   START      -> Start date/time<br/>   STOP       -> Stop date/time<br/>   SCHEDULE   -> Administration Schedule<br/>   ORDERABLE  -> Orderable Item<br/>   DRUG       -> Dispense Drug<br/>   CANCEL     -> Cancel Future Orders flag<br/>   COMMENT    -> Word processing comments<br/> <br/>These values must be unique among entries within an order dialog<br/>but do not need to be unique across the entire file.  Be sure to<br/>check the IDs assigned to generic text entries to make sure that<br/>all IDs are unique.  In order to avoid potential problems it's<br/>recommended that you use unique IDs for any local entries that you<br/>create.{:/} | STRING |  |  |  | 
| validation | 17 | Validation | {::nomarkdown}This is MUMPS code that will be executed at the time of releasing an<br/>order created with this dialog; dialog responses may be checked again<br/>here before releasing the order to the service.{:/} | STRING |  |  |  | 
| additional_text | 19 | Additional Text | {::nomarkdown}This is MUMPS code that will be executed when order ORIFN created by this<br/>dialog is about to be displayed; any string that should be appended to the<br/>order text should be returned in Y.{:/} | STRING |  |  |  | 
| description | 20 | Description | {::nomarkdown}This is a description of the dialog and its uses.{:/} | STRING |  |  |  | 
| responses | 21 | Responses | {::nomarkdown}This multiple contains any responses to prompts that have been pre-answered<br/>to create a quick order.{:/} | [OBJECT] |  |  | [Responses-101_416](#Responses-101_416)  | 
| entry_action | 30 | Entry Action | {::nomarkdown}This is MUMPS code that will be executed at the top of a dialog, prior to<br/>the execution of any prompts; it may perform functions such as listing<br/>the recent Radiology exams before ordering a new one, or alerting the<br/>user to an existing diet order before making a change.{:/} | STRING |  |  |  | 
| quick_setup | 31 | Quick Setup | {::nomarkdown}This is MUMPS code that will be executed in the place of the Entry Action<br/>when creating quick orders for this dialog; variables may be set here<br/>instead to bypass the usual dependence on specific patient values.{:/} | STRING |  |  |  | 
| exit_action | 40 | Exit Action | {::nomarkdown}This is MUMPS code that will be executed upon completion of processing the<br/>dialog; it is currently used only with dialog-type entries.{:/} | STRING |  |  |  | 
| controls | 50 | Controls |  | [OBJECT] |  |  | [Controls-101_415](#Controls-101_415)  | 
| column_width | 51 | Column Width | {::nomarkdown}This is the width, in characters, for each column in a menu.  For example,<br/>to have 3 columns on an 80 character device, enter a width of 26.{:/} | NUMERIC |  |  |  | 
| mnemonic_width | 52 | Mnemonic Width | {::nomarkdown}This field allows the width of item mnemonics to be varied; the default<br/>value is 5.{:/} | NUMERIC |  |  |  | 
| path_switch | 53 | Path Switch | {::nomarkdown}This switch allows the user, when traversing back UP the tree of menus and<br/>items, to select a new path back down the tree.  In other words, the menu<br/>is redisplayed when returning to that menu's level in the tree and<br/>processing back down the tree is possible from that point.  If nothing is<br/>selected from the menu, the path continues back up the tree.{:/} | BOOLEAN |  |  | {::nomarkdown}<dl><dt>0</dt><dd>false</dd><dt>1</dt><dd>true</dd></dl>{:/} | 
| listbox_text | 54 | Listbox Text |  | STRING |  |  |  | 
| window_form_id | 55 | Window Form Id | {::nomarkdown}This field tells the GUI DELPHI code which form to use to process the<br/>order dialog.  Each number represents a unique form.  Following are some<br/>of the more common codes and their corresponding form in DELPHI.<br/> <br/>    Form Name     Windows Form ID<br/>    ---------     ---------------<br/>  OD_ACTIVITY           100<br/>  OD_ALLERGY            105<br/>  OD_CONSULT            110<br/>  OD_PROCEDURE          112<br/>  OD_DIET_TXT           115<br/>  OD_DIET               117<br/>  OD_LAB                120<br/>  OD_MEDINPT            130<br/>  OD_MEDS               135<br/>  OD_MEDOUTPT           140<br/>  OD_NURSING            150<br/>  OD_MISC               151<br/>  OD_GENERIC            152<br/>  OD_IMAGING            160<br/>  OD_VITALS             171 <br/>  OD_MEDIV              180<br/>  OD_TEXTONLY           999{:/} | NUMERIC |  |  |  | 
| create_parent_order | 56 | Create Parent Order | {::nomarkdown}This flag indicates whether a parent order should be created to group<br/>together all the orders created by this order set; this flag is only<br/>valid with SET type order dialogs.  If this value is YES, a parent<br/>order will be created, and only the parent will be presented on the<br/>orders list for display and action; NO will prevent a parent from being<br/>created and all orders will be created and displayed independently.{:/} | BOOLEAN |  |  | {::nomarkdown}<dl><dt>0</dt><dd>false</dd><dt>1</dt><dd>true</dd></dl>{:/} | 
| display_subheader | 57 | Display Subheader | {::nomarkdown}This flag indicates whether a subheader is to be displayed for each order<br/>in this set as it is processed and placed; this flag is only valid with<br/>SET type order dialogs.{:/} | BOOLEAN |  |  | {::nomarkdown}<dl><dt>0</dt><dd>false</dd><dt>1</dt><dd>true</dd></dl>{:/} | 
| autoaccept_quick_order | 58 | Auto-accept Quick Order | {::nomarkdown}This can be set to yes for a quick order so that it can be placed simply<br/>by clicking on it in the GUI (no ordering dialog is displayed).{:/} | BOOLEAN |  |  | {::nomarkdown}<dl><dt>1</dt><dd>true</dd></dl>{:/} | 
| timestamp | 99 | Timestamp | {::nomarkdown}For menus, this contains the $H time the menu was last compiled for use<br/>with the Unwinder utility (^XQOR).{:/} | STRING |  |  |  | 

## <a name="Items-101_412"></a>Items-101_412 

<dl>
<dt>id</dt><dd>Items-101_412</dd>
<dt>fmId</dt><dd>101.412</dd>
<dt>label</dt><dd>Items</dd>
</dl>

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
| sequence | .01 | Sequence | {::nomarkdown}This field specifies the order in which this item will be displayed or<br/>processed.{:/} | NUMERIC |  | REQUIRED, INDEXED |  | 
| input_transform | .1 | Input Transform | {::nomarkdown}This is code that will be used as the third piece of DIR(0) when asking<br/>this prompt.{:/} | STRING |  |  |  | 
| parent | 1 | Parent | {::nomarkdown}This field controls the behavior of this prompt.  If a parent is defined<br/>here, this prompt will be asked from within the parent's dialog; when it<br/>is invoked independently based on its position sequence number, the child<br/>prompt will be ignored.{:/} | POINTER |  |  | Order_Dialog-101_41 | 
| item | 2 | Item | {::nomarkdown}This field points to an order dialog which is subordinate to this dialog.<br/>NOTE:  The parent dialog menu or one of its ancestors may not be entered<br/>as an item.{:/} | POINTER |  | INDEXED | Order_Dialog-101_41 | 
| mnemonic | 3 | Mnemonic | {::nomarkdown}This is a short abbreviation for this item dialog to be used when this<br/>dialog is displayed for selection.{:/} | STRING |  |  |  | 
| display_text | 4 | Display Text | {::nomarkdown}This field allows the text that normally appears for this item to be<br/>replaced with alternate text for use in this dialog or menu.{:/} | STRING |  |  |  | 
| display_only | 5 | Display Only? | {::nomarkdown}This field identifies an item as being free text for display purposes<br/>only.  The text in the Display Text field will be displayed, but it<br/>is not selectable; if designated as a header, the text will be underlined.{:/} | ENUMERATION |  |  | {::nomarkdown}<dl><dt>1</dt><dd>YES</dd><dt>2</dt><dd>YES-HEADER</dd><dt>0</dt><dd>NO</dd></dl>{:/} | 
| required | 6 | Required | {::nomarkdown}This field indicates that the user must enter a response to this prompt.{:/} | BOOLEAN |  |  | {::nomarkdown}<dl><dt>0</dt><dd>false</dd><dt>1</dt><dd>true</dd></dl>{:/} | 
| multiple_valued | 7 | Multiple Valued | {::nomarkdown}This field determines if this prompt will be allowed to have multiple<br/>values, or be prompted for only once; if this prompt is a sub-dialog,<br/>the entire dialog will be asked once or many times, as a group.{:/} | BOOLEAN |  |  | {::nomarkdown}<dl><dt>0</dt><dd>false</dd><dt>1</dt><dd>true</dd></dl>{:/} | 
| max_number_of_multiples | 7.1 | Max Number Of Multiples | {::nomarkdown}This is the maximum number of values that may be entered for this prompt,<br/>if it is flagged as being multiple-valued.  For example, a diet order may<br/>have up to 5 diet modifications entered, where 5 is the maximum allowed<br/>that would be entered here.{:/} | NUMERIC |  |  |  | 
| title | 7.2 | Title | {::nomarkdown}This is text that will be used in place of the prompt when the order is<br/>displayed for place, edit, or cancel, or at the top of a multiple-valued<br/>prompt.  The Display Text for the prompt will be used together with the<br/>instance number to prompt for user input; for example if Title=\Lab Tests:\<br/>and Display Text=\Test:\ the user would see<br/>  Lab Tests:<br/>  1. Test:<br/>  2. Test:{:/} | STRING |  |  |  | 
| prompt | 7.3 | Prompt | {::nomarkdown}This field contains text that will be appended to the beginning of the<br/>display text when prompting for additional values; if this field is<br/>empty, then \Another \ will be used.{:/} | STRING |  |  |  | 
| ask_on_edit_only | 8 | Ask On Edit Only | {::nomarkdown}This field determines the behaviour of the dialog driver for this prompt;<br/>if no value or the defined default is usually correct for this prompt,<br/>enter YES here to have this prompt skipped on the first pass through this<br/>dialog when creating an order.{:/} | BOOLEAN |  |  | {::nomarkdown}<dl><dt>0</dt><dd>false</dd><dt>1</dt><dd>true</dd></dl>{:/} | 
| ask_on_action | 9 | Ask On Action | {::nomarkdown}This field determines the behaviour of the dialog driver for this prompt<br/>when taking a particular action on an order created by this dialog.  If<br/>this string contains \R\, this prompt will be asked when renewing an order;<br/>if this string contains \C\, this prompt will be asked when changing an<br/>order; if this string contains \W\, this prompt will be asked when<br/>rewriting an order.{:/} | STRING |  |  |  | 
| index | 10 | Index | {::nomarkdown}For pointer-type prompts, this is the index to use when searching the file;<br/>it must be in the form of a regular cross-reference.  To search on multiple<br/>indices, enter a string of index names separated by semi-colons, i.e. \B;C\.{:/} | STRING |  |  |  | 
| help_message | 11 | Help Message | {::nomarkdown}This field contains the help message to be presented when the user enters<br/>a question mark at this prompt.{:/} | STRING |  |  |  | 
| special_lookup_routine | 12 | Special Lookup Routine | {::nomarkdown}This field contains a routine to execute that will replace the standard<br/>DIC lookup for this prompt; it must be entered here as LINETAG;ROUTINE<br/>using a ; instead of ^ and where LINETAG is optional.{:/} | STRING |  |  |  | 
| ask_on_condition | 13 | Ask On Condition | {::nomarkdown}This is MUMPS code that sets $T to determine if this prompt should be asked<br/>or simply given a default value and presented to the user for acceptance<br/>or editing.  For example, the prompt \Pregnant: \ may have code here to<br/>check the sex of the current patient, i.e. I ORSEX=\F\ will allow it to be<br/>asked only for female patients.{:/} | STRING |  |  |  | 
| screen | 14 | Screen | {::nomarkdown}For pointer-type prompts, this field may contain MUMPS code that will be<br/>set into DIC(\S\) to screen the possible choices in the pointed-to file.{:/} | STRING |  |  |  | 
| postselection_action | 15 | Post-selection Action | {::nomarkdown}This is code that will be executed after a response is entered to this<br/>prompt; if this prompt should be re-asked, kill the variable DONE.<br/>If execution of the ordering dialog should be stopped, set ORQUIT=1.{:/} | STRING |  |  |  | 
| xecutable_help | 16 | Xecutable Help | {::nomarkdown}This is code that is to be executed when the user enters two or more<br/>question marks at this prompt.{:/} | STRING |  |  |  | 
| default | 17 | Default | {::nomarkdown}This is code that is to be executed to determine the appropriate default<br/>value for this prompt, setting Y=internal form of this value.{:/} | STRING |  |  |  | 
| default_wordprocessing_text | 18 | Default Word-processing Text | {::nomarkdown}This is default text to be stuffed into this word-processing prompt.{:/} | STRING |  |  |  | 
| entry_action | 19 | Entry Action | {::nomarkdown}This is code that will be executed at the beginning of the processing of<br/>this prompt, before the Default and Ask on Condition fields are executed;<br/>any special setup required for this field should be done here.{:/} | STRING |  |  |  | 
| exit_action | 20 | Exit Action | {::nomarkdown}This is code that will be executed at the very end of the processing of<br/>this prompt, after prompting and the Validation field is executed;<br/>any special cleanup should be done here.{:/} | STRING |  |  |  | 
| order_text_sequence | 21 | Order Text Sequence | {::nomarkdown}This field indicates the order in which values will be concatenated<br/>together to build the order text; this may differ from the prompting<br/>order defined in the .01 Sequence field.{:/} | NUMERIC |  | INDEXED |  | 
| format | 22 | Format | {::nomarkdown}This is a string of characters that will define any exceptions to how<br/>the external form of this value is generated.  Possible values include:<br/>  Pointer         -> <field #>~<piece in RPC list of field #>, default =.01<br/>  Set of Codes    -> 1~<piece in RPC list of code> to use code for name<br/>  Date/Time       -> Format string to pass $$FMTE^XLFDT (default = 2)<br/>  <br/>  Suppress value  -> @<br/>  Replace value   -> @<ptr> where ptr is the Dialog IEN of the prompt<br/>                      whose value, when present, supersedes this value<br/>  Required value  -> *<ptr> where ptr is the Dialog IEN of the prompt<br/>                      whose value is required to be present to include<br/>                      this value<br/>  Ignore if same  -> =<ptr> where ptr is the Dialog IEN of the prompt<br/>                      whose value, if the external form is the same,<br/>                      supersedes this value{:/} | STRING |  |  |  | 
| omit_text | 23 | Omit Text | {::nomarkdown}This is the external form of a value that is not to be included when building<br/>the order text.  E.g. to include the urgency in the order text unless it<br/>is routine, enter \ROUTINE\ here.{:/} | STRING |  |  |  | 
| leading_text | 24 | Leading Text | {::nomarkdown}This field contains text that will be appended to the order text<br/>immediately in front of this value, e.g. \Instructions:\.  If this text<br/>is contained in a variable, enter @NAME where NAME is the variable name.{:/} | STRING |  |  |  | 
| trailing_text | 25 | Trailing Text | {::nomarkdown}This field contains text that will be appended to the order text<br/>immediately following this value, e.g. <br/>efills\.  If this text is<br/>contained in a variable, enter @NAME where NAME is the variable name.{:/} | STRING |  |  |  | 
| start_new_line | 26 | Start New Line | {::nomarkdown}This field determines if this value is concatenated onto the current line<br/>when building the order text, or if a new line is started with this value.{:/} | BOOLEAN |  |  | {::nomarkdown}<dl><dt>0</dt><dd>false</dd><dt>1</dt><dd>true</dd></dl>{:/} | 
| wordwrap | 27 | Word-wrap | {::nomarkdown}This field determines if this text should be wrapped when added to the<br/>order text, or appended line by line as stored in the file; this is only<br/>used for word-processing type prompts.{:/} | ENUMERATION |  |  | {::nomarkdown}<dl><dt>1</dt><dd>DON'T WRAP</dd><dt>0</dt><dd>WRAP</dd></dl>{:/} | 
| windows_control | 101 | Windows Control | {::nomarkdown}Stores the type of Windows control necessary to get the data for this<br/>prompt.{:/} | STRING |  |  |  | 
| api_name | 102 | Api Name | {::nomarkdown}This is the API that should be called when the control is used.  How the API<br/>is used varys with the control.  Examples are: filling list boxes, getting<br/>boilerplate text, etc.{:/} | STRING |  |  |  | 
| api_parameter_number1 | 103 | Api Parameter #1 | {::nomarkdown}A parameter that is used by the API call may be stored here.{:/} | STRING |  |  |  | 
| windows_condition | 113 | Windows Condition | {::nomarkdown}This is silent code that is executed when building the dialog for windows.<br/>It identifies which prompts should be included in the dialog.  The condition<br/>should leave $T false if the prompt should not be asked.{:/} | STRING |  |  |  | 
| windows_default | 117 | Windows Default | {::nomarkdown}This code should silently set the default value of a prompt when it is <br/>selected.{:/} | STRING |  |  |  | 

## <a name="Responses-101_416"></a>Responses-101_416 

<dl>
<dt>id</dt><dd>Responses-101_416</dd>
<dt>fmId</dt><dd>101.416</dd>
<dt>label</dt><dd>Responses</dd>
</dl>

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
| item_entry | .01 | Item Entry | {::nomarkdown}This is the internal entry number of the prompt in the Item multiple<br/>by which this response was obtained.{:/} | NUMERIC |  | REQUIRED |  | 
| dialog | .02 | Dialog | {::nomarkdown}This is a pointer to the dialog prompt, which is in the Order Dialog file<br/>as type prompt.{:/} | POINTER |  | INDEXED | Order_Dialog-101_41 | 
| instance | .03 | Instance | {::nomarkdown}In the case of multiple answers for the same item, this identifies the<br/>individual instance.{:/} | NUMERIC |  |  |  | 
| value | 1 | Value | {::nomarkdown}This contains the actual response, unless the value is a word processing<br/>type.{:/} | STRING |  |  |  | 
| text | 2 | Text | {::nomarkdown}This contains the actual response, for word-processing type prompts.{:/} | STRING |  |  |  | 

## <a name="Controls-101_415"></a>Controls-101_415 

<dl>
<dt>id</dt><dd>Controls-101_415</dd>
<dt>fmId</dt><dd>101.415</dd>
<dt>label</dt><dd>Controls</dd>
</dl>

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
| logical_name | .01 | Logical Name | {::nomarkdown}This is the name by which controls can refer to each other.{:/} | STRING |  | REQUIRED, INDEXED |  | 
| item | 2 | Item |  | POINTER |  |  | Order_Dialog-101_41 | 
| create_sequence | 3 | Create Sequence |  | NUMERIC |  | INDEXED |  | 
| control_type | 4 | Control Type |  | ENUMERATION |  |  | {::nomarkdown}<dl><dt>7</dt><dd>LongCombo</dd><dt>2</dt><dd>Edit</dd><dt>1</dt><dd>Button</dd><dt>0</dt><dd>Label</dd><dt>5</dt><dd>SimpleCombo</dd><dt>4</dt><dd>ListBox</dd><dt>3</dt><dd>Memo</dd><dt>6</dt><dd>DropDownList</dd></dl>{:/} | 
| label-5 | 5 | Label |  | STRING |  |  |  | 
| beside | 6 | Beside |  | STRING |  |  |  | 
| below | 7 | Below |  | STRING |  |  |  | 
| width | 8 | Width |  | NUMERIC |  |  |  | 
| left_control | 9 | Left Control |  | STRING |  |  |  | 
| right_control | 10 | Right Control |  | STRING |  |  |  | 
| height | 11 | Height |  | NUMERIC |  |  |  | 
| upper_control | 12 | Upper Control |  | STRING |  |  |  | 
| lower_control | 13 | Lower Control |  | STRING |  |  |  | 
| tab_sequence | 14 | Tab Sequence |  | NUMERIC |  |  |  | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on February 3rd 2017, 6:27:56 am</p>{:/}