---
layout: default
title: VDM
---

#### [Developer Documentation](../index) &#187; [VDM](TableOfContents) &#187; Help_Frame-9_2<br/>
<a name="top"></a>
# Help Frame (9.2)
This file contains the text of help frames created via the Help Processor (XQH).  Help frames may be associated with options or with data dictionary fields to provide on-line instruction.  The file is cross-referenced by name, header, date entered, author, and editor.   

**Global:** ^DIC(9.2,

**Domain:** Non-Clinical

## Properties

Label/Field Name | Field # | Description | Datatype | Attributes | Range
--- | --- | --- | --- | --- | ---
**Number**{::nomarkdown}<pre><code>  number</code></pre>{:/} | .001 | This field uniquely identifies a help frame. | IEN |  | 
**Name**{::nomarkdown}<pre><code>  name</code></pre>{:/} | .01 | The unique name of the frame, preceded with the package prefix name,<br/>similar to option names. | STRING | INDEXED<br/>REQUIRED | 
**Header**{::nomarkdown}<pre><code>  header</code></pre>{:/} | 1 | A short description of the frame, succinctly describing the content<br/>of the frame | STRING |  | 
**Text**{::nomarkdown}<pre><code>  text</code></pre>{:/} | 2 | The actual text of the help frame, which will be displayed when the user<br/>presses question mark.  Screen breaks are indicated by a line terminating<br/>with "..".<br/>continuation screens, or 'related frames'. | STRING |  | 
**Related Frame**{::nomarkdown}<pre><code>  related_frame</code></pre>{:/} | 3 | This is a multiple field which contains information on the other help<br/>frames which are related to the current help frame through specific<br/>keywords.  The keywords may be selected to obtain additional information<br/>about the topic through the related help frame(s). | OBJECT |  | [Related_Frame-9_22](#Related_Frame-9_22)
**Want To Load Keywords (y/n)?**{::nomarkdown}<pre><code>  want_to_load_keywords_y_n</code></pre>{:/} | 3.5 | This field is designed for internal use.  Its input transform will<br/>invoke a routine to associate keywords with related help frames. | STRING |  | 
**Date Entered**{::nomarkdown}<pre><code>  date_entered</code></pre>{:/} | 4 | Date/time that this frame was entered into the system, which is used to <br/>track new Help frame activity. | DATE-TIME | INDEXED | 
**Invoked By Routine**{::nomarkdown}<pre><code>  invoked_by_routine</code></pre>{:/} | 5 | This field is for documentation purposes.  It serves as a record of which<br/>routines reference a particular help frame. | STRING |  | 
**Author**{::nomarkdown}<pre><code>  author</code></pre>{:/} | 6 | The person who created the entry for this help frame.  This is a triggered<br/>field, it's value determined by the creator of the .01 entry. | POINTER | INDEXED | [New_Person-200](New_Person-200)
**Editor**{::nomarkdown}<pre><code>  editor</code></pre>{:/} | 7 | Users who are allowed to edit this help frame, as determined by the author. | POINTER |  | [New_Person-200](New_Person-200)
**Entry Execute Statement**{::nomarkdown}<pre><code>  entry_execute_statement</code></pre>{:/} | 10.1 | This field is used to include an M code statement which is executed as the<br/>user enters this help frame. | STRING |  | 
**Exit Execute Statement**{::nomarkdown}<pre><code>  exit_execute_statement</code></pre>{:/} | 10.2 | This field is used to provide an M code statement which is to be executed<br/>as the user exits the current help frame (whether moving into another help<br/>frame or back out of the current help frame). | STRING |  | 

[&uarr; Return to top](#top)<br/>

## Sub-Files
### <a name="Related_Frame-9_22"></a>Related Frame (9.22)

<dl>
<dt>ID</dt><dd>Related_Frame-9_22</dd></dl>

#### Properties

Label/Field Name | Field # | Description | Datatype | Attributes | Range
--- | --- | --- | --- | --- | ---
**Related Frame Keyword**{::nomarkdown}<pre><code>  related_frame_keyword</code></pre>{:/} | .01 | A keyword appears in the text surrounded by brackets.  When the user<br/>enters the keyword, a related frame will be displayed with more detailed<br/>information on the topic suggested by the keyword. | STRING | INDEXED<br/>REQUIRED | 
**Related Frame**{::nomarkdown}<pre><code>  related_frame</code></pre>{:/} | 1 | The internal name of another help-frame which can be invoked by the<br/>keyword to obtain more detailed information on a sub-topic. | POINTER | INDEXED | [Help_Frame-9_2](Help_Frame-9_2)

[&uarr; Return to top](#top)<br/>




{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:39 pm</p>{:/}