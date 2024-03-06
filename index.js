import {pipeline} from "@xenova/transformers";



let pipe = await pipeline ('image-classification')

const result =  await pipe('/.../itr/Desktop/test/ll.jpg', {topk: 6}) 

console.log(result);
