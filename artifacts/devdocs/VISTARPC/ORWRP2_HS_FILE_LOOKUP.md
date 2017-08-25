---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORWRP2 HS FILE LOOKUP<br/>
# ORWRP2 HS FILE LOOKUP

This RPC gets the list of file entries for the file defined for a specificHealth Summary component on the ADHOC Health Summary.  Current choicesinclude files 60, 9999999.64, 811.9, 8925.1, 81, and possibly others(handled generically).  The file entries are used to populate a combo boxon the form.

## Properties

Property | Value
--- | ---
Label | FILESEL
MUMPS Implementation | [ORWRP2](http://code.osehra.org/dox/Routine_ORWRP2_source.html)
Return Type | GLOBAL ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
FILE | LITERAL |  | true | This is the file number for the entries to be used to populate the combobox.



## MUMPS Method Description

Property | Value
--- | ---
Method | [FILESEL^ORWRP2](http://code.osehra.org/dox/Routine_ORWRP2_source.html)
Method Comment | Get file entries for Combobox
Input Parameters | ORFILE, ORFROM, ORDIR
First Comment | {::nomarkdown}<pre><code>RPC => ORWRP2 HS FILE LOOKUP</code></pre>{:/}
Code | {::nomarkdown}<pre><code> D FILESEL^GMTSADH5(.OROOT,ORFILE,ORFROM,ORDIR)</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rReports.pas">rReports.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}