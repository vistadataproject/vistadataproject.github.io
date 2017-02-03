---
layout: default
title: VDM documentation
---

## [VDM](TableOfContent.md) &#8594; Option-19 

<dl>
<dt>id</dt><dd>Option-19</dd>
<dt>fmId</dt><dd>19</dd>
<dt>label</dt><dd>Option</dd>
<dt>location</dt><dd>^DIC(19,</dd>
<dt>description</dt><dd>Information in this file is used to drive the menu system.  Options are<br/>created, associated with others on menus, locked, set out-of-order,<br/>assigned prohibited times or devices, or given entry/exit actions.  The<br/>Edit Options of Menu Management should be used (instead of VA FileMan)<br/>so that the global root (DIC) and other such fields are given the correct<br/>values.  Options may be tailored by setting FileMan variables via this file. <br/>The Order Enter/Results Reporting package is accessed by using the appropriate<br/>option type.  It is cross-referenced by name, menu text, uppercase menu text,<br/>type, item, synonym, help frame, out-of-order message, lock, prohibited times,<br/>restricted devices, and priority. </dd>
</dl>

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
| name | .01 | Name | {::nomarkdown}The formal name of an option, prefaced with the package name.<br/> <br/>Each option must be preceded by its package prefix (a 2-4 character)<br/>code specified in the PACKAGE file, or the letter \Z\ or \A\.{:/} | STRING |  | REQUIRED, INDEXED |  | 
| x_action_present | .15 | X Action Present | {::nomarkdown} <br/>This field will be set to '1' if the option has an entry action.{:/} | BOOLEAN |  |  | {::nomarkdown}<dl><dt>1</dt><dd>true</dd></dl>{:/} | 
| rev_key_present | .16 | Rev Key Present | {::nomarkdown} <br/>This field will be set to '1' if this option has a reverse key assigned to it.{:/} | BOOLEAN |  |  | {::nomarkdown}<dl><dt>1</dt><dd>true</dd></dl>{:/} | 
| header_present | .26 | Header Present? | {::nomarkdown}This field is set to 1 by a trigger on field #26 when MUMPS code is<br/>entered into it.{:/} | BOOLEAN |  |  | {::nomarkdown}<dl><dt>1</dt><dd>true</dd></dl>{:/} | 
| menu_text | 1 | Menu Text | {::nomarkdown}The name as the option as it will be displayed to the user within<br/>the menu system.<br/>** The 'C' X-ref has been moved to the uppercase field. **{:/} | STRING |  | REQUIRED |  | 
| uppercase_menu_text | 1.1 | Uppercase Menu Text |  | STRING |  | INDEXED |  | 
| out_of_order_message | 2 | Out Of Order Message | {::nomarkdown}This field is used to temporarily disable an option. If it is<br/>filled in, the message here will be displayed whenever the user attempts<br/>to select the option.{:/} | STRING |  |  |  | 
| lock | 3 | Lock | {::nomarkdown}This field is used to deny access to users which have this option<br/>as part of their menu. If an option has a lock, then only users<br/>which hold the matching key can access it.{:/} | STRING |  |  |  | 
| reverse_negative_lock | 3.01 | Reverse/negative Lock | {::nomarkdown} <br/>This field may contain a pointer to the Key File.  If it does, the user may<br/>not access this option if he or she holds that key.{:/} | STRING |  |  |  | 
| description | 3.5 | Description | {::nomarkdown}This field contains a brief explanation of the particular option.<br/>It will be displayed in the menu system to the user when '???'<br/>are entered to the selection choice of the parent menu.{:/} | STRING |  |  |  | 
| creator | 3.6 | Creator | {::nomarkdown}This field defaults to the DUZ of the user who originally<br/>set up this option.{:/} | POINTER |  |  | [New_Person-200](New_Person-200.md) | 
| help_frame | 3.7 | Help Frame | {::nomarkdown}This field contains a pointer to the help text which describes<br/>this option.  The help text is displayed to the user on entering '?OPTION'.{:/} | POINTER |  | INDEXED | Help_Frame-9_2 | 
| priority | 3.8 | Priority | {::nomarkdown}If this field is null, the option will run at the current priority,<br/>otherwise, priorities range from 1-10, a low number indicating lower<br/>priority. The priority is in effect while the current option<br/>is being executed.{:/} | NUMERIC |  |  |  | 
| prohibited_times | 3.9 | Prohibited Times | {::nomarkdown}This specifies a time range during which this option cannot be accessed.<br/>The time should be entered in military format. For example, to<br/>prohibit an option from running between 9 AM and 2 PM, enter 0900-1400.{:/} | STRING |  |  |  | 
| times_days_prohibited | 3.91 | Times/days Prohibited | {::nomarkdown} <br/>This subfile may contain dasy and time during which this option may not be<br/>envoked.  This subfile replaces field 3.9, Prohibited Times, in the 0th node<br/>of the Option File.{:/} | [OBJECT] |  |  | [Times_days_Prohibited-19_391](#Times_days_Prohibited-19_391)  | 
| queuing_required | 3.92 | Queuing Required | {::nomarkdown}By entering days and times in the subfile the option's output<br/>can be restricted to days and times not included in this file.<br/>The Menu System passes a flag to the Device Handler causing it<br/>to force queuing during the days and times included in this<br/>file.{:/} | [OBJECT] |  |  | [Queuing_Required-19_392](#Queuing_Required-19_392)  | 
| output_restricted | 3.93 | Output Restricted? | {::nomarkdown} <br/>This field will contain a '1' if output from this option is restricted to<br/>certain days and times.{:/} | BOOLEAN |  |  | {::nomarkdown}<dl><dt>1</dt><dd>true</dd></dl>{:/} | 
| restrict_devices | 3.95 | Restrict Devices? | {::nomarkdown}This indicates whether the option is allowed to run on selected devices<br/>only.  If this field contains a 'y', the option will be enabled only<br/>for the devices entered in the field 'PERMITTED DEVICE.'{:/} | BOOLEAN |  |  | {::nomarkdown}<dl><dt>n</dt><dd>false</dd><dt>y</dt><dd>true</dd></dl>{:/} | 
| permitted_device | 3.96 | Permitted Device | {::nomarkdown} <br/>This subfile may contain a list of devices upon which this option is permitted<br/>to run.{:/} | [POINTER] |  |  | {id:Device-3_5} | 
| type-4 | 4 | Type | {::nomarkdown}    This field indicates the 'category' or type of option. A print-type<br/>option, for instance, will call FileMan to print something. Menu-type<br/>options point to other options in the tree-structured menu system. The<br/>other fields in the options file are filled in depending on the type.<br/>There are several fields that will tell a print-type option what to print<br/>and how to print it, for example.  These same fields may be meaningless to<br/>another options type.{:/} | ENUMERATION |  | REQUIRED | {::nomarkdown}<dl><dt>L</dt><dd>limited</dd><dt>O</dt><dd>protocol</dd><dt>E</dt><dd>edit</dd><dt>M</dt><dd>menu</dd><dt>Z</dt><dd>Window Suite</dd><dt>P</dt><dd>print</dd><dt>Q</dt><dd>protocol menu</dd><dt>S</dt><dd>server</dd><dt>I</dt><dd>inquire</dd><dt>W</dt><dd>Window</dd><dt>R</dt><dd>run routine</dd><dt>C</dt><dd>ScreenMan</dd><dt>A</dt><dd>action</dd><dt>X</dt><dd>extended action</dd><dt>B</dt><dd>Broker (Client/Server)</dd></dl>{:/} | 
| menu | 10 | Menu | {::nomarkdown}This field points to the descendent options of this menu.{:/} | [OBJECT] |  |  | [Menu-19_01](#Menu-19_01)  | 
| short_menu_text | 10.1 | Short Menu Text | {::nomarkdown} <br/>This field contains a short version of the Menu Text field (field # 1) for<br/>use with multi-column displays.  It is a mandatory field.{:/} | STRING |  |  |  | 
| display_option | 11 | Display Option? | {::nomarkdown}This field controls the action of the Menu system if the user has<br/>automenu turned on.  If this field is set then the menu system will stop<br/>and<br/>ask<br/>'Press<br/>return to continue'. before showing the menu again.{:/} | BOOLEAN |  |  | {::nomarkdown}<dl><dt>n</dt><dd>false</dd><dt>y</dt><dd>true</dd></dl>{:/} | 
| package | 12 | Package | {::nomarkdown}This field indicates the package with which this option is associated.{:/} | POINTER |  |  | Package-9_4 | 
| delegable | 13 | Delegable | {::nomarkdown}If this field is marked 'no' in the option file then the XQSMD<br/>software will not delegate this option to a user.{:/} | BOOLEAN |  |  | {::nomarkdown}<dl><dt>y</dt><dd>false</dd><dt>n</dt><dd>true</dd></dl>{:/} | 
| e_action_present | 14 | E Action Present | {::nomarkdown} <br/>This field will contain a '1' if the option has an entry action in field #20.{:/} | BOOLEAN |  |  | {::nomarkdown}<dl><dt>1</dt><dd>true</dd></dl>{:/} | 
| exit_action | 15 | Exit Action | {::nomarkdown}This field contains mumps code which will be executed on<br/>leaving this option.  It is applicable to all option types.{:/} | STRING |  |  |  | 
| entry_action | 20 | Entry Action | {::nomarkdown}MUMPS code that is executed upon entry to this option for all option <br/>types.  When an option is first envoked this code is executed,<br/>but if you drop back into the option from a higher-level option <br/>(with a simple [RETURN]), for instance, it is NOT executed.  See Header<br/>field (field # 26).{:/} | STRING |  |  |  | 
| xquit_message | 21 | Xquit Message |  | STRING |  |  |  | 
| xquit_executable | 22 | Xquit Executable | {::nomarkdown}     This field contains code which is executed by the menu system when an<br/>XQUIT variable is detected after the execution of this option's ENTRY<br/>ACTION.  If the execution of this field produces the variable XQNOBACK the<br/>Menu System will not attempt to return the user to their previous option,<br/>but leave the user at the present stack location.  In the case of jumps,<br/>the user may be returned to an option that is quite far away if XQNOBACK<br/>is not defined.  Obviously, the problem that resulted in an XQUIT should<br/>first be solved before XQNOBACK is set.<br/>     If there is no code in this field the default is to return the user<br/>to their previous option.{:/} | STRING |  |  |  | 
| routine | 25 | Routine | {::nomarkdown}Indicate the name of the routine, e.g. ROUTINE, or TAG^ROUTINE.{:/} | STRING |  |  |  | 
| header | 26 | Header | {::nomarkdown}This field of MUMPS code is executed each time the option is envoked,<br/>whether the user is moving down through the tree of options, or backing<br/>up through the options already envoked; unlike the entry action which<br/>is only executed when envoking an option from above, and not when<br/>backing up into it.{:/} | STRING |  |  |  | 
| dic_dic | 30 | Dic {dic} | {::nomarkdown}Used in conjunction with EDIT and INQUIRE type options to lookup an entry.<br/>for use.<br/>The global reference of the file to be used in lookup (without the '^').<br/>For example: DPT({:/} | STRING |  |  |  | 
| dic0 | 31 | Dic(0) | {::nomarkdown}Used in conjunction with the EDIT and INQUIRE type options for finding<br/>an entry.  <br/>Enter the parameters used in file-lookups.<br/> A = Ask and reask entry<br/> C = Cross reference suppression is turned off<br/> E = Echo back the entry<br/> F = Forget storing the lookup value (for space bar recall)<br/> I = Ignore any special lookup program<br/> L = Learning (LAYGO - adding a new entry) allowed<br/> M = Look up entry using all available indexes<br/> N = Allow internal entry number as input<br/> O = Look up an entry in the old way<br/> Q = Question input if match not found<br/> X = Exact match of input required<br/> Z = Zero entry node returned in variable Y(0) and<br/>     the external value of the .01 field in Y(0,0){:/} | STRING |  |  |  | 
| dica | 32 | Dic(a) | {::nomarkdown}Used in conjunction with the EDIT and INQUIRE type option for finding <br/>an entry.<br/>Enter the prompt to be displayed instead of the usual 'Select FILENAME NAME'<br/>format.<br/> Example:     DIC(A)=\Please enter patient name: \<br/>              Would display to user -  Please enter patient name:<br/>              Rather than the usual -  Select PATIENT NAME:{:/} | STRING |  |  |  | 
| dicb | 33 | Dic(b) | {::nomarkdown}Used in conjunction with the EDIT and INQUIRE type options for finding <br/>an entry.<br/>Enter the default value you want displayed to user when selecting the<br/>entry to use.<br/> Example:   DIC(B)=\JONES,JOHN\<br/> Would produce the display - Select PATIENT NAME: JONES,JOHN//<br/> Rather than the usual display - Select PATIENT NAME:{:/} | STRING |  |  |  | 
| dics | 34 | Dic(s) | {::nomarkdown}Used in conjunction with INQUIRE and EDIT type options for screening<br/>entry selection.  Enter executable MUMPS code that will screen out entries<br/>that should NOT be selected.  An entry is only selectable when the <br/>executable code produces a truth value of 1.  For example:<br/> <br/>   DIC(S)=I $P(^(0),U,2)=\M\<br/>allows only males to be selected if the second piece of the entry's zero<br/>node contained an 'M' for Male or 'F' for Female.{:/} | STRING |  |  |  | 
| dicw | 35 | Dic(w) | {::nomarkdown}Used in conjunction with the EDIT and INQUIRE type options for matching<br/>user input.  Enter MUMPS code that will be executed each time a match <br/>(matches) is found for user input.<br/> <br/>Example:  DIC(W)=W:$D(^(.1)) \Patient is currently on ward \,^(.1)<br/>       produces the display - JONES,JOHN  Patient is currently on ward 2SE<br/> <br/>NOTE:  This will override identifier displays.{:/} | STRING |  |  |  | 
| d | 36 | D. | {::nomarkdown}Used in conjunction with the INQUIRE and EDIT type options for<br/>selecting an entry.  Enter the subscript of the cross reference<br/>to be used for entry look-up.<br/> example:  D.=C<br/>Would only check for user input against the \C\ cross-reference.<br/>If DIC(0) contains an \M\ meaning multi-index look-up, then this<br/>value will be used as a starting point for the multi-index look-up.<br/>To restrict the look-up only to a single index then DIC(0) must<br/>NOT contain an \M\.{:/} | STRING |  |  |  | 
| drdds | 40 | Dr{dds} | {::nomarkdown}This field contains the name of the form from the Form File<br/>enclosed in square brackets, e.g., \[MYFORM]\.{:/} | STRING |  |  |  | 
| ddsfile | 41 | Ddsfile | {::nomarkdown}This is the root of the file being edited or displayed<br/>entered without the up-arrow, e.g., \DIC(19,\.{:/} | STRING |  |  |  | 
| ddsfile1 | 42 | Ddsfile(1) | {::nomarkdown}This is the global root of the subfile being edited or displayed.{:/} | STRING |  |  |  | 
| ddspage | 43 | Ddspage | {::nomarkdown}This optional variable contains the page number of the first page to<br/>display to the user when the ScreenMan form is invoked.  If this variable<br/>is not defined, then by default the first page the user sees is Page 1.{:/} | NUMERIC |  |  |  | 
| ddsparm | 44 | Ddsparm | {::nomarkdown}This optional variable contains a string of alphabetic characters that<br/>controls ScreenMan's behavior.  The acceptable characters are:<br/> <br/> C   Return the variable DDSCHANG=1 if ScreenMan detects that the user<br/>     saved a Change to the database.<br/> <br/> E   Return Error messages in ^TMP(\DIERR\,$J) and return DIERR if<br/>     ScreenMan encounters problems when initially trying to load the form.<br/>     If DDSPARM does not contain an \E\, ScreenMan prints messages<br/>     directly on the screen, and returns the variable DIMSG equal to null.<br/> <br/> S   Return the variable DDSSAVE=1 if the user pressed <PF1>S or <PF1>E,<br/>     or entered an \Exit\ or \Save\ command from the Command Line, whether<br/>     or not any changes were actually made on the form.{:/} | STRING |  |  |  | 
| die | 50 | Die | {::nomarkdown}Used in the EDIT type option. The global reference of the file to be used<br/>in the edit.<br/> example:  DPT({:/} | STRING |  |  |  | 
| dr_die | 51 | Dr {die} | {::nomarkdown}Used in the EDIT type option.  Enter the string of field numbers (delimited<br/>by semi-colons) to be edited or a bracketed input template name.<br/> example:<br/>         .01;.03;3;.351<br/>         or<br/>         [INPUT TEMPLATE NAME]{:/} | STRING |  |  |  | 
| dr | 52 | *dr() |  | STRING |  |  |  | 
| no_uparrow | 53 | No Up-arrow | {::nomarkdown}Used in the EDIT type option.<br/>If an 'N' is entered, no up-arrowing (^) is allowed while editing either<br/>for exiting the edit entirely or branching to other fields.<br/>If an 'OUTOK' is entered, you may up-arrow (^) entirely out of the edit<br/>but not be allowed to jump to other fields.<br/>If an 'BACK' is entered, you may jump to a previously edited field<br/>but not entirely out.<br/>If an 'BACKOUTOK' is entered, you may jump back to previously edited<br/>fields and up-arrow (^) to exit.<br/>If no entry is in this field, you may jump to other fields or<br/>up-arrow (^) out of the entire edit process.{:/} | ENUMERATION |  |  | {::nomarkdown}<dl><dt>BACK</dt><dd>BACK JUMPING OK, NO EXIT</dd><dt>N</dt><dd>NO UP-ARROWING ALLOWED</dd><dt>OUTOK</dt><dd>UP-ARROW OUT OK, NO BRANCHING</dd><dt>BACKOUTOK</dt><dd>EXIT AND BACK JUMPING OK</dd></dl>{:/} | 
| diew | 54 | *die(w) | {::nomarkdown}Enter a WRITE statement in this field and the WRITE statement will be used<br/>instead of VA FileMan's regular prompt for the field being edited.{:/} | STRING |  |  |  | 
| dic_dip | 60 | Dic {dip} | {::nomarkdown}The global reference of the file to be used in PRINT type option.<br/> example: DPT({:/} | STRING |  |  |  | 
| pg | 61 | Pg | {::nomarkdown}Used in the PRINT type option.  The page number that should appear on first<br/>page of report. (This number ONLY effects page numbering, NOT at which entry<br/>the report should begin printing).  If this field is left blank, <br/>then page 1 is assumed.{:/} | NUMERIC |  |  |  | 
| l | 62 | L. | {::nomarkdown}Used in the PRINT type option.  This entry should always contain a 0.<br/>If a 1 is entered for this field, all predetermined ranges of sorts<br/>(fields TO and FR), print fields (field FLDS) and header (DHD) are overriden<br/>and the user will be asked for sort ranges, print fields and header.{:/} | STRING |  |  |  | 
| flds | 63 | Flds | {::nomarkdown}Used in the PRINT type option.  Enter the fields to be printed (delimited<br/>by commas) or the bracketed print template name.<br/>Fileman formatting criteria can also be entered.<br/> example:<br/>        .01;\PATIENT NAME\;C1,.02,.1<br/>         or<br/>         [PRINT TEMPLATE NAME]{:/} | STRING |  |  |  | 
| by | 64 | By | {::nomarkdown}Used in the PRINT type option. Enter the fields to be sorted by (delimited <br/>by commas) or a bracketed sort template name.<br/> Example:<br/>        '.1,.01<br/>        or<br/>        [SORT TEMPLATE NAME]{:/} | STRING |  |  |  | 
| fr | 65 | Fr | {::nomarkdown}Used in the PRINT type option. Enter the 'start with' values (delimited by <br/>commas) used in sorting.<br/> Example:<br/>          2NE,SMITH<br/>  (if sort fields were ward & name, start with ward 2NE and patient SMITH){:/} | STRING |  |  |  | 
| to | 66 | To | {::nomarkdown}Used in the PRINT type option. The 'go to' values (delimited by commas) used<br/>in sorting.<br/> example:<br/>          2NE,SMITH<br/>  (If sort fields were ward & name, end sort after ward  2NE and patient<br/>SMITH){:/} | STRING |  |  |  | 
| dhd | 67 | Dhd | {::nomarkdown}Used in the PRINT type option.  Enter the free text heading you want<br/>printed as the header of your output.  <br/>(Do not include quotes in your header){:/} | STRING |  |  |  | 
| dcopies | 68 | Dcopies | {::nomarkdown}Used in the PRINT type option. The number of copies desired.<br/>SDP space must be available on your system for this option.{:/} | NUMERIC |  |  |  | 
| dis0 | 69 | Dis(0) | {::nomarkdown}Used in the PRINT type option. This is executable M code which sets $T<br/>to select desired entries for the sort process. If the code produces a<br/>truth value of 1, the entry will be printed. (A truth value of 0 will not<br/>allow the entry to be printed.) At the time the code is executed, the<br/>internal entry number (IEN) of the entry is stored in the variable D0.<br/> <br/>For example, the following would print patients who were NOT born in the<br/>1970's:<br/> <br/>DIS(0)=I $P(^DPT(D0,0),U,3)<2700101!($P(^(0),U,3)>2791231)<br/><br/>If used in conjunction with fields DIS(1), DIS(2), and DIS(3), the entry<br/>will print if DIS(0) and DIS(1) are true, OR if DIS(0) and DIS(2) are true,<br/>OR if DIS(0) and DIS(3) are true.<br/><br/>Note: You may have DIS(0) only, or DIS(0) in combination with DIS(1) only,<br/>or DIS(1) and DIS(2), or DIS(1), DIS(2), and DIS(3).<br/>{:/} | STRING |  |  |  | 
| dis1 | 69.1 | Dis(1) | {::nomarkdown}This field may be used in PRINT options along with DIS(0) and the other DIS(n)<br/>fields. Each DIS field is examined in order (beginning with 0) for M code that<br/>will produce a $T value to determine whether or not the data pointed to by D0<br/>should be printed. See the description of D(0) (field #69) for more information.<br/>{:/} | STRING |  |  |  | 
| dis2 | 69.2 | Dis(2) | {::nomarkdown}This field may be used in PRINT options along with DIS(0) and the other DIS(n)<br/>fields. Each DIS field is examined in order (beginning with 0) for M code that<br/>will produce a $T value to determine whether or not the data pointed to by D0<br/>should be printed. See the description of D(0) (field #69) for more information.<br/>{:/} | STRING |  |  |  | 
| dis3 | 69.3 | Dis(3) | {::nomarkdown}This field may be used in PRINT options along with DIS(0) and the other DIS(n)<br/>fields. Each DIS field is examined in order (beginning with 0) for M code that<br/>will produce a $T value to determine whether or not the data pointed to by D0<br/>should be printed. See the description of D(0) (field #69) for more information.<br/>{:/} | STRING |  |  |  | 
| iop | 70 | Iop | {::nomarkdown}The default output device.  Enter a valid Device Name or \HOME\<br/>to mean output will always go to the home device.{:/} | STRING |  |  |  | 
| dhit | 71 | Dhit | {::nomarkdown}Used in the PRINT type option.  Enter a string of MUMPS code that<br/>will be executed for every entry after all the fields specified<br/>in FLDS have been printed.{:/} | STRING |  |  |  | 
| diobeg | 72 | Diobeg | {::nomarkdown}Used in the PRINT type option.  Enter a string of MUMPS code that<br/>will be executed before the printout starts.{:/} | STRING |  |  |  | 
| dioend | 73 | Dioend | {::nomarkdown}Used in the PRINT type option.  Enter a string of MUMPS code that<br/>will be executed after the printout has finished but before<br/>returning to the calling program.{:/} | STRING |  |  |  | 
| by0 | 76 | By(0) | {::nomarkdown}This variable can be set when you want to sort using a specified<br/>cross-reference (even MUMPS), or a list of record numbers in any global,<br/>or a list of results on a search template.  The only criteria<br/>is that the last subscript to sort through is an internal entry number<br/>(record number) for the file being printed.  This variable should contain<br/>the static part of a cross-reference or an open global reference, without<br/>the leading up-arrow.  Or, if printing from a list of search results, the<br/>variable should contain the name of a search template surrounded by square<br/>brackets.  Ex.:<br/>  BY(0) = TMP(\ZZTEST\,$J,<br/>  BY(0) = DIZ(662001,\AC\,<br/>  BY(0) = [ZZSEARCH]{:/} | STRING |  |  |  | 
| l0 | 76.1 | L(0) | {::nomarkdown}This variable should ONLY be set if BY(0) is set, and is REQUIRED if BY(0)<br/>is set.  It should be equal to the total number of variable subscripts<br/>that FileMan needs to sort through in order to reach the record number,<br/>PLUS 1 for the record number itself.  For example, if BY(0) defines a<br/>regular cross-reference, L(0)=2 (1 for the cross-referenced field value,<br/>and 1 for the record number, D0).  If sorting through a list of record<br/>numbers in ^TMP($J,D0), L(0)=1 (1 for the record number, D0).{:/} | NUMERIC |  |  |  | 
| fr0n | 76.2 | Fr(0,n) | {::nomarkdown}Sort FROM criteria associated with the subscripts defined by the BY(0)<br/>input variable.{:/} | [OBJECT] |  |  | [Fr0n-19_02](#Fr0n-19_02)  | 
| to0n | 76.3 | To(0,n) | {::nomarkdown}Sort TO criteria associated with the subscripts defined by the BY(0) input<br/>variable.{:/} | [OBJECT] |  |  | [To0n-19_03](#To0n-19_03)  | 
| dispar0n | 76.4 | Dispar(0,n) |  | [OBJECT] |  |  | [Dispar0n-19_04](#Dispar0n-19_04)  | 
| disupno | 77 | Disupno | {::nomarkdown}If there are no matches found in a SEARCH, or if there are no records<br/>to print in a PRINT, VA FileMan still prints a header and a message<br/>informing the user that there were 0 matches, or no records to print.<br/>If this input variable is set to 1, that print of the header will be<br/>suppressed and nothing will print.{:/} | ENUMERATION |  |  | {::nomarkdown}<dl><dt>1</dt><dd>SUPPRESS HEADER IF NO RECORDS</dd></dl>{:/} | 
| dipcrit | 78 | Dipcrit | {::nomarkdown}When set to 1, causes SEARCH or SORT criteria to print in the heading of<br/>the first page of a report, along with the standard header.  If called<br/>from SEARCH option, both SEARCH and SORT criteria print.{:/} | ENUMERATION |  |  | {::nomarkdown}<dl><dt>1</dt><dd>PRINT SEARCH/SORT CRITERIA</dd></dl>{:/} | 
| diaskhd | 79 | Diaskhd | {::nomarkdown} <br/>If this field is set to '1' then the variable DIASKHDR will be defined when<br/>FileMan is called to print.  The user will then be prompted for a header for<br/>the report.{:/} | ENUMERATION |  |  | {::nomarkdown}<dl><dt>0</dt><dd>Do not ask user for a header</dd><dt>1</dt><dd>Ask user for a header</dd></dl>{:/} | 
| distemp | 79.5 | Distemp | {::nomarkdown}This field MUST be defined in order to call the FileMan routine to RE-DO a<br/>search using the search criteria from an existing SEARCH TEMPLATE (routine<br/>ENS^DIS).  The field must contain the name of a SEARCH TEMPLATE.  This<br/>template name can be enclosed in square brackets but the brackets are not<br/>required.  Note that if there are already search results on the template,<br/>they will be replaced by a new list of search results when this option is<br/>run.{:/} | STRING |  |  |  | 
| dic_diq | 80 | Dic {diq} | {::nomarkdown}Used in the INQUIRY type option.  The global reference of the file to be<br/>used in the inquiry.<br/> example: DPT({:/} | STRING |  |  |  | 
| dr_diq | 81 | Dr {diq} | {::nomarkdown}Used in the INQUIRY type option.  Enter the GLOBAL SUBSCRIPTS that you<br/>want displayed on the inquiry.  Any fields residing in these global nodes<br/>will be displayed in standard captioned output format.<br/>Multiple subscripts can be delimited by a semi-colon or a range of subscripts<br/>may be used delimiting the starting subscript and ending subscript with a<br/>colon.<br/> NOTE: Field security is not matched against user access for this option.<br/>Data will be displayed regardless of user READ access to those fields.<br/> example:  DR {DIQ}=0;.1<br/> Would display any fields whose global location was in either<br/>global node 0 or global node .1{:/} | STRING |  |  |  | 
| diq0 | 82 | Diq(0) | {::nomarkdown}If this field is set to \C\, computed fields will be displayed.{:/} | STRING |  |  |  | 
| supress_device_prompt | 83 | Supress Device Prompt |  | BOOLEAN |  |  | {::nomarkdown}<dl><dt>N</dt><dd>false</dd><dt>Y</dt><dd>true</dd></dl>{:/} | 
| timestamp | 99 | Timestamp | {::nomarkdown} <br/>This field contains the timestamp for when the option was created.{:/} | STRING |  |  |  | 
| timestamp_of_primary_menu | 99.1 | Timestamp Of Primary Menu | {::nomarkdown} <br/>This field contains the timestamp of when this primary menu tree was rebuilt.{:/} | STRING |  |  |  | 
| order_print_action | 100 | *order Print Action |  | STRING |  |  |  | 
| order_cancel_action | 100.1 | *order Cancel Action |  | STRING |  |  |  | 
| order_purge_action | 100.2 | *order Purge Action |  | STRING |  |  |  | 
| independently_invocable | 110 | Independently Invocable | {::nomarkdown}This field is only to document those options that the site can't<br/>randomly add to other options.<br/> <br/>If this field is NO then this option requires that some option or<br/>action has been done before it can be called.<br/>If this field is YES then this option can be invoked at any time.<br/>It is up to the developer to set this field.<br/> <br/>The MENU system doesn't look at this at any time.{:/} | BOOLEAN |  |  | {::nomarkdown}<dl><dt>y</dt><dd>false</dd><dt>n</dt><dd>true</dd></dl>{:/} | 
| queued_to_run_at_what_time | 200 | *queued To Run At What Time | {::nomarkdown}This field is OBSOLETE,  Please use the new Option scheduling File.{:/} | DATE-TIME |  |  |  | 
| device_for_queued_job_output | 201 | *device For Queued Job Output | {::nomarkdown}This field is OBSOLETE,  Please use the new Option scheduling File.{:/} | STRING |  |  |  | 
| rescheduling_frequency | 202 | *rescheduling Frequency | {::nomarkdown}This field is OBSOLETE,  Please use the new Option scheduling File.{:/} | STRING |  |  |  | 
| queued_to_run_on_volume_set | 203 | *queued To Run On Volume Set | {::nomarkdown}This field is OBSOLETE,  Please use the new Option scheduling File.{:/} | STRING |  |  |  | 
| scheduling_recommended | 209 | Scheduling Recommended | {::nomarkdown}This field should be filled in by developers to allow reports of<br/>options that a site should consider seting up for background scheduling.{:/} | ENUMERATION |  |  | {::nomarkdown}<dl><dt>y</dt><dd>YES</dd><dt>s</dt><dd>STARTUP</dd><dt>n</dt><dd>NO</dd></dl>{:/} | 
| keep_from_deleting | 209.2 | Keep From Deleting | {::nomarkdown}This field is to keep the DELETE UNREFERENCED OPTIONS routine from<br/>selecting this option for deletion even if it isn't referenced in the<br/>normal ways.  Like \Parent of Queuable Options\ (ZTMQUEUABLE OPTIONS) or<br/>XUCOMMAD. Normal options don't need to set this field.{:/} | BOOLEAN |  |  | {::nomarkdown}<dl><dt>y</dt><dd>true</dd></dl>{:/} | 
| server_bulletin | 220 | Server Bulletin | {::nomarkdown} <br/>This field may contain a pointer to the bulletin which will override the<br/>default bulletin XQSERVER for a server-type option.  This bulletin will be<br/>usedto notify the users in the event of a security breach, etc.{:/} | POINTER |  |  | Bulletin-3_6 | 
| server_action | 221 | Server Action | {::nomarkdown}A set of codes which tell the menu system what to do when a request<br/>for this server option is received from the mail system.{:/} | ENUMERATION |  |  | {::nomarkdown}<dl><dt>N</dt><dd>NOTIFY MAIL GROUP (DO NOT RUN)</dd><dt>R</dt><dd>RUN IMMEDIATELY</dd><dt>Q</dt><dd>QUEUE SERVER ROUTINE</dd><dt>I</dt><dd>IGNORE REQUESTS</dd></dl>{:/} | 
| server_mail_group | 222 | Server Mail Group | {::nomarkdown} <br/>This field amy contain a pointer to the Mail Group file.  This mail group will<br/>be notified in the even of a security breach etc. when a server-type option is<br/>envoked.{:/} | POINTER |  |  | Mail_Group-3_8 | 
| server_audit | 223 | Server Audit | {::nomarkdown}This set of codes will determine whethere or not auditing will take place.<br/>If auditing is turned on with a 'Y' (YES) response the menu system will<br/>record: 1. The server option requested, 2. Date/time of the request, 3.<br/>User (Postmaster), 4. Device (none), 5. Job #, 6. Date/time of exit from<br/>the option, 7. CPU, 8. Request result (error message, \task completed<br/>normally\, etc.{:/} | BOOLEAN |  |  | {::nomarkdown}<dl><dt>N</dt><dd>false</dd><dt>Y</dt><dd>true</dd></dl>{:/} | 
| supress_bulletin | 224 | Supress Bulletin | {::nomarkdown}If this field contains a 'Y' no bulletin will be fired when a server<br/>request is recieved.  The default is to send a bulletin.  If there is<br/>no bulletin in field #220 (SERVER BULLETIN) then the default bulletin<br/>XQSERVER is fired off.{:/} | ENUMERATION |  |  | {::nomarkdown}<dl><dt>N</dt><dd>NO (DEFAULT) SEND A BULLETIN</dd><dt>Y</dt><dd>YES, SUPRESS IT</dd></dl>{:/} | 
| server_reply | 225 | Server Reply | {::nomarkdown}This field controls the transmission of replies to server requests via<br/>network mail.  If the field contains 'R' a reply will be transmitted to<br/>the sender of the server request.  If the field contains an 'E' a network<br/>reply will be transmitted only in the event that an error was trapped<br/>during the attemp to run a server option, Entry or Exit Actions, or the<br/>routine associated with a server option.{:/} | ENUMERATION |  |  | {::nomarkdown}<dl><dt>N</dt><dd>NO REPLY (DEFAULT)</dd><dt>R</dt><dd>SEND REPLY IN ALL CASES</dd><dt>E</dt><dd>REPLY ON ERROR ONLY</dd></dl>{:/} | 
| save_request | 226 | Save Request | {::nomarkdown}If there is a 1 in this field or if this field is null, then the server<br/>request message is saved in a mailbox for the Postmaster that is named<br/>\S.\option_name.{:/} | ENUMERATION |  |  | {::nomarkdown}<dl><dt>1</dt><dd>Save request in Postmaster basket</dd><dt>0</dt><dd>Do not save request</dd></dl>{:/} | 
| server_device | 227 | Server Device |  | POINTER |  |  | Device-3_5 | 
| ztsk_retention_days | 228 | Ztsk Retention Days | {::nomarkdown}This is a number between 1 and 365 to incicate the number of days that a <br/>server task should be retained by Task Manager in ^ZTSK.  The default<br/>is 14 days if nothing is entered in this field.  For long-term retention<br/>see field 226 which allows you to save the server message in a Postmaster<br/>mailbox.{:/} | NUMERIC |  |  |  | 
| icon | 300 | Icon |  | STRING |  |  |  | 
| title | 301 | Title |  | STRING |  |  |  | 
| rpc | 320 | Rpc |  | [OBJECT] |  |  | [Rpc-19_05](#Rpc-19_05)  | 
| primary_menu | 1613 | Primary Menu | {::nomarkdown}This field will have a value only if the Option is a 'high-level' menu<br/>Option, which could be assigned to a typical user.  For example, the<br/>value of this field might be \PHARMACIST\, or \ADMISSIONS CLERK\{:/} | STRING |  |  |  | 
| protected_variables | 1840 | Protected Variables | {::nomarkdown}This field holds a list of variables that need to be protected<br/>when another package call KILL^XUSCLEAN.  These should all be<br/>documented package wide variables.<br/>The format is that of a list of variable names separated by commas.<br/>i.e. DUZ,DTIME,DT{:/} | STRING |  |  |  | 
| special_queueing | 1916 | *special Queueing | {::nomarkdown}This field is OBSOLETE,  Please use the new Option scheduling File.{:/} | ENUMERATION |  |  | {::nomarkdown}<dl></dl>{:/} | 

## <a name="Times_days_Prohibited-19_391"></a>Times_days_Prohibited-19_391 

<dl>
<dt>id</dt><dd>Times_days_Prohibited-19_391</dd>
<dt>fmId</dt><dd>19.391</dd>
<dt>label</dt><dd>Times/days Prohibited</dd>
</dl>

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
| times_prohibited | .01 | Times Prohibited | {::nomarkdown}This field may be used to set prohibited times for specific days of the<br/>week.  The PROHIBITED TIME RANGE may be specified alone to apply to all<br/>days as 0800-1630 to prohibit use between 8:00 am and 4:30 pm.<br/> <br/>The time range specified may be prohibited on one or more specific days<br/>of the week by entry of the desired prohibited days in the next field of<br/>this subfield.{:/} | STRING |  | REQUIRED, INDEXED |  | 
| days_prohibited | .02 | Days Prohibited | {::nomarkdown}This field may be used to prohibit use of the option on particular<br/>days of the week.{:/} | STRING |  |  |  | 

## <a name="Queuing_Required-19_392"></a>Queuing_Required-19_392 

<dl>
<dt>id</dt><dd>Queuing_Required-19_392</dd>
<dt>fmId</dt><dd>19.392</dd>
<dt>label</dt><dd>Queuing Required</dd>
</dl>

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
| time_period | .01 | Time Period | {::nomarkdown}This field is used to specify a time period for the days of the week<br/>specified in field .02 during which the option may be run, but output must<br/>be queued to a time outside the dates and times specified.{:/} | STRING |  | REQUIRED, INDEXED |  | 
| days_for_time_period | .02 | Day(s) For Time Period | {::nomarkdown}This field is used to specify one or more specific days of the week<br/>when the option must be queued to a time outside those specified in the<br/>.01 field.{:/} | STRING |  |  |  | 

## <a name="Menu-19_01"></a>Menu-19_01 

<dl>
<dt>id</dt><dd>Menu-19_01</dd>
<dt>fmId</dt><dd>19.01</dd>
<dt>label</dt><dd>Menu</dd>
</dl>

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
| item | .01 | Item | {::nomarkdown}The name of an Option which will appear on this menu.{:/} | POINTER |  | REQUIRED | Option-19 | 
| synonym | 2 | Synonym | {::nomarkdown}An abbreviation which will appear to the left of the menu text<br/>on the display of a menu.  Options are selectable by synonyms<br/>as well as menu text.{:/} | STRING |  |  |  | 
| display_order | 3 | Display Order | {::nomarkdown}The field determines the order in which the items of a menu appear<br/>when displayed. If this field is entered, it takes precedence over<br/>the order determined by the synonyms.{:/} | NUMERIC |  |  |  | 

## <a name="Fr0n-19_02"></a>Fr0n-19_02 

<dl>
<dt>id</dt><dd>Fr0n-19_02</dd>
<dt>fmId</dt><dd>19.02</dd>
<dt>label</dt><dd>Fr(0,n)</dd>
</dl>

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
| subscript_level_number | .01 | Subscript Level Number | {::nomarkdown}Number equal to one of the \N\ subscripts that FileMan must sort through<br/>on the global or cross-reference defined by the BY(0) input variable to<br/>the FileMan print routine, EN1^DIP. Used to set an entry into the FR(0,N)<br/>input array (sort FROM value for the Nth subscript).{:/} | NUMERIC |  | REQUIRED, INDEXED |  | 
| from_value | 1 | From Value | {::nomarkdown}This optional field can be filled out for any of the \N\ subscripts that<br/>FileMan must sort through on the global defined in BY(0).  This field only<br/>has meaning when something has been defined in BY(0), and it indicates the<br/>\START WITH\ value for subscript \N\.  For example, when FileMan builds<br/>the code for sorting through a cross-reference defined in BY(0), if an<br/>entry exists in the first multiple for this field, the value of this field<br/>will be used as the starting point for sorting on the first variable<br/>subscript in the cross-reference.{:/} | STRING |  |  |  | 

## <a name="To0n-19_03"></a>To0n-19_03 

<dl>
<dt>id</dt><dd>To0n-19_03</dd>
<dt>fmId</dt><dd>19.03</dd>
<dt>label</dt><dd>To(0,n)</dd>
</dl>

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
| subscript_level_number | .01 | Subscript Level Number | {::nomarkdown}Number equal to one of the \N\ subscripts that FileMan must sort through <br/>on the global or cross-reference defined by the BY(0) input variable to<br/>the FileMan print routine, EN1^DIP. Used to set an entry into the TO(0,N)<br/>input array (sort TO value for the Nth subscript). {:/} | NUMERIC |  | REQUIRED, INDEXED |  | 
| to_value | 1 | To Value | {::nomarkdown}This optional field can be filled out for any of the \N\ subscripts that<br/>FileMan must sort through on the global defined in BY(0).  This field only<br/>has meaning when something has been defined in BY(0), and it indicates the<br/>\GO TO\ value for subscript \N\.  For example, when FileMan builds the<br/>code for sorting through a cross-reference defined in BY(0), if an entry<br/>exists in the first multiple for this field, the value of this field<br/>will be used as the ending point for sorting on the first variable<br/>subscript in the cross-reference.{:/} | STRING |  |  |  | 

## <a name="Dispar0n-19_04"></a>Dispar0n-19_04 

<dl>
<dt>id</dt><dd>Dispar0n-19_04</dd>
<dt>fmId</dt><dd>19.04</dd>
<dt>label</dt><dd>Dispar(0,n)</dd>
</dl>

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
| subscript_level_number | .01 | Subscript Level Number | {::nomarkdown}Number equal to one of the \N\ subscripts that FileMan must sort through<br/>on the global or cross-reference defined by the BY(0) input variable to<br/>the FileMan print routine, EN1^DIP. Used to set entries into the<br/>DIAPAR(0,N) and DIAPAR(0,N,\OUT\) input arrays (subheader control for the<br/>Nth subscript). {:/} | NUMERIC |  | REQUIRED, INDEXED |  | 
| statistical_control_characters | 1 | Statistical Control Characters | {::nomarkdown}Statistical control characters for printing the \Nth\ subscript from the<br/>BY(0) global/cross-reference.  Used to set first piece of DISPAR(0,N)<br/>input variable to the FileMan print, EN1^DIP. If defined, it should<br/>contain any of the three statistical control characters !, #, or + that<br/>are normally entered BEFORE a sort field in the FileMan interactive mode<br/>for printing data.  See the FileMan User's manual section on How to<br/>Display and Print File Data for more information.{:/} | STRING |  |  |  | 
| subheader_format_characters | 2 | Subheader Format Characters | {::nomarkdown}Subheader formatting characters for printing the \Nth\ subscript from the<br/>BY(0) global/cross-reference.  Used to set second piece of DISPAR(0,N)<br/>input variable to the FileMan print, EN1^DIP. If defined, it should<br/>contain any subheader formatting characters that are normally entered<br/>AFTER a sort field in the FileMan interactive mode for printing data.  See<br/>the FileMan User's manual section on How to Display and Print File Data<br/>for more information. (ex. ;C3;\SUBHEADER TITLE:\ to begin printing<br/>subheader in column 3, with a literal caption.){:/} | STRING |  |  |  | 
| subheader_output_transform | 3 | Subheader Output Transform | {::nomarkdown}Output transform code for printing the \Nth\ subscript subheader from the<br/>BY(0) global/cross-reference.  Used to set DISPAR(0,N,\OUT\) input<br/>variable to the FileMan print, EN1^DIP. For instance, it could transform<br/>an inverse date into a printable date.  If defined, it should contain<br/>MUMPS code that transforms the internal value of the subscript \Y\, into<br/>it's external form, also in variable \Y\.{:/} | STRING |  |  |  | 

## <a name="Rpc-19_05"></a>Rpc-19_05 

<dl>
<dt>id</dt><dd>Rpc-19_05</dd>
<dt>fmId</dt><dd>19.05</dd>
<dt>label</dt><dd>Rpc</dd>
</dl>

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
| rpc | .01 | Rpc | {::nomarkdown}This subfile is used to register the Remote Procedures registered<br/>to a particular Broker-type option.  It is a pointer to the<br/>Remote Procedure File.{:/} | POINTER |  | REQUIRED, INDEXED | Remote_Procedure-8994 | 
| rpckey | 1 | Rpckey | {::nomarkdown}This field is the free-text name from the Security Key File that will be<br/>checked when this remote procedure call is requested to the broker.<br/>If the user does not hold this key then the request will be denied.{:/} | STRING |  |  |  | 
| rules | 2 | Rules | {::nomarkdown}This field contains standard M code that will be executed when this<br/>remote procedure call is requested from the broker.  The variable<br/>XQRPCOK is set to 1 and the code is executed. If the value of that<br/>variable is reset to 0 by the RULES code, then the request is denied.{:/} | STRING |  |  |  | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on February 3rd 2017, 5:50:15 am</p>{:/}