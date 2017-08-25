---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORWDPS1 LOCPICK<br/>
# ORWDPS1 LOCPICK



## Properties

Property | Value
--- | ---
Label | LOCPICK
MUMPS Implementation | [ORWDPS1](http://code.osehra.org/dox/Routine_ORWDPS1_source.html)
Return Type | SINGLE VALUE




## MUMPS Method Description

Property | Value
--- | ---
Method | [LOCPICK^ORWDPS1](http://code.osehra.org/dox/Routine_ORWDPS1_source.html)
Method Comment | return default Location level routing
Input Parameters | LOC
Code | {::nomarkdown}<pre><code> S Y=""<br/> S Y=$$GET^XPAR("LOC.`"_LOC_"^SYS","ORWDPS ROUTING DEFAULT",1,"I")<br/> I Y="C" S Y="C^in Clinic"<br/> I Y="M" S Y="M^by Mail"<br/> I Y="W" S Y="W^at Window"<br/> I Y="N" S Y=""</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rODMeds.pas">Orders/rODMeds.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}