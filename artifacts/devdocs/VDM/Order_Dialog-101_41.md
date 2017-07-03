---
layout: default
title: VDM
---

## [VDM](TableOfContents) &#8594; Order_Dialog-101_41
# Order Dialog (101.41)
This file contains the information needed to define how to prompt for each order, what values are acceptable, etc.

<dl>
<dt>Global</dt><dd>^ORD(101.41,</dd>
<dt>Domain</dt><dd>Non-Clinical</dd>
</dl>

### Properties

Field | ID | Description | Datatype | Attributes | Range
--- | --- | --- | --- | --- | ---
**Name**{::nomarkdown}<pre><code>  name</code></pre>{:/} | .01 | This is the name of the dialog; entries that were converted from the<br/>Protocol file will retain the same name.  Namespacing is not required,<br/>but still encouraged. | STRING | REQUIRED | 
**Display Text**{::nomarkdown}<pre><code>  display_text</code></pre>{:/} | 2 | The text of this dialog's name as it appears on a menu or subheader. | STRING | INDEXED | 
**Disable**{::nomarkdown}<pre><code>  disable</code></pre>{:/} | 3 | This field disables use of this dialog when it contains text.  The text<br/>should be a short message explaining why use of this dialog has been<br/>disabled, as it will be displayed if this dialog is selected. | STRING |  | 
**Type**{::nomarkdown}<pre><code>  type-4</code></pre>{:/} | 4 | This field defines the type of order dialog to be processed.  Control<br/>will be passed to the OE/RR Dialog Processor for dialog items; menu types<br/>are used for displaying and selecting dialog items.  Action types will only<br/>execute the entry and exit actions, ignoring any items that may exist; these<br/>dialogs should not create entries in the Orders file. | ENUMERATION | REQUIRED | {::nomarkdown}prompt: <em><strong>P</strong></em><br/>dialog: <em><strong>D</strong></em><br/>menu: <em><strong>M</strong></em><br/>order set: <em><strong>O</strong></em><br/>quick order: <em><strong>Q</strong></em><br/>action: <em><strong>A</strong></em>{:/}
**Display Group**{::nomarkdown}<pre><code>  display_group</code></pre>{:/} | 5 | This field determines what display group this dialog has been defined for.<br/>It will define which orderable items are selectable with this dialog,<br/>as well as what service to send the order to when it is complete. | POINTER |  | [Display_Group-100_98](Display_Group-100_98)
**Signature Required**{::nomarkdown}<pre><code>  signature_required</code></pre>{:/} | 6 | This field indicates what signature will be required for orders created by<br/>this dialog, to be considered complete and ready to release to the service<br/>for action.  If this flag is set to NO and the dialog contains a prompt<br/>for item(s) from the Orderable Item file, the order created may still<br/>require a signature if any of the items ordered are individually flagged<br/>as requiring a signature. | ENUMERATION |  | {::nomarkdown}NONE: <em><strong>0</strong></em><br/>ORELSE: <em><strong>1</strong></em><br/>ORES: <em><strong>2</strong></em>{:/}
**Package**{::nomarkdown}<pre><code>  package</code></pre>{:/} | 7 | This is the VISTA package that is intended to receive orders created by<br/>this dialog; this is required for creating the HL7 messages to pass the<br/>order. | POINTER | INDEXED | [Package-9_4](Package-9_4)
**Verify Order**{::nomarkdown}<pre><code>  verify_order</code></pre>{:/} | 8 | This field is a flag, which determines if the order created by this dialog<br/>will be presented to the user for verification before saving in the Orders<br/>file; for most quick orders, this flag should be set to 0 (no). | BOOLEAN |  | {::nomarkdown}false: <em><strong>0</strong></em><br/>true: <em><strong>1</strong></em>{:/}
**Ask For Another Order**{::nomarkdown}<pre><code>  ask_for_another_order</code></pre>{:/} | 9 | This field allows the user to add another order from this dialog, when the<br/>initial order is accepted and placed; if set to YES, the user will be<br/>asked "Add another <dialog display text> order?" to allow for either<br/>exiting the processor or adding an additional order of the same type.<br/>This field can also be set to YES-DON'T ASK to force the processor to<br/>automatically drop into prompting for another order without asking first. | ENUMERATION |  | {::nomarkdown}YES: <em><strong>1</strong></em><br/>YES-DON'T ASK: <em><strong>2</strong></em><br/>NO: <em><strong>0</strong></em>{:/}
**Items**{::nomarkdown}<pre><code>  items</code></pre>{:/} | 10 | This field contains the components for dialogs:<br/>     Dialogs      -> prompts<br/>     Quick orders -> prompts (completed)<br/>     Order sets   -> dialogs or quick orders<br/>     Menus        -> dialogs, quick orders, or order sets | OBJECT |  | [Items-101_412](#Items-101_412)
**Data Type**{::nomarkdown}<pre><code>  data_type</code></pre>{:/} | 11 | This is the type of data being prompted for; this field is used to define<br/>a call to the reader (^DIR) in most cases. | ENUMERATION |  | {::nomarkdown}free text: <em><strong>F</strong></em><br/>set of codes: <em><strong>S</strong></em><br/>numeric: <em><strong>N</strong></em><br/>yes/no: <em><strong>Y</strong></em><br/>date/time: <em><strong>D</strong></em><br/>word processing: <em><strong>W</strong></em><br/>free text date/time: <em><strong>R</strong></em><br/>pointer: <em><strong>P</strong></em>{:/}
**Domain**{::nomarkdown}<pre><code>  domain</code></pre>{:/} | 12 | This is a parameter that may be used to further specify the data type.<br/>The string stored here should be appropriate for the second ^-piece of<br/>DIR(0) when used with the data type field. | STRING |  | 
**Id**{::nomarkdown}<pre><code>  id-13</code></pre>{:/} | 13 | This field may contain a single word identifier which will be<br/>stored with the user response in the Orders file #100, where it<br/>will be indexed for quick reference to certain values in the<br/>order dialog.  The following are some examples of values<br/>currently in use:<br/> <br/>   START      -> Start date/time<br/>   STOP       -> Stop date/time<br/>   SCHEDULE   -> Administration Schedule<br/>   ORDERABLE  -> Orderable Item<br/>   DRUG       -> Dispense Drug<br/>   CANCEL     -> Cancel Future Orders flag<br/>   COMMENT    -> Word processing comments<br/> <br/>These values must be unique among entries within an order dialog<br/>but do not need to be unique across the entire file.  Be sure to<br/>check the IDs assigned to generic text entries to make sure that<br/>all IDs are unique.  In order to avoid potential problems it's<br/>recommended that you use unique IDs for any local entries that you<br/>create. | STRING |  | 
**Validation**{::nomarkdown}<pre><code>  validation</code></pre>{:/} | 17 | This is MUMPS code that will be executed at the time of releasing an<br/>order created with this dialog; dialog responses may be checked again<br/>here before releasing the order to the service. | STRING |  | 
**Additional Text**{::nomarkdown}<pre><code>  additional_text</code></pre>{:/} | 19 | This is MUMPS code that will be executed when order ORIFN created by this<br/>dialog is about to be displayed; any string that should be appended to the<br/>order text should be returned in Y. | STRING |  | 
**Description**{::nomarkdown}<pre><code>  description</code></pre>{:/} | 20 | This is a description of the dialog and its uses. | STRING |  | 
**Responses**{::nomarkdown}<pre><code>  responses</code></pre>{:/} | 21 | This multiple contains any responses to prompts that have been pre-answered<br/>to create a quick order. | OBJECT |  | [Responses-101_416](#Responses-101_416)
**Entry Action**{::nomarkdown}<pre><code>  entry_action</code></pre>{:/} | 30 | This is MUMPS code that will be executed at the top of a dialog, prior to<br/>the execution of any prompts; it may perform functions such as listing<br/>the recent Radiology exams before ordering a new one, or alerting the<br/>user to an existing diet order before making a change. | STRING |  | 
**Quick Setup**{::nomarkdown}<pre><code>  quick_setup</code></pre>{:/} | 31 | This is MUMPS code that will be executed in the place of the Entry Action<br/>when creating quick orders for this dialog; variables may be set here<br/>instead to bypass the usual dependence on specific patient values. | STRING |  | 
**Exit Action**{::nomarkdown}<pre><code>  exit_action</code></pre>{:/} | 40 | This is MUMPS code that will be executed upon completion of processing the<br/>dialog; it is currently used only with dialog-type entries. | STRING |  | 
**Controls**{::nomarkdown}<pre><code>  controls</code></pre>{:/} | 50 |  | OBJECT |  | [Controls-101_415](#Controls-101_415)
**Column Width**{::nomarkdown}<pre><code>  column_width</code></pre>{:/} | 51 | This is the width, in characters, for each column in a menu.  For example,<br/>to have 3 columns on an 80 character device, enter a width of 26. | NUMERIC |  | 
**Mnemonic Width**{::nomarkdown}<pre><code>  mnemonic_width</code></pre>{:/} | 52 | This field allows the width of item mnemonics to be varied; the default<br/>value is 5. | NUMERIC |  | 
**Path Switch**{::nomarkdown}<pre><code>  path_switch</code></pre>{:/} | 53 | This switch allows the user, when traversing back UP the tree of menus and<br/>items, to select a new path back down the tree.  In other words, the menu<br/>is redisplayed when returning to that menu's level in the tree and<br/>processing back down the tree is possible from that point.  If nothing is<br/>selected from the menu, the path continues back up the tree. | BOOLEAN |  | {::nomarkdown}false: <em><strong>0</strong></em><br/>true: <em><strong>1</strong></em>{:/}
**Listbox Text**{::nomarkdown}<pre><code>  listbox_text</code></pre>{:/} | 54 |  | STRING |  | 
**Window Form Id**{::nomarkdown}<pre><code>  window_form_id</code></pre>{:/} | 55 | This field tells the GUI DELPHI code which form to use to process the<br/>order dialog.  Each number represents a unique form.  Following are some<br/>of the more common codes and their corresponding form in DELPHI.<br/> <br/>    Form Name     Windows Form ID<br/>    ---------     ---------------<br/>  OD_ACTIVITY           100<br/>  OD_ALLERGY            105<br/>  OD_CONSULT            110<br/>  OD_PROCEDURE          112<br/>  OD_DIET_TXT           115<br/>  OD_DIET               117<br/>  OD_LAB                120<br/>  OD_MEDINPT            130<br/>  OD_MEDS               135<br/>  OD_MEDOUTPT           140<br/>  OD_NURSING            150<br/>  OD_MISC               151<br/>  OD_GENERIC            152<br/>  OD_IMAGING            160<br/>  OD_VITALS             171 <br/>  OD_MEDIV              180<br/>  OD_TEXTONLY           999 | NUMERIC |  | 
**Create Parent Order**{::nomarkdown}<pre><code>  create_parent_order</code></pre>{:/} | 56 | This flag indicates whether a parent order should be created to group<br/>together all the orders created by this order set; this flag is only<br/>valid with SET type order dialogs.  If this value is YES, a parent<br/>order will be created, and only the parent will be presented on the<br/>orders list for display and action; NO will prevent a parent from being<br/>created and all orders will be created and displayed independently. | BOOLEAN |  | {::nomarkdown}false: <em><strong>0</strong></em><br/>true: <em><strong>1</strong></em>{:/}
**Display Subheader**{::nomarkdown}<pre><code>  display_subheader</code></pre>{:/} | 57 | This flag indicates whether a subheader is to be displayed for each order<br/>in this set as it is processed and placed; this flag is only valid with<br/>SET type order dialogs. | BOOLEAN |  | {::nomarkdown}false: <em><strong>0</strong></em><br/>true: <em><strong>1</strong></em>{:/}
**Auto-accept Quick Order**{::nomarkdown}<pre><code>  autoaccept_quick_order</code></pre>{:/} | 58 | This can be set to yes for a quick order so that it can be placed simply<br/>by clicking on it in the GUI (no ordering dialog is displayed). | BOOLEAN |  | {::nomarkdown}true: <em><strong>1</strong></em>{:/}
**Timestamp**{::nomarkdown}<pre><code>  timestamp</code></pre>{:/} | 99 | For menus, this contains the $H time the menu was last compiled for use<br/>with the Unwinder utility (^XQOR). | STRING |  | 

### Subfile
#### <a name="Items-101_412"></a>Items

<dl>
<dt>ID</dt><dd>Items-101_412</dd>
<dt>File Type</dt><dd>101.412</dd>
<dt>Label</dt><dd>Items</dd></dl>

#### Properties

Field | ID | Description | Datatype | Attributes | Range
--- | --- | --- | --- | --- | ---
**Sequence**{::nomarkdown}<pre><code>  sequence</code></pre>{:/} | .01 | This field specifies the order in which this item will be displayed or<br/>processed. | NUMERIC | INDEXED<br/>REQUIRED | 
**Input Transform**{::nomarkdown}<pre><code>  input_transform</code></pre>{:/} | .1 | This is code that will be used as the third piece of DIR(0) when asking<br/>this prompt. | STRING |  | 
**Parent**{::nomarkdown}<pre><code>  parent</code></pre>{:/} | 1 | This field controls the behavior of this prompt.  If a parent is defined<br/>here, this prompt will be asked from within the parent's dialog; when it<br/>is invoked independently based on its position sequence number, the child<br/>prompt will be ignored. | POINTER |  | [Order_Dialog-101_41](Order_Dialog-101_41)
**Item**{::nomarkdown}<pre><code>  item</code></pre>{:/} | 2 | This field points to an order dialog which is subordinate to this dialog.<br/>NOTE:  The parent dialog menu or one of its ancestors may not be entered<br/>as an item. | POINTER | INDEXED | [Order_Dialog-101_41](Order_Dialog-101_41)
**Mnemonic**{::nomarkdown}<pre><code>  mnemonic</code></pre>{:/} | 3 | This is a short abbreviation for this item dialog to be used when this<br/>dialog is displayed for selection. | STRING |  | 
**Display Text**{::nomarkdown}<pre><code>  display_text</code></pre>{:/} | 4 | This field allows the text that normally appears for this item to be<br/>replaced with alternate text for use in this dialog or menu. | STRING |  | 
**Display Only?**{::nomarkdown}<pre><code>  display_only</code></pre>{:/} | 5 | This field identifies an item as being free text for display purposes<br/>only.  The text in the Display Text field will be displayed, but it<br/>is not selectable; if designated as a header, the text will be underlined. | ENUMERATION |  | {::nomarkdown}YES: <em><strong>1</strong></em><br/>YES-HEADER: <em><strong>2</strong></em><br/>NO: <em><strong>0</strong></em>{:/}
**Required**{::nomarkdown}<pre><code>  required</code></pre>{:/} | 6 | This field indicates that the user must enter a response to this prompt. | BOOLEAN |  | {::nomarkdown}false: <em><strong>0</strong></em><br/>true: <em><strong>1</strong></em>{:/}
**Multiple Valued**{::nomarkdown}<pre><code>  multiple_valued</code></pre>{:/} | 7 | This field determines if this prompt will be allowed to have multiple<br/>values, or be prompted for only once; if this prompt is a sub-dialog,<br/>the entire dialog will be asked once or many times, as a group. | BOOLEAN |  | {::nomarkdown}false: <em><strong>0</strong></em><br/>true: <em><strong>1</strong></em>{:/}
**Max Number Of Multiples**{::nomarkdown}<pre><code>  max_number_of_multiples</code></pre>{:/} | 7.1 | This is the maximum number of values that may be entered for this prompt,<br/>if it is flagged as being multiple-valued.  For example, a diet order may<br/>have up to 5 diet modifications entered, where 5 is the maximum allowed<br/>that would be entered here. | NUMERIC |  | 
**Title**{::nomarkdown}<pre><code>  title</code></pre>{:/} | 7.2 | This is text that will be used in place of the prompt when the order is<br/>displayed for place, edit, or cancel, or at the top of a multiple-valued<br/>prompt.  The Display Text for the prompt will be used together with the<br/>instance number to prompt for user input; for example if Title="Lab Tests:"<br/>and Display Text="Test:" the user would see<br/>  Lab Tests:<br/>  1. Test:<br/>  2. Test: | STRING |  | 
**Prompt**{::nomarkdown}<pre><code>  prompt</code></pre>{:/} | 7.3 | This field contains text that will be appended to the beginning of the<br/>display text when prompting for additional values; if this field is<br/>empty, then "Another " will be used. | STRING |  | 
**Ask On Edit Only**{::nomarkdown}<pre><code>  ask_on_edit_only</code></pre>{:/} | 8 | This field determines the behaviour of the dialog driver for this prompt;<br/>if no value or the defined default is usually correct for this prompt,<br/>enter YES here to have this prompt skipped on the first pass through this<br/>dialog when creating an order. | BOOLEAN |  | {::nomarkdown}false: <em><strong>0</strong></em><br/>true: <em><strong>1</strong></em>{:/}
**Ask On Action**{::nomarkdown}<pre><code>  ask_on_action</code></pre>{:/} | 9 | This field determines the behaviour of the dialog driver for this prompt<br/>when taking a particular action on an order created by this dialog.  If<br/>this string contains "R", this prompt will be asked when renewing an order;<br/>if this string contains "C", this prompt will be asked when changing an<br/>order; if this string contains "W", this prompt will be asked when<br/>rewriting an order. | STRING |  | 
**Index**{::nomarkdown}<pre><code>  index</code></pre>{:/} | 10 | For pointer-type prompts, this is the index to use when searching the file;<br/>it must be in the form of a regular cross-reference.  To search on multiple<br/>indices, enter a string of index names separated by semi-colons, i.e. "B;C". | STRING |  | 
**Help Message**{::nomarkdown}<pre><code>  help_message</code></pre>{:/} | 11 | This field contains the help message to be presented when the user enters<br/>a question mark at this prompt. | STRING |  | 
**Special Lookup Routine**{::nomarkdown}<pre><code>  special_lookup_routine</code></pre>{:/} | 12 | This field contains a routine to execute that will replace the standard<br/>DIC lookup for this prompt; it must be entered here as LINETAG;ROUTINE<br/>using a ; instead of ^ and where LINETAG is optional. | STRING |  | 
**Ask On Condition**{::nomarkdown}<pre><code>  ask_on_condition</code></pre>{:/} | 13 | This is MUMPS code that sets $T to determine if this prompt should be asked<br/>or simply given a default value and presented to the user for acceptance<br/>or editing.  For example, the prompt "Pregnant: " may have code here to<br/>check the sex of the current patient, i.e. I ORSEX="F" will allow it to be<br/>asked only for female patients. | STRING |  | 
**Screen**{::nomarkdown}<pre><code>  screen</code></pre>{:/} | 14 | For pointer-type prompts, this field may contain MUMPS code that will be<br/>set into DIC("S") to screen the possible choices in the pointed-to file. | STRING |  | 
**Post-selection Action**{::nomarkdown}<pre><code>  postselection_action</code></pre>{:/} | 15 | This is code that will be executed after a response is entered to this<br/>prompt; if this prompt should be re-asked, kill the variable DONE.<br/>If execution of the ordering dialog should be stopped, set ORQUIT=1. | STRING |  | 
**Xecutable Help**{::nomarkdown}<pre><code>  xecutable_help</code></pre>{:/} | 16 | This is code that is to be executed when the user enters two or more<br/>question marks at this prompt. | STRING |  | 
**Default**{::nomarkdown}<pre><code>  default</code></pre>{:/} | 17 | This is code that is to be executed to determine the appropriate default<br/>value for this prompt, setting Y=internal form of this value. | STRING |  | 
**Default Word-processing Text**{::nomarkdown}<pre><code>  default_wordprocessing_text</code></pre>{:/} | 18 | This is default text to be stuffed into this word-processing prompt. | STRING |  | 
**Entry Action**{::nomarkdown}<pre><code>  entry_action</code></pre>{:/} | 19 | This is code that will be executed at the beginning of the processing of<br/>this prompt, before the Default and Ask on Condition fields are executed;<br/>any special setup required for this field should be done here. | STRING |  | 
**Exit Action**{::nomarkdown}<pre><code>  exit_action</code></pre>{:/} | 20 | This is code that will be executed at the very end of the processing of<br/>this prompt, after prompting and the Validation field is executed;<br/>any special cleanup should be done here. | STRING |  | 
**Order Text Sequence**{::nomarkdown}<pre><code>  order_text_sequence</code></pre>{:/} | 21 | This field indicates the order in which values will be concatenated<br/>together to build the order text; this may differ from the prompting<br/>order defined in the .01 Sequence field. | NUMERIC | INDEXED | 
**Format**{::nomarkdown}<pre><code>  format</code></pre>{:/} | 22 | This is a string of characters that will define any exceptions to how<br/>the external form of this value is generated.  Possible values include:<br/>  Pointer         -> <field #>~<piece in RPC list of field #>, default =.01<br/>  Set of Codes    -> 1~<piece in RPC list of code> to use code for name<br/>  Date/Time       -> Format string to pass $$FMTE^XLFDT (default = 2)<br/>  <br/>  Suppress value  -> @<br/>  Replace value   -> @<ptr> where ptr is the Dialog IEN of the prompt<br/>                      whose value, when present, supersedes this value<br/>  Required value  -> *<ptr> where ptr is the Dialog IEN of the prompt<br/>                      whose value is required to be present to include<br/>                      this value<br/>  Ignore if same  -> =<ptr> where ptr is the Dialog IEN of the prompt<br/>                      whose value, if the external form is the same,<br/>                      supersedes this value | STRING |  | 
**Omit Text**{::nomarkdown}<pre><code>  omit_text</code></pre>{:/} | 23 | This is the external form of a value that is not to be included when building<br/>the order text.  E.g. to include the urgency in the order text unless it<br/>is routine, enter "ROUTINE" here. | STRING |  | 
**Leading Text**{::nomarkdown}<pre><code>  leading_text</code></pre>{:/} | 24 | This field contains text that will be appended to the order text<br/>immediately in front of this value, e.g. "Instructions:".  If this text<br/>is contained in a variable, enter @NAME where NAME is the variable name. | STRING |  | 
**Trailing Text**{::nomarkdown}<pre><code>  trailing_text</code></pre>{:/} | 25 | This field contains text that will be appended to the order text<br/>immediately following this value, e.g. "refills".  If this text is<br/>contained in a variable, enter @NAME where NAME is the variable name. | STRING |  | 
**Start New Line**{::nomarkdown}<pre><code>  start_new_line</code></pre>{:/} | 26 | This field determines if this value is concatenated onto the current line<br/>when building the order text, or if a new line is started with this value. | BOOLEAN |  | {::nomarkdown}false: <em><strong>0</strong></em><br/>true: <em><strong>1</strong></em>{:/}
**Word-wrap**{::nomarkdown}<pre><code>  wordwrap</code></pre>{:/} | 27 | This field determines if this text should be wrapped when added to the<br/>order text, or appended line by line as stored in the file; this is only<br/>used for word-processing type prompts. | ENUMERATION |  | {::nomarkdown}DON'T WRAP: <em><strong>1</strong></em><br/>WRAP: <em><strong>0</strong></em>{:/}
**Windows Control**{::nomarkdown}<pre><code>  windows_control</code></pre>{:/} | 101 | Stores the type of Windows control necessary to get the data for this<br/>prompt. | STRING |  | 
**Api Name**{::nomarkdown}<pre><code>  api_name</code></pre>{:/} | 102 | This is the API that should be called when the control is used.  How the API<br/>is used varys with the control.  Examples are: filling list boxes, getting<br/>boilerplate text, etc. | STRING |  | 
**Api Parameter #1**{::nomarkdown}<pre><code>  api_parameter_number1</code></pre>{:/} | 103 | A parameter that is used by the API call may be stored here. | STRING |  | 
**Windows Condition**{::nomarkdown}<pre><code>  windows_condition</code></pre>{:/} | 113 | This is silent code that is executed when building the dialog for windows.<br/>It identifies which prompts should be included in the dialog.  The condition<br/>should leave $T false if the prompt should not be asked. | STRING |  | 
**Windows Default**{::nomarkdown}<pre><code>  windows_default</code></pre>{:/} | 117 | This code should silently set the default value of a prompt when it is <br/>selected. | STRING |  | 

#### <a name="Responses-101_416"></a>Responses

<dl>
<dt>ID</dt><dd>Responses-101_416</dd>
<dt>File Type</dt><dd>101.416</dd>
<dt>Label</dt><dd>Responses</dd></dl>

#### Properties

Field | ID | Description | Datatype | Attributes | Range
--- | --- | --- | --- | --- | ---
**Item Entry**{::nomarkdown}<pre><code>  item_entry</code></pre>{:/} | .01 | This is the internal entry number of the prompt in the Item multiple<br/>by which this response was obtained. | NUMERIC | REQUIRED | 
**Dialog**{::nomarkdown}<pre><code>  dialog</code></pre>{:/} | .02 | This is a pointer to the dialog prompt, which is in the Order Dialog file<br/>as type prompt. | POINTER | INDEXED | [Order_Dialog-101_41](Order_Dialog-101_41)
**Instance**{::nomarkdown}<pre><code>  instance</code></pre>{:/} | .03 | In the case of multiple answers for the same item, this identifies the<br/>individual instance. | NUMERIC |  | 
**Value**{::nomarkdown}<pre><code>  value</code></pre>{:/} | 1 | This contains the actual response, unless the value is a word processing<br/>type. | STRING |  | 
**Text**{::nomarkdown}<pre><code>  text</code></pre>{:/} | 2 | This contains the actual response, for word-processing type prompts. | STRING |  | 

#### <a name="Controls-101_415"></a>Controls

<dl>
<dt>ID</dt><dd>Controls-101_415</dd>
<dt>File Type</dt><dd>101.415</dd>
<dt>Label</dt><dd>Controls</dd></dl>

#### Properties

Field | ID | Description | Datatype | Attributes | Range
--- | --- | --- | --- | --- | ---
**Logical Name**{::nomarkdown}<pre><code>  logical_name</code></pre>{:/} | .01 | This is the name by which controls can refer to each other. | STRING | INDEXED<br/>REQUIRED | 
**Item**{::nomarkdown}<pre><code>  item</code></pre>{:/} | 2 |  | POINTER |  | [Order_Dialog-101_41](Order_Dialog-101_41)
**Create Sequence**{::nomarkdown}<pre><code>  create_sequence</code></pre>{:/} | 3 |  | NUMERIC | INDEXED | 
**Control Type**{::nomarkdown}<pre><code>  control_type</code></pre>{:/} | 4 |  | ENUMERATION |  | {::nomarkdown}LongCombo: <em><strong>7</strong></em><br/>Edit: <em><strong>2</strong></em><br/>Button: <em><strong>1</strong></em><br/>Label: <em><strong>0</strong></em><br/>SimpleCombo: <em><strong>5</strong></em><br/>ListBox: <em><strong>4</strong></em><br/>Memo: <em><strong>3</strong></em><br/>DropDownList: <em><strong>6</strong></em>{:/}
**Label**{::nomarkdown}<pre><code>  label-5</code></pre>{:/} | 5 |  | STRING |  | 
**Beside**{::nomarkdown}<pre><code>  beside</code></pre>{:/} | 6 |  | STRING |  | 
**Below**{::nomarkdown}<pre><code>  below</code></pre>{:/} | 7 |  | STRING |  | 
**Width**{::nomarkdown}<pre><code>  width</code></pre>{:/} | 8 |  | NUMERIC |  | 
**Left Control**{::nomarkdown}<pre><code>  left_control</code></pre>{:/} | 9 |  | STRING |  | 
**Right Control**{::nomarkdown}<pre><code>  right_control</code></pre>{:/} | 10 |  | STRING |  | 
**Height**{::nomarkdown}<pre><code>  height</code></pre>{:/} | 11 |  | NUMERIC |  | 
**Upper Control**{::nomarkdown}<pre><code>  upper_control</code></pre>{:/} | 12 |  | STRING |  | 
**Lower Control**{::nomarkdown}<pre><code>  lower_control</code></pre>{:/} | 13 |  | STRING |  | 
**Tab Sequence**{::nomarkdown}<pre><code>  tab_sequence</code></pre>{:/} | 14 |  | NUMERIC |  | 



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:00 pm</p>{:/}