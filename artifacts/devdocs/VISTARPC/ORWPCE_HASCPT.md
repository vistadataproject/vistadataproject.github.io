---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORWPCE HASCPT<br/>
# ORWPCE HASCPT

Returns the passed array with the second piece set to 0 or 1.

## Properties

Property | Value
--- | ---
Label | HASCPT
Routine | [ORWPCE2](http://code.osehra.org/dox/Routine_ORWPCE2_source.html)
Return Type | ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
ORLIST | LIST |  |  | This array contains the values that would be present in the 811.1 file&#x27;s&quot;B&quot; cross reference.  Since the .01 field of this file is a variablepointer, it should appear as follows:PCE Data Type       Array ValueExam                IEN;AUTTEXAM(Health Factor       IEN;AUTTHF(Immunization        IEN;AUTTIMM(Education Topic     IEN;AUTTEDT(Skin Test           IEN;AUTTSK(



## MUMPS Method Description

Property | Value
--- | ---
Method | [HASCPT^ORWPCE2](http://code.osehra.org/dox/Routine_ORWPCE2_source.html)
Method Comment | Returns true if there are any mapped CPT Codes
Input Parameters | ORLIST
Code | {::nomarkdown}<pre><code> N IEN,IDX,FOUND<br/> S IDX=0<br/> F  S IDX=$O(ORLIST(IDX)) Q:'+IDX  D<br/> . S FOUND=0<br/> . S IEN=$$FIND1^DIC(811.1,"","QX",ORLIST(IDX))<br/> . I +IEN S FOUND=+$$GET1^DIQ(811.1,IEN,.05,"I")<br/> . S ORY(IDX)=ORLIST(IDX)_"="_FOUND</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Encounter/rPCE.pas">Encounter/rPCE.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}