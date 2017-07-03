---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; ORRHCQ QRYITR
# ORRHCQ QRYITR

Executes the query for a patient.  An iterator is passed in, in the format:   ListSource Subscript ^ DFN ^ Item# The value returned includes the records found and the next iterator:   PtSearched ^ RecordCount ^ ListSource Subscript ^ NextDFN ^ Next Item#

Property | Value
--- | ---
Label | QRYITR
Routine | [ORRHCQ](http://code.osehra.org/dox/Routine_ORRHCQ_source.html)
Return Type | SINGLE VALUE


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
ORRITR | LITERAL |  | true | Iterator used to get the next patient in the query.



### MUMPS Method Description

Property | Value
--- | ---
Method | [QRYITR^ORRHCQ](http://code.osehra.org/dox/Routine_ORRHCQ_source.html)
Method Comment | Do query for the current iterator
Input Parameters | ORRITR
First Comment | {::nomarkdown}<pre><code> VAL=PtSearched^RecordsFound^Iterator</code></pre>{:/}
Code | {::nomarkdown}<pre><code> S VAL=$$PTSCRN($P(ORRITR,";",2))<br/> I VAL S $P(VAL,U,2)=$$QRYPT($P(ORRITR,";",2))<br/> S $P(VAL,U,3)=$$NXTITER(ORRITR)</code></pre>{:/}



### CPRS

File Type | Description
--- | ---
NOT OSEHRA CPRS | {::nomarkdown}N/A{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}