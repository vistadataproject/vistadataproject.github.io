---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; TIU CREATE ADDENDUM RECORD<br/>
# TIU CREATE ADDENDUM RECORD

This Remote Procedure allows the creation of addenda to TIU Documents.

## Properties

Property | Value
--- | ---
Label | MAKEADD
MUMPS Implementation | [TIUSRVP](http://code.osehra.org/dox/Routine_TIUSRVP_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
TIUDA | LITERAL |  | true | This is the record number of the parent document in file 8925.
TIUX | LIST |  | true | This is a local input array containing the data to be filed for theaddendum record, formatted as described for the TIU UPDATE RECORD RPC.



## MUMPS Method Description

Property | Value
--- | ---
Method | [MAKEADD^TIUSRVP](http://code.osehra.org/dox/Routine_TIUSRVP_source.html)
Method Comment | Create addendum
Input Parameters | TIUDA, TIUX, SUPPRESS
First Comment | {::nomarkdown}<pre><code> For backward compatibility<br/> Use MAKEADD^TIUSRVP2 now, please</code></pre>{:/}
Code | {::nomarkdown}<pre><code> D MAKEADD^TIUSRVP2(.TIUDADD,TIUDA,.TIUX,+$G(SUPPRESS))</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rDCSumm.pas">rDCSumm.pas</a>{:/}
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rTIU.pas">rTIU.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}