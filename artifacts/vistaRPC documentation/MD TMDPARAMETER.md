---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; MD TMDPARAMETER 

 property | value 
--- | --- 
 label | MD TMDPARAMETER
 tag | RPC
 routine | [MDRPCOV](http://code.osehra.org/dox/Routine_MDRPCOV_source.html)
 return value type | GLOBAL ARRAY
 description | Used to set/retrieve/modify parameters in the Kernel ToolKit PARAMETERS(XPAR) files. RPC is called as follows: Param[0] := OPTIONParam[1] := EntityParam[2] := Parameter nameParam[3] := InstanceParam[4] := Value

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| OPTION | LITERAL | 10 | true | Contains the option for the RPC.  RPC is called as shown: Options and other required parameters include: ENTVAL    ENTGETPAR    ENT,PAR,INSTGETLST    ENT,PARGETWP     ENT,PAR,INSTSETPAR    ENT,PAR,INST,VALSETLST    ENT,PAR,,.VAL  (Uses instance 0-n)SETWP     ENT,PAR,INST,.VALDELPAR    ENT,PAR,INSTDELLST    ENT,PAR | 
| ENTITY | LITERAL | 20 | true | An entity is a level at which you can define a parameter.  The entitiesallowed are stored in the Parameter Entity file (#8989.518).  The list ofallowable entities at the time this utility was released were:     Prefix  Message       Points to File PKG     Package       Package (9.4) SYS     System        Domain (4.2) DIV     Division      Institution (4) SRV     Service       Service/Section (49) LOC     Location      Hospital Location (44) TEA     Team          Team (404.51) CLS     Class         Usr Class (8930) USR     User          New Person (200) BED     Room-Bed      Room-Bed (405.4) OTL     Team (OE/RR)  OE/RR List (101.21)     The entity may be referenced as follows: 1) The internal variable pointer (nnn;GLO(123,) 2) The external format of the variable pointer using the 3 character   prefix (prefix.entryname)3) The prefix alone to set the parameter based on current entity selected.   (prefix) Method 3 uses the following values for the following entities: USR     Current value of DUZ DIV     Current value of DUZ(2) SYS     System (domain) PKG     Package to which the parameter belongs  | 
| PAR | LITERAL | 30 | true | A parameter is the actual name which values are stored under.  The name ofthe parameter must be namespaced and it must be unique.  Parameters can bedefined to store the typical package parameter data (e.g. the default addorder screen), but they can also be used to store GUI application screensettings a user has selected (e.g. font or window width).  When aparameter is defined, the entities, which may set that parameter, are alsodefined.  The definition of parameters is stored in the PARAMETERDEFINITION file (#8989.51).  NOTE: This utility restricts the parameter name to those in the ClinicalProcedures namespace (MD*). | 
| INST | LITERAL | 30 | true | Most parameters will set instance to 1.  Instances are used when more thanone value may be assigned to a given entity/parameter combination.  Anexample of this would be lab collection times at a division.  A singledivision may have multiple collection times.  Each collection time wouldbe assigned a unique instance. | 
| VAL | LITERAL | 80 | true | A value may be assigned to every parameter for the entities allowed in theparameter definition.  Values are stored in the PARAMETERS file (#8989.5).VAL may be passed in external or internal format.  If using internalformat for a pointer type parameter, VAL must be preceded with the grave(`) character.  If VAL is being assigned to a word processing parameter,the text is passed in the subordinate nodes of VAL (e.g. VAL(0-n)=Text). | 




 Generated on January 11th 2017, 7:15:04 am