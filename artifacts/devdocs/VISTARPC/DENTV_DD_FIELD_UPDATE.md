---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; DENTV DD FIELD UPDATE<br/>
# DENTV DD FIELD UPDATE

This call will allow the updating of certain fields in file 228.You can delete a locally added medical CPT code.You can edit the diagnosis codes mapped to any CPT code.

## Properties

Property | Value
--- | ---
Label | FILE
MUMPS Implementation | [DENTVRP3](http://code.osehra.org/dox/Routine_DENTVRP3_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
DATA | LIST | 20 | true | DATA(1) &#x3D; ien for file 228DATA(n) &#x3D; &lt;file 228 field number&gt; ^ new value          n &#x3D; 2,3,4,5,6,7 The only acceptable fields are .01,.18,.16,1.14,1.15,3,5For field .01, the only accpetable values are &lt;null&gt; or &quot;@&quot; indicating the desire to delete the entry. For field .16, the acceptable value is the IEN to the VA DSS Product line.  For field 5 the acceptable value is the external Dx code.  There must be at least one Dx code for each procedure.  If the other data is not sent, it will be deleted in the database.   Example: DATA(1)&#x3D;100268            DATA(2)&#x3D;&quot;.18^30&quot;       RVU            DATA(3)&#x3D;&quot;.16^1&quot;        PRODUCT LINE IEN            DATA(4)&#x3D;&quot;1.14^500.00&quot;  VA COST            DATA(5)&#x3D;&quot;1.15^555.00&quot;  EQUIV PRIVATE COST            DATA(7)&#x3D;&quot;3^&quot;           ADMIN GUIDELINE            DATA(8)&#x3D;&quot;5^528.3&quot;      PRIMARY DEFAULT DX  the first entry             DATA(9)&#x3D;&quot;5^528.5&quot;      ADDITIONAL DEFAULT DX              DATA(10)&#x3D;&quot;5^528.09&quot;    ADDITIONAL DEFAULT DX            DATA(11)&#x3D;&quot;5^525.40&quot;    ADDITIONAL DEFAULT DX            DATA(12)&#x3D;&quot;5^V60.0&quot;     ADDITIONAL DEFAULT DX
KEY | LITERAL | 1 | true | Check which security key this user has. The default value is &#x27;L&#x27;, or youmay pass &#x27;M&#x27;  If L, then see if user owns the local edit security key toedit entries in the local number space (&gt;100,000).  If you pass &#x27;M&#x27; thenthis will check to see if the user owns the VACO security key and if sothen the user can edit any entry in the file.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}