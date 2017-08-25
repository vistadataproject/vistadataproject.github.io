---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; TIU LOAD BOILERPLATE TEXT<br/>
# TIU LOAD BOILERPLATE TEXT

This RPC will load the boilerplate text associated with the selectedtitle, and execute the methods for any objects embedded in the boilerplatetext.

## Properties

Property | Value
--- | ---
Label | BLRSHELL
MUMPS Implementation | [TIUSRVD](http://code.osehra.org/dox/Routine_TIUSRVD_source.html)
Return Type | GLOBAL ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
TITLE | LITERAL |  | true | This is a pointer to the TIU DOCUMENT DEFINITION FILE (#8925.1), whichidentifies the title of the document to be loaded.
DFN | LITERAL |  | true | This is the pointer to the patient for whom the document is being entered.
VSTRING | LITERAL |  | true | This optional parameter is the visit string, formatted as:HLOC;VISIT_DATE;SVC_CATIt&#x27;s necessary when objects included in the boilerplate are sensitive to the attributes of the visit (e.g., the object VISIT DATE).



## MUMPS Method Description

Property | Value
--- | ---
Method | [BLRSHELL^TIUSRVD](http://code.osehra.org/dox/Routine_TIUSRVD_source.html)
Method Comment | Shell for boilerplate RPC
Input Parameters | TITLE, DFN, VSTR
Code | {::nomarkdown}<pre><code> K ^TMP("TIUBOIL",$J)<br/> D BLRPLT(.TIUY,TITLE,DFN,$G(VSTR))<br/> K ^TMP("TIUBOIL",$J,0)</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rTIU.pas">rTIU.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}