---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORQQVI2 VITALS HELP<br/>
# ORQQVI2 VITALS HELP



## Properties

Property | Value
--- | ---
Label | HELP
MUMPS Implementation | [ORQQVI2](http://code.osehra.org/dox/Routine_ORQQVI2_source.html)
Return Type | ARRAY




## MUMPS Method Description

Property | Value
--- | ---
Method | [HELP^ORQQVI2](http://code.osehra.org/dox/Routine_ORQQVI2_source.html)
Method Comment | This procedure will return help for a particular
Input Parameters | ORQTYPE
First Comment | {::nomarkdown}<pre><code> measurement type in an array.<br/>   Input<br/>   Variables:  ORQTYPE=Type of measurement (abbreviation<br/>               (req.)  from PCE Device Interface Specification).<br/>               ORQLST=Array root to store help text in<br/></code></pre>{:/}
Code | {::nomarkdown}<pre><code> D HELP^GMRVPCE0(ORQTYPE,"ORQLST")</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
NOT OSEHRA CPRS | {::nomarkdown}{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}