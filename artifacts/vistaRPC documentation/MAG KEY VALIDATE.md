---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; MAG KEY VALIDATE 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}MAG KEY VALIDATE{:/}
 tag | {::nomarkdown}KVAL{:/}
 routine | [MAGQBUT4](http://code.osehra.org/dox/Routine_MAGQBUT4_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}This is a an interface to the Database Server (DBS) utility:Key Validator The Key Validator extrinsic function verifies that new values contained in the FDA do not produce an invalid key. All keys in which any field in the FDA participates are checked. If the value for a field in a key being checked is not present in the FDA, the value used to verify the key is obtained from the previously filed data.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}FLAGS{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}9{:/} | {::nomarkdown}true{:/} | {::nomarkdown}(Optional) Flags to control processing. The possible values are: Q  Quit when the first problem in the FDA is encountered.{:/} | 
| {::nomarkdown}FDA{:/} | {::nomarkdown}LIST{:/} | {::nomarkdown}99{:/} | {::nomarkdown}true{:/} | {::nomarkdown}The root of the FDA that contains the data to be checked. The array can be a local or global one. See the Database Server Introduction for details of the structure of the FDA.The value of fields in the FDA must be the internal value. Do not pass external (e.g., unresolved pointer values, non-FileMan dates) in the FDA.No action is taken on fields in the referenced FDA if those fields do not participate in a Key defined in the KEY file.{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 25th 2017, 2:31:55 am</p>{:/}