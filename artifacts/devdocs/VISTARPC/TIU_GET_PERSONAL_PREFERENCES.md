---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; TIU GET PERSONAL PREFERENCES
# TIU GET PERSONAL PREFERENCES

Returns Users personal preferences for TIU in the following format: TIUY = USER [1P] ^ DEFAULT LOCATION [2P] ^ REVIEW SCREEN SORT FIELD [3S] ^    ==>REVIEW SCREEN SORT ORDER [4S] ^ DISPLAY MENUS [5S] ^ PATIENT    ==>SELECTION PREFERENCE [6S] ^ ASK 'Save changes?' AFTER EDIT [7S] ^    ==>ASK SUBJECT FOR PROGRESS NOTES [8S] ^

Property | Value
--- | ---
Label | GETPREF
Routine | [TIUSRVR](http://code.osehra.org/dox/Routine_TIUSRVR_source.html)
Return Type | SINGLE VALUE


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
USER | LITERAL |  | true | This is the pointer to file 200 (DUZ) for the current user.



### MUMPS Method Description

Property | Value
--- | ---
Method | [GETPREF^TIUSRVR](http://code.osehra.org/dox/Routine_TIUSRVR_source.html)
Method Comment | Get user&#x27;s personal preferences
Input Parameters | USER
First Comment | {::nomarkdown}<pre><code> Call with TIUY (by ref)<br/>           USER is pointer to file 200<br/> Returns   TIUY = USER ^ DEFAULT LOCATION ^ REVIEW SCREEN SORT FIELD ^<br/>               ==>REVIEW SCREEN SORT ORDER ^ DISPLAY MENUS ^ PATIENT<br/>               ==>SELECTION PREFERENCE ^ ASK 'Save changes?' AFTER<br/>               ==>EDIT ^ ASK SUBJECT FOR PROGRESS NOTES ^</code></pre>{:/}
Code | {::nomarkdown}<pre><code> S TIUY=$$PERSPRF^TIULE(USER)</code></pre>{:/}



### CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rDCSumm.pas">rDCSumm.pas</a>{:/}
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rTIU.pas">rTIU.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}