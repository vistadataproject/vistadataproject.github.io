---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; MAG KEY VALIDATE 

 property | value 
--- | --- 
 label | MAG KEY VALIDATE
 tag | KVAL
 routine | [MAGQBUT4](http://code.osehra.org/dox/Routine_MAGQBUT4_source.html)
 return value type | SINGLE VALUE
 description | This is a an interface to the Database Server (DBS) utility:Key Validator The Key Validator extrinsic function verifies that new values contained in the FDA do not produce an invalid key. All keys in which any field in the FDA participates are checked. If the value for a field in a key being checked is not present in the FDA, the value used to verify the key is obtained from the previously filed data.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| FLAGS | LITERAL | 9 | true | (Optional) Flags to control processing. The possible values are: Q  Quit when the first problem in the FDA is encountered. | 
| FDA | LIST | 99 | true | The root of the FDA that contains the data to be checked. The array can be a local or global one. See the Database Server Introduction for details of the structure of the FDA.The value of fields in the FDA must be the internal value. Do not pass external (e.g., unresolved pointer values, non-FileMan dates) in the FDA.No action is taken on fields in the referenced FDA if those fields do not participate in a Key defined in the KEY file. | 




 Generated on January 11th 2017, 7:15:04 am