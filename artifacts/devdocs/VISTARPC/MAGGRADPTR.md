---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; MAGGRADPTR
# MAGGRADPTR

Files the image pointer into the Radiology package and the Radiologypointers into the Imaging package.

Property | Value
--- | ---
Label | MAGPTR
Routine | [MAGGTRA](http://code.osehra.org/dox/Routine_MAGGTRA_source.html)
Return Type | SINGLE VALUE


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
XDUZ | LITERAL | 30 | true | Not being used anymore, kept for backward compatibility.DUZ of user.   
MAGIEN | LITERAL | 30 | true | Internal entry number of Image File entry  ^MAG(2005,
DATA | LITERAL | 255 | true | First &quot;^&quot; piece is MAGIEN, The IMAGE File Internal number.  ^MAG(2005,Next  &quot;^&quot; pieces are the same RAD DATA that was sent in the  RPC Call MAGGRADLIST, as the return Array.    RADFN_&quot;^&quot;_RADTI_&quot;^&quot;_RACNI_&quot;^&quot;_RANME_&quot;^&quot;_RASSN_&quot;^&quot;   _RADATE_&quot;^&quot;_RADTE_&quot;^&quot;_RACN_&quot;^&quot;_RAPRC_&quot;^&quot;_RARPT_&quot;^&quot;_RASTThe same DATA that the RAD procedure RAPTLU saved in ^TMP($J,&quot;RAEX&quot;,RACNT) We saved the variables that the RAD Routine RAPTLU set up when creatingthe list of Rad Exams for the patient. We send it back as input here,Initialize the variables so when we need to call any Rad Procedure, wehave what we need.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}