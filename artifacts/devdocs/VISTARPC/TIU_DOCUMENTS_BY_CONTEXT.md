---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; TIU DOCUMENTS BY CONTEXT
# TIU DOCUMENTS BY CONTEXT

Returns lists of TIU Documents that satisfy the following search criteria: 1 - signed documents (all)   2 - unsigned documents  3 - uncosigned documents4 - signed documents/author5 - signed documents/date range

Property | Value
--- | ---
Label | CONTEXT
Routine | [TIUSRVLO](http://code.osehra.org/dox/Routine_TIUSRVLO_source.html)
Return Type | GLOBAL ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
CLASS | LITERAL |  | true | This is a pointer to the Class of TIU DOCUMENTS which the user isinterested in (e.g., 3 for PROGRESS NOTES, 244 for DISCHARGE SUMMARIES,etc.).
CONTEXT | LITERAL |  | true | This is an integer number which maps the context in which the user wishesthe notes to be returned.  The mapping is as follows: 1 - signed documents (all)2 - unsigned documents  3 - uncosigned documents4 - signed documents/author5 - signed documents/date range
DFN | LITERAL |  | true | Pointer to Patient File (#2).
EARLY | LITERAL |  | true | EARLY DATE/TIME in regular FileMan format for the inclusive lower bound onthe search.
LATE | LITERAL |  | true | LATE DATE/TIME in regular FileMan format for the inclusive upper bound onthe search.
PERSON | LITERAL |  | true | This is a pointer to the NEW PERSON FILE (#200) for the author of thedocuments to be retrieved.
OCCLIM | LITERAL |  | true | This is the maximum number of documents to be retrieved in the currentquery.
SEQUENCE | LITERAL |  | true | This is the sequence by reference date/time (A&#x3D;ascending (OLDEST FIRST),D&#x3D;descending (NEWEST FIRST)) in which the user would like the listreturned.
SHOWADD | LITERAL |  | true | This BOOLEAN parameter determines whether addenda will be included in thereturn array, when their parent documents are identified by the searchcriteria, and vice versa. Also if SHOWADD is TRUE (1), the &quot;+&quot; at thebeginning of the return text will be omitted (since it offers onlyredundant information).
INCUND | LITERAL |  | true | Optional Boolean parameter determines whether Undictated and Untranscribed documents should be returned along with Unsigneddocuments, when the CONTEXT is passed as 2.



### MUMPS Method Description

Property | Value
--- | ---
Method | [CONTEXT^TIUSRVLO](http://code.osehra.org/dox/Routine_TIUSRVLO_source.html)
Method Comment | main
Input Parameters | CLASS, CONTEXT, DFN, EARLY, LATE, PERSON, OCCLIM, SEQUENCE, SHOWADD, INCUND
First Comment | {::nomarkdown}<pre><code> --- Call with:  TIUY     - RETURN ARRAY pass by reference<br/>                 CLASS    - Pointer to TIU DOCUMENT DEFINITION #8925.1<br/>                 CONTEXT  - 1=All Signed (by PT),<br/>                          - 2="Unsigned (by PT&(AUTHOR!TANSCRIBER))<br/>                          - 3="Uncosigned (by PT&EXPECTED COSIGNER<br/>                          - 4="Signed notes (by PT&selected author)<br/>                          - 5="Signed notes (by PT&date range)<br/>                 DFN      - Pointer to Patient (#2)<br/>                [EARLY]   - FM date/time to begin search<br/>                [LATE]    - FM date/time to end search<br/>                [PERSON]  - Pointer to file 200 (DUZ if not passed)<br/>                [OCCLIM]  - Occurrence Limit (optional)<br/>                [SEQUENCE]- "A"=ascending (Regular date/time)<br/>                          - "D"=descending (Reverse date/time) (dflt)<br/>                [INCUND]  - Boolean: include undictated & untranscribed</code></pre>{:/}
Code | {::nomarkdown}<pre><code> S TIUY=$NA(^TMP("TIUR",$J))<br/> K @TIUY<br/> I $G(CONTEXT)'>0 Q<br/> I $G(CLASS)'>0 Q<br/> I $G(CONTEXT)=1 D STRT1^AWCMCPR1 ; TIU*1.0*181<br/> S:+$G(EARLY)'>0!(+$G(CONTEXT)=1) EARLY=0<br/> S:+$G(LATE)'>0!(+$G(CONTEXT)=1) LATE=5000000<br/> I EARLY>LATE D SWAP(.EARLY,.LATE)<br/> I $L(LATE,".")=1 D EXPRANGE(.EARLY,.LATE)<br/> S:+$G(PERSON)'>0 PERSON=DUZ<br/> S:$G(SEQUENCE)']"" SEQUENCE="D"<br/> S:+$G(OCCLIM)'>0 OCCLIM=9999999<br/> S DFN=+$G(DFN)<br/> S EARLY=9999999-EARLY,LATE=9999999-LATE ; CHANGE TO REVERSE DATES<br/> I CONTEXT=1!(CONTEXT=5) D  G CTXQ<br/> . D ACLPT(.TIUY,CLASS,DFN,LATE,EARLY,OCCLIM,SEQUENCE)<br/> I CONTEXT=2 D  G CTXQ<br/> . I DFN>0 D  Q<br/> . . D ACLAU(.TIUY,CLASS,PERSON,DFN,LATE,EARLY,SEQUENCE,$G(INCUND))<br/> . F  S DFN=$O(^TIU(8925,"ACLAU",CLASS,PERSON,DFN)) Q:DFN'>0  D ACLAU(.TIUY,CLASS,PERSON,DFN,LATE,EARLY,SEQUENCE,$G(INCUND))<br/> I CONTEXT=3 D  G CTXQ<br/> . I DFN>0 D  Q<br/> . . D ACLEC(.TIUY,CLASS,PERSON,DFN,LATE,EARLY,SEQUENCE)<br/> . F  S DFN=$O(^TIU(8925,"ACLEC",CLASS,PERSON,DFN)) Q:DFN'>0  D ACLEC(.TIUY,CLASS,PERSON,DFN,LATE,EARLY,SEQUENCE)<br/> I CONTEXT=4 D  G CTXQ<br/> . I DFN>0 D  Q<br/> . . ;VMP OIFO BAY PINES;ELR;TIU*1.0*194 REMOVED EXECUTION OF ACLSB & ADDED APTCL<br/> . . ;D ACLSB(.TIUY,CLASS,PERSON,DFN,LATE,EARLY,SEQUENCE)<br/> . . D APTCL^TIUSRVLP(.TIUY,CLASS,PERSON,DFN,LATE,EARLY,SEQUENCE)<br/> . F  S DFN=$O(^TIU(8925,"APTCL",DFN)) Q:DFN'>0  D APTCL^TIUSRVLP(.TIUY,CLASS,PERSON,DFN,LATE,EARLY,SEQUENCE)</code></pre>{:/}



### CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rDCSumm.pas">rDCSumm.pas</a>{:/}
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rTIU.pas">rTIU.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}