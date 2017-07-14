---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORWPCE AUTO VISIT TYPE SELECT<br/>
# ORWPCE AUTO VISIT TYPE SELECT

Returns TRUE if visit type should be automatically selected.

## Properties

Property | Value
--- | ---
Label | AUTOVSIT
Routine | [ORWPCE2](http://code.osehra.org/dox/Routine_ORWPCE2_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
LOC | LITERAL |  |  | Location.



## MUMPS Method Description

Property | Value
--- | ---
Method | [AUTOVSIT^ORWPCE2](http://code.osehra.org/dox/Routine_ORWPCE2_source.html)
Method Comment | Returns TRUE if automatic selection of Visit Type
Input Parameters | LOC
Code | {::nomarkdown}<pre><code> N SRV<br/> S SRV=$P($G(^VA(200,DUZ,5)),U)<br/> S ORY=$$GET^XPAR(DUZ_";VA(200,^LOC.`"_$G(LOC)_"^SRV.`"_+$G(SRV)_"^DIV^SYS","ORWPCE DISABLE AUTO VISIT TYPE",1,"Q")<br/> I +ORY S ORY=1<br/> S ORY='ORY</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Encounter/rPCE.pas">Encounter/rPCE.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}