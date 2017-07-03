---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; ORWRA DEFAULT EXAM SETTINGS
# ORWRA DEFAULT EXAM SETTINGS

This RPC returns the default settings for the display of imaging exams onthe reports tab. 

Property | Value
--- | ---
Label | GETDEF
Routine | [ORWRA](http://code.osehra.org/dox/Routine_ORWRA_source.html)
Return Type | SINGLE VALUE




### MUMPS Method Description

Property | Value
--- | ---
Method | [GETDEF^ORWRA](http://code.osehra.org/dox/Routine_ORWRA_source.html)
Method Comment | get default context settings for LM imaging reports
Code | {::nomarkdown}<pre><code> N BEG,CONTEXT,END,MAX<br/> S CONTEXT=$$GET^XPAR("ALL","ORCH CONTEXT REPORTS")<br/> S BEG=$$DT^ORCHTAB1($P(CONTEXT,";"))<br/> S END=$$DT^ORCHTAB1($P(CONTEXT,";",2))<br/> S MAX=$P(CONTEXT,";",5)<br/> D OP^XQCHK<br/> I $P($G(XQOPT),"^",1)="DVBA CAPRI GUI" D<br/> .S BEG=$$DT^ORCHTAB1("T-36500")<br/> .S END=$$DT^ORCHTAB1("T")<br/> .S MAX="9999"<br/> S Y=BEG_"^"_END_"^"_MAX</code></pre>{:/}



### CPRS

File Type | Description
--- | ---
NOT OSEHRA CPRS | {::nomarkdown}N/A{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}