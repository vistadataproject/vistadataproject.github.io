---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORQQPX SET FOLDERS<br/>
# ORQQPX SET FOLDERS

Sets the value of the ORQQPX REMINDER FOLDERS parameter for thecurrent user.

## Properties

Property | Value
--- | ---
Label | SETFLDRS
MUMPS Implementation | [ORQQPX](http://code.osehra.org/dox/Routine_ORQQPX_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
ORFLDRS | LITERAL |  | true | String containing a one character code for each folder visible in thereminder tree structure of the CPRS GUI.Visible Folder Codes are:  D&#x3D;Due  A&#x3D;Applicable  N&#x3D;Not Applicable  E&#x3D;Evaluated  O&#x3D;Other



## MUMPS Method Description

Property | Value
--- | ---
Method | [SETFLDRS^ORQQPX](http://code.osehra.org/dox/Routine_ORQQPX_source.html)
Method Comment | Sets Visible Reminder Folders for the current user
Input Parameters | ORFLDRS
Code | {::nomarkdown}<pre><code> N ORERR<br/> D EN^XPAR(DUZ_";VA(200,","ORQQPX REMINDER FOLDERS",1,ORFLDRS,.ORERR)<br/> S ORY=1</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rReminders.pas">rReminders.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}