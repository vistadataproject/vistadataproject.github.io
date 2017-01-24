---
layout: default
title: VDM documentation
---

## [VDM](TableOfContent.md) &#8594; Help_Frame-9_2 

 property | value 
--- | --- 
 id | Help_Frame-9_2
 fmId | 9.2
 label | Help Frame
 location | ^DIC(9.2,
 description | {::nomarkdown}This file contains the text of help frames created via the Help<br/>Processor (XQH).  Help frames may be associated with options or with<br/>data dictionary fields to provide on-line instruction.  The file<br/>is cross-referenced by name, header, date entered, author, and editor.<br/><br/><br/>{:/}

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
| number | .001 | Number | {::nomarkdown}This field uniquely identifies a help frame.{:/} | IEN |  |  |  | 
| name | .01 | Name | {::nomarkdown}The unique name of the frame, preceded with the package prefix name,<br/>similar to option names.{:/} | STRING |  | REQUIRED, INDEXED |  | 
| header | 1 | Header | {::nomarkdown}A short description of the frame, succinctly describing the content<br/>of the frame{:/} | STRING |  |  |  | 
| text | 2 | Text | {::nomarkdown}The actual text of the help frame, which will be displayed when the user<br/>presses question mark.  Screen breaks are indicated by a line terminating<br/>with \..\.<br/>continuation screens, or 'related frames'.{:/} | STRING |  |  |  | 
| related_frame | 3 | Related Frame | {::nomarkdown}This is a multiple field which contains information on the other help<br/>frames which are related to the current help frame through specific<br/>keywords.  The keywords may be selected to obtain additional information<br/>about the topic through the related help frame(s).{:/} | [OBJECT] |  |  | [Related_Frame-9_22](#Related_Frame-9_22)  | 
| want_to_load_keywords_y_n | 3.5 | Want To Load Keywords (y/n)? | {::nomarkdown}This field is designed for internal use.  Its input transform will<br/>invoke a routine to associate keywords with related help frames.{:/} | STRING |  |  |  | 
| date_entered | 4 | Date Entered | {::nomarkdown}Date/time that this frame was entered into the system, which is used to <br/>track new Help frame activity.{:/} | DATE-TIME |  | INDEXED |  | 
| invoked_by_routine | 5 | Invoked By Routine | {::nomarkdown}This field is for documentation purposes.  It serves as a record of which<br/>routines reference a particular help frame.{:/} | [STRING] |  |  |  | 
| author | 6 | Author | {::nomarkdown}The person who created the entry for this help frame.  This is a triggered<br/>field, it's value determined by the creator of the .01 entry.{:/} | POINTER |  | INDEXED | [New_Person-200](New_Person-200.md) | 
| editor | 7 | Editor | {::nomarkdown}Users who are allowed to edit this help frame, as determined by the author.{:/} | [POINTER] |  |  | {id:New_Person-200} | 
| entry_execute_statement | 10.1 | Entry Execute Statement | {::nomarkdown}This field is used to include an M code statement which is executed as the<br/>user enters this help frame.{:/} | STRING |  |  |  | 
| exit_execute_statement | 10.2 | Exit Execute Statement | {::nomarkdown}This field is used to provide an M code statement which is to be executed<br/>as the user exits the current help frame (whether moving into another help<br/>frame or back out of the current help frame).{:/} | STRING |  |  |  | 

## <a name="Related_Frame-9_22"></a>Related_Frame-9_22 

 property | value 
--- | --- 
 id | Related_Frame-9_22
 label | Related Frame

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
| related_frame_keyword | .01 | Related Frame Keyword | {::nomarkdown}A keyword appears in the text surrounded by brackets.  When the user<br/>enters the keyword, a related frame will be displayed with more detailed<br/>information on the topic suggested by the keyword.{:/} | STRING |  | REQUIRED, INDEXED |  | 
| related_frame | 1 | Related Frame | {::nomarkdown}The internal name of another help-frame which can be invoked by the<br/>keyword to obtain more detailed information on a sub-topic.{:/} | POINTER |  | INDEXED | Help_Frame-9_2 | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 22nd 2017, 3:23:36 am</p>{:/}