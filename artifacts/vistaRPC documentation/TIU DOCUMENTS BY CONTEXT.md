---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; TIU DOCUMENTS BY CONTEXT 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}TIU DOCUMENTS BY CONTEXT{:/}
 tag | {::nomarkdown}CONTEXT{:/}
 routine | [TIUSRVLO](http://code.osehra.org/dox/Routine_TIUSRVLO_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}Returns lists of TIU Documents that satisfy the following search criteria: 1 - signed documents (all)   2 - unsigned documents  3 - uncosigned documents4 - signed documents/author5 - signed documents/date range{:/}

#### Input Parameters

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


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | CONTEXT^[TIUSRVLO](http://code.osehra.org/dox/Routine_TIUSRVLO_source.html)
 Method comment | main
 Input parameters | {::nomarkdown}CLASS, CONTEXT, DFN, EARLY, LATE, PERSON, OCCLIM, SEQUENCE, SHOWADD, INCUND{:/}
 First comment | {::nomarkdown}<pre> --- Call with:  TIUY     - RETURN ARRAY pass by reference<br/>                 CLASS    - Pointer to TIU DOCUMENT DEFINITION #8925.1<br/>                 CONTEXT  - 1=All Signed (by PT),<br/>                          - 2="Unsigned (by PT&(AUTHOR!TANSCRIBER))<br/>                          - 3="Uncosigned (by PT&EXPECTED COSIGNER<br/>                          - 4="Signed notes (by PT&selected author)<br/>                          - 5="Signed notes (by PT&date range)<br/>                 DFN      - Pointer to Patient (#2)<br/>                [EARLY]   - FM date/time to begin search<br/>                [LATE]    - FM date/time to end search<br/>                [PERSON]  - Pointer to file 200 (DUZ if not passed)<br/>                [OCCLIM]  - Occurrence Limit (optional)<br/>                [SEQUENCE]- "A"=ascending (Regular date/time)<br/>                          - "D"=descending (Reverse date/time) (dflt)<br/>                [INCUND]  - Boolean: include undictated & untranscribed</pre>{:/}
 Code | {::nomarkdown}  S TIUY=$NA(^TMP("TIUR",$J))<br> K @TIUY<br> I $G(CONTEXT)'>0 Q<br> I $G(CLASS)'>0 Q<br> I $G(CONTEXT)=1 D STRT1^AWCMCPR1 ; TIU*1.0*181<br> S:+$G(EARLY)'>0!(+$G(CONTEXT)=1) EARLY=0<br> S:+$G(LATE)'>0!(+$G(CONTEXT)=1) LATE=5000000<br> I EARLY>LATE D SWAP(.EARLY,.LATE)<br> I $L(LATE,".")=1 D EXPRANGE(.EARLY,.LATE)<br> S:+$G(PERSON)'>0 PERSON=DUZ<br> S:$G(SEQUENCE)']"" SEQUENCE="D"<br> S:+$G(OCCLIM)'>0 OCCLIM=9999999<br> S DFN=+$G(DFN)<br> S EARLY=9999999-EARLY,LATE=9999999-LATE ; CHANGE TO REVERSE DATES<br> I CONTEXT=1!(CONTEXT=5) D  G CTXQ<br> . D ACLPT(.TIUY,CLASS,DFN,LATE,EARLY,OCCLIM,SEQUENCE)<br> I CONTEXT=2 D  G CTXQ<br> . I DFN>0 D  Q<br> . . D ACLAU(.TIUY,CLASS,PERSON,DFN,LATE,EARLY,SEQUENCE,$G(INCUND))<br> . F  S DFN=$O(^TIU(8925,"ACLAU",CLASS,PERSON,DFN)) Q:DFN'>0  D ACLAU(.TIUY,CLASS,PERSON,DFN,LATE,EARLY,SEQUENCE,$G(INCUND))<br> I CONTEXT=3 D  G CTXQ<br> . I DFN>0 D  Q<br> . . D ACLEC(.TIUY,CLASS,PERSON,DFN,LATE,EARLY,SEQUENCE)<br> . F  S DFN=$O(^TIU(8925,"ACLEC",CLASS,PERSON,DFN)) Q:DFN'>0  D ACLEC(.TIUY,CLASS,PERSON,DFN,LATE,EARLY,SEQUENCE)<br> I CONTEXT=4 D  G CTXQ<br> . I DFN>0 D  Q<br> . . ;VMP OIFO BAY PINES;ELR;TIU*1.0*194 REMOVED EXECUTION OF ACLSB & ADDED APTCL<br> . . ;D ACLSB(.TIUY,CLASS,PERSON,DFN,LATE,EARLY,SEQUENCE)<br> . . D APTCL^TIUSRVLP(.TIUY,CLASS,PERSON,DFN,LATE,EARLY,SEQUENCE)<br> . F  S DFN=$O(^TIU(8925,"APTCL",DFN)) Q:DFN'>0  D APTCL^TIUSRVLP(.TIUY,CLASS,PERSON,DFN,LATE,EARLY,SEQUENCE){:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rDCSumm.pas">rDCSumm.pas</a><br/> <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rTIU.pas">rTIU.pas</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 26th 2017, 8:30:44 pm</p>{:/}