---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; TIU DOCUMENTS BY CONTEXT 

 property | value 
--- | --- 
 label | {::nomarkdown}TIU DOCUMENTS BY CONTEXT{:/}
 tag | {::nomarkdown}CONTEXT{:/}
 routine | [TIUSRVLO](http://code.osehra.org/dox/Routine_TIUSRVLO_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}Returns lists of TIU Documents that satisfy the following search criteria: 1 - signed documents (all)   2 - unsigned documents  3 - uncosigned documents4 - signed documents/author5 - signed documents/date range{:/}


### Method description

 property | value 
--- | --- 
 Method comment | main
 Leading comment lines | --- Call with:  TIUY     - RETURN ARRAY pass by reference
CLASS    - Pointer to TIU DOCUMENT DEFINITION #8925.1
CONTEXT  - 1=All Signed (by PT),
- 2="Unsigned (by PT&(AUTHOR!TANSCRIBER))
- 3="Uncosigned (by PT&EXPECTED COSIGNER
- 4="Signed notes (by PT&selected author)
- 5="Signed notes (by PT&date range)
DFN      - Pointer to Patient (#2)
[EARLY]   - FM date/time to begin search
[LATE]    - FM date/time to end search
[PERSON]  - Pointer to file 200 (DUZ if not passed)
[OCCLIM]  - Occurrence Limit (optional)
[SEQUENCE]- "A"=ascending (Regular date/time)
- "D"=descending (Reverse date/time) (dflt)
[INCUND]  - Boolean: include undictated & untranscribed

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}CLASS{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}This is a pointer to the Class of TIU DOCUMENTS which the user isinterested in (e.g., 3 for PROGRESS NOTES, 244 for DISCHARGE SUMMARIES,etc.).{:/} | 
| {::nomarkdown}CONTEXT{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}This is an integer number which maps the context in which the user wishesthe notes to be returned.  The mapping is as follows: 1 - signed documents (all)2 - unsigned documents  3 - uncosigned documents4 - signed documents/author5 - signed documents/date range{:/} | 
| {::nomarkdown}DFN{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}Pointer to Patient File (#2).{:/} | 
| {::nomarkdown}EARLY{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}EARLY DATE/TIME in regular FileMan format for the inclusive lower bound onthe search.{:/} | 
| {::nomarkdown}LATE{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}LATE DATE/TIME in regular FileMan format for the inclusive upper bound onthe search.{:/} | 
| {::nomarkdown}PERSON{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}This is a pointer to the NEW PERSON FILE (#200) for the author of thedocuments to be retrieved.{:/} | 
| {::nomarkdown}OCCLIM{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}This is the maximum number of documents to be retrieved in the currentquery.{:/} | 
| {::nomarkdown}SEQUENCE{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}This is the sequence by reference date/time (A=ascending (OLDEST FIRST),D=descending (NEWEST FIRST)) in which the user would like the listreturned.{:/} | 
| {::nomarkdown}SHOWADD{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}This BOOLEAN parameter determines whether addenda will be included in thereturn array, when their parent documents are identified by the searchcriteria, and vice versa. Also if SHOWADD is TRUE (1), the \+\ at thebeginning of the return text will be omitted (since it offers onlyredundant information).{:/} | 
| {::nomarkdown}INCUND{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}Optional Boolean parameter determines whether Undictated and Untranscribed documents should be returned along with Unsigneddocuments, when the CONTEXT is passed as 2.{:/} | 




 Generated on January 13th 2017, 5:52:13 am