---
layout: default
title: VDM
---

#### [Developer Documentation](../index) &#187; [VDM](TableOfContents) &#187; Name_Components-20<br/>
<a name="top"></a>
# Name Components (20)
This file, introduced with Name Standardization (Patch XU*8.0*134), holds the component parts of a person's name as follows:     Family (Last) Name (field #1)   Given (First) Name (field #2)   Middle Name (field #3)    Prefix (field #4)   Suffix (field #5)   Degree (field #6)   The "source name" that has these components is identified by the following three fields:                                                          File (field #.01)   Field (field #.02)   IENS (field #.03)   The "ANAME" cross-reference on the Family (Last) Name, Given (First) Name, Middle Name, and Suffix fields keeps each component in synchronization with the corresponding source name. In the case of Patch XU*8.0*134, the source name is the .01 field (the Name field) of the NEW PERSON file (#200).   The Degree and Prefix fields are not considered part of a standard name, but can be used to build formatted names for display.

**Global:** ^VA(20,

**Domain:** Non-Clinical

## Properties

Label/Field Name | Field # | Description | Datatype | Attributes | Range
--- | --- | --- | --- | --- | ---
**File**{::nomarkdown}<pre><code>  file</code></pre>{:/} | .01 | Answer must be the number of the file or subfile that contains the name<br/>field. | NUMERIC | INDEXED<br/>REQUIRED | 
**Field**{::nomarkdown}<pre><code>  field</code></pre>{:/} | .02 | Answer must be the number of the field that contains the name. | NUMERIC | REQUIRED | 
**Iens**{::nomarkdown}<pre><code>  iens</code></pre>{:/} | .03 | Answer must be the IENS of the entry that contains the name. | STRING | REQUIRED | 
**Family (last) Name**{::nomarkdown}<pre><code>  family_last_name</code></pre>{:/} | 1 | Answer with the person's family (last) name. It must begin with an<br/>upper-case letter and can contain only upper-case letters, numbers, and<br/>punctuation, excluding circumflexes (^) and grave accents (`). | STRING | REQUIRED | 
**Given (first) Name**{::nomarkdown}<pre><code>  given_first_name</code></pre>{:/} | 2 | Answer with the person's given (first) name. It must begin with an<br/>upper-case letter and can contain only upper-case letters, numbers, and<br/>punctuation, excluding circumflexes (^) and grave accents (`). | STRING | REQUIRED | 
**Middle Name**{::nomarkdown}<pre><code>  middle_name</code></pre>{:/} | 3 | Answer with the person's middle name. It must begin with an upper-case<br/>letter and can contain only upper-case letters, numbers, and punctuation,<br/>excluding circumflexes (^) and grave accents (`). Middle names of NMI and<br/>NMN are not accepted. | STRING |  | 
**Prefix**{::nomarkdown}<pre><code>  prefix</code></pre>{:/} | 4 | Answer with the name prefix, such as MR or MS. Answer must begin with an<br/>upper-case letter and can contain only upper-case letters, numbers, and<br/>punctuation, excluding circumflexes (^) and grave accents (`). | STRING |  | 
**Suffix**{::nomarkdown}<pre><code>  suffix</code></pre>{:/} | 5 | Answer with the name suffix(es), such as JR, SR, II, or III. Answer<br/>must begin with an upper-case letter and can contain only upper-case<br/>letters, numbers, and punctuation, excluding circumflexes (^) and grave<br/>accents (`). | STRING |  | 
**Degree**{::nomarkdown}<pre><code>  degree</code></pre>{:/} | 6 | Answer with the person's academic or professional degree, such as BS, BA,<br/>MD, or PHD. It must begin with an upper-case letter and can contain only<br/>upper-case letters, numbers, and punctuation, excluding circumflexes (^)<br/>and grave accents (`). | STRING |  | 
**Source Name Format Flags**{::nomarkdown}<pre><code>  source_name_format_flags</code></pre>{:/} | 7 | When the name fields in the Name Components file are edited, the "ANAME"<br/>cross-reference updates the corresponding name field in the source file.<br/>This SOURCE NAME FORMAT FLAGS field can be used to control the format of<br/>the name placed in the source name field.<br/> <br/>Answer with the flags used in $$NAMEFMT^XLFNAME API. For example, <br/> <br/>  C  : Return a Comma between the Family (Last) and Given (First)<br/>       Names.<br/>  L  : Truncate the returned name to the maximum length as specified<br/>       by the data type of the source name field.<br/>  L# : Truncate the returned name to a maximum length of #<br/>       characters, where # is an integer between 1 and 256.<br/>  S  : Standardize the name components before building the formatted<br/>       name.<br/> <br/>If this field is null (i.e., no flags are specified), the default is<br/>"CLS". | STRING |  | 
**Notes About Name**{::nomarkdown}<pre><code>  notes_about_name</code></pre>{:/} | 11 | This field stores notes about the name.<br/> <br/>During the New Person Name Conversion, which is run as part of the<br/>post-install routine of Patch XU*8.0*134, if a name in the NEW PERSON file<br/>contains text in parentheses (), brackets [], or braces {}, that text is<br/>removed from the name, and the original name with the parenthetical text<br/>is recorded in this field. | STRING |  | 

[&uarr; Return to top](#top)<br/>



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:39 pm</p>{:/}