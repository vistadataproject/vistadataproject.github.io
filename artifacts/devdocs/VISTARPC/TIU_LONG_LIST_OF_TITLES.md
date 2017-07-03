---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; TIU LONG LIST OF TITLES
# TIU LONG LIST OF TITLES

This RPC serves data to a longlist of selectable TITLES by CLASS.  e.g.,passing the class PROGRESS NOTES will return active Progress Notes titleswhich the current user is authorized to enter notes under.

Property | Value
--- | ---
Label | LONGLIST
Routine | [TIUSRVD](http://code.osehra.org/dox/Routine_TIUSRVD_source.html)
Return Type | ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
CLASS | LITERAL |  | true | This is a pointer to the CLASS in the Document Definition File (#8925.1)from which the application intends to allow selection of TITLES.
FROM | LITERAL |  | true | This is the reference title from which the longlist is scrolling.
DIR | LITERAL |  |  | This is the direction in which the longlist is scrolling from thereference title.



### MUMPS Method Description

Property | Value
--- | ---
Method | [LONGLIST^TIUSRVD](http://code.osehra.org/dox/Routine_TIUSRVD_source.html)
Method Comment | long list of titles for a class
Input Parameters | CLASS, FROM, DIR, IDNOTE
First Comment | {::nomarkdown}<pre><code> .Y=returned list, CLASS=ptr to class in 8925.1, FROM=text to $O from,<br/> DIR=$O direction, IDNOTE=flag to indicate selection for ID Entry</code></pre>{:/}
Code | {::nomarkdown}<pre><code> N I,DA,CNT S I=0,CNT=44,DIR=$G(DIR,1)<br/> F  Q:I'<CNT  S FROM=$O(^TIU(8925.1,"ACL",CLASS,FROM),DIR) Q:FROM=""  D<br/> . S DA=0<br/> . F  Q:I'<CNT  S DA=$O(^TIU(8925.1,"ACL",CLASS,FROM,DA)) Q:+DA'>0  D<br/> . . I $S(+$$CANENTR^TIULP(DA)'>0:1,+$$CANPICK^TIULP(DA)'>0:1,1:0) Q<br/> . . I +$L($T(CANLINK^TIULP)),+$G(IDNOTE),(+$$CANLINK^TIULP(DA)'>0) Q<br/> . . S I=I+1,Y(I)=DA_"^"_FROM</code></pre>{:/}



### CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rDCSumm.pas">rDCSumm.pas</a>{:/}
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rTIU.pas">rTIU.pas</a>{:/}
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Options/rOptions.pas">Options/rOptions.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}