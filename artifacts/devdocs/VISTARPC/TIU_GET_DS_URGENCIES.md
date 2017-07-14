---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; TIU GET DS URGENCIES<br/>
# TIU GET DS URGENCIES

Returns a set of discharge summary urgencies for use in a long list box.

## Properties

Property | Value
--- | ---
Label | URGENCY
Routine | [TIUSRVA](http://code.osehra.org/dox/Routine_TIUSRVA_source.html)
Return Type | ARRAY




## MUMPS Method Description

Property | Value
--- | ---
Method | [URGENCY^TIUSRVA](http://code.osehra.org/dox/Routine_TIUSRVA_source.html)
Method Comment | retrieve set values from dd for discharge summary urgency
Code | {::nomarkdown}<pre><code> N TIUDD,TIUI,TIUX<br/> D FIELD^DID(8925,.09,"","POINTER","TIUDD")<br/> F TIUI=1:1 S TIUX=$P(TIUDD("POINTER"),";",TIUI) Q:TIUX=""   S TIUY(TIUI)=$TR(TIUX,":","^")</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rDCSumm.pas">rDCSumm.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}