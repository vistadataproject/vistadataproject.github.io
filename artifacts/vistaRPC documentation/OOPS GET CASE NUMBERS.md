---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; OOPS GET CASE NUMBERS 

 property | value 
--- | --- 
 label | OOPS GET CASE NUMBERS
 tag | GETCASE
 routine | [OOPSGUI0](http://code.osehra.org/dox/Routine_OOPSGUI0_source.html)
 return value type | GLOBAL ARRAY
 description | This call returns a list of cases that match the search criteria and are eligible for editing.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| PERSON | LITERAL |  |  | The value passed in PERSON determines which cases are included in thelookup.  A single Person can be returned or a listing of all cases for aparticular Supervisor or Secondary Supervisor.  If a listing by Supervisor isdesired the Supervisor's DUZ must be passed in.  The format is:  PERSON = 0^  (all cases included)           1^PERSON INVOLVED name           2^SUP / SEC SUP DUZ | 
| CSTAT | LITERAL |  |  | This parameter passes in the Case Status's of the claims to be included in thelookup criteria.  This parameter must be set programatically as there is not amechanism for user input.  Typically, this would be set to only allow Opencases to be included, with few exceptions.  The expected format is:  CSTAT = #^#^#^#^   where each number is defined below          99^        all case status should be included           0^        open cases           1^        closed cases           2^        deleted cases           3^        replaced by amendment | 
| PSTAT | LITERAL |  |  | This parameter determines which PERSONNEL STATUS's should be included in thelookup criteria.  This parameter is determined by the user and the format isas follows:  PSTAT = #^#^#^#^#^    for every Personnel Status          0^            all personnel status's should be included          1^            employee          2^            volunteer          3^            contractor          4^            visitor          5^            other          6^            non-paid employee          7^            medical student          8^            nursing student          9^            other student         10^            resident physician | 
| CALL | LITERAL |  |  | This parameter passes in the menu that the broker call was made from.  CALL = E  employee menu         S  supervisor menu         H  employee health menu         O  safety officer menu         W  workers comp menu         U  union menu | 
| OPT | LITERAL |  |  | This parameter passes in the option that the broker call was made from, ifneeded.  It is required to determine which fields should be availble for editing in the CA1, CA2, and 2162 forms. | 




 Generated on January 11th 2017, 7:15:04 am