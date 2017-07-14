---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; TIU LINK TO FLAG<br/>
# TIU LINK TO FLAG

This RPC is used to link a Progress Note to a Patient Record Flag

## Properties

Property | Value
--- | ---
Label | LINK
Routine | [TIUPRF2](http://code.osehra.org/dox/Routine_TIUPRF2_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
TIUIEN | LITERAL |  | true | TIU DOCUMENT IEN (8925)
PRFIEN | LITERAL |  | true | Flag IEN (26.11 or 26.15)
ACTIENT | LITERAL |  | true | PRF Assignment History IEN (26.14)
DFN | LITERAL |  | true | Patient IEN (File 2)



## MUMPS Method Description

Property | Value
--- | ---
Method | [LINK^TIUPRF2](http://code.osehra.org/dox/Routine_TIUPRF2_source.html)
Method Comment | RPC Link TIU Doc TIUIEN to
Input Parameters | TIUIEN, ASSGNDA, ACTIEN, DFN
First Comment | {::nomarkdown}<pre><code> the PRF action</code></pre>{:/}
Code | {::nomarkdown}<pre><code> N TIUTTL<br/> S TIUTTL=+$G(^TIU(8925,TIUIEN,0))<br/> I 'TIUTTL S TIUY="0^Document does not exist" Q<br/> D UNLINK^TIUPRF1(TIUIEN)<br/> S TIUY=$$STOTIU^DGPFAPI2(DFN,ASSGNDA,ACTIEN,TIUIEN)</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/fNotes.pas">fNotes.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}