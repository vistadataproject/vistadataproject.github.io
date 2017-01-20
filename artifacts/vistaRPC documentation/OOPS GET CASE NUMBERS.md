---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; OOPS GET CASE NUMBERS 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}OOPS GET CASE NUMBERS{:/}
 tag | {::nomarkdown}GETCASE{:/}
 routine | [OOPSGUI0](http://code.osehra.org/dox/Routine_OOPSGUI0_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}This call returns a list of cases that match the search criteria and are eligible for editing.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}PERSON{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}The value passed in PERSON determines which cases are included in thelookup.  A single Person can be returned or a listing of all cases for aparticular Supervisor or Secondary Supervisor.  If a listing by Supervisor isdesired the Supervisor's DUZ must be passed in.  The format is:  PERSON = 0^  (all cases included)           1^PERSON INVOLVED name           2^SUP / SEC SUP DUZ{:/} | 
| {::nomarkdown}CSTAT{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}This parameter passes in the Case Status's of the claims to be included in thelookup criteria.  This parameter must be set programatically as there is not amechanism for user input.  Typically, this would be set to only allow Opencases to be included, with few exceptions.  The expected format is:  CSTAT = #^#^#^#^   where each number is defined below          99^        all case status should be included           0^        open cases           1^        closed cases           2^        deleted cases           3^        replaced by amendment{:/} | 
| {::nomarkdown}PSTAT{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}This parameter determines which PERSONNEL STATUS's should be included in thelookup criteria.  This parameter is determined by the user and the format isas follows:  PSTAT = #^#^#^#^#^    for every Personnel Status          0^            all personnel status's should be included          1^            employee          2^            volunteer          3^            contractor          4^            visitor          5^            other          6^            non-paid employee          7^            medical student          8^            nursing student          9^            other student         10^            resident physician{:/} | 
| {::nomarkdown}CALL{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}This parameter passes in the menu that the broker call was made from.  CALL = E  employee menu         S  supervisor menu         H  employee health menu         O  safety officer menu         W  workers comp menu         U  union menu{:/} | 
| {::nomarkdown}OPT{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}This parameter passes in the option that the broker call was made from, ifneeded.  It is required to determine which fields should be availble for editing in the CA1, CA2, and 2162 forms.{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 20th 2017, 10:14:32 pm</p>{:/}