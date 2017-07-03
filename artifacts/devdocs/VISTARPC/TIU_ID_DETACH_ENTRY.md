---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; TIU ID DETACH ENTRY
# TIU ID DETACH ENTRY

This call will remove an ID Entry from an Interdisciplinary Note.

Property | Value
--- | ---
Label | IDDTCH
Routine | [TIUSRVP1](http://code.osehra.org/dox/Routine_TIUSRVP1_source.html)
Return Type | SINGLE VALUE


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
TIUDA | LITERAL |  | true | This is the internal entry number of the ID Entry which is to be removedfrom the ID Note.



### MUMPS Method Description

Property | Value
--- | ---
Method | [IDDTCH^TIUSRVP1](http://code.osehra.org/dox/Routine_TIUSRVP1_source.html)
Method Comment | Detach TIUDA from its ID Parent
Input Parameters | TIUDA
Code | {::nomarkdown}<pre><code> N TIUX,IDDAD<br/> I '+$G(^TIU(8925,TIUDA,21)) D  Q<br/> . S TIUY="0^Record #"_TIUDA_" is NOT an ID Entry."<br/> S IDDAD=+$G(^TIU(8925,TIUDA,21))<br/> S TIUX(2101)="@"<br/> D FILE^TIUSRVP(.TIUY,TIUDA,.TIUX,1)<br/> D AUDLINK^TIUGR1(TIUDA,"d",IDDAD)<br/> D IDDEL^TIUALRT1(TIUDA)</code></pre>{:/}



### CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rTIU.pas">rTIU.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}