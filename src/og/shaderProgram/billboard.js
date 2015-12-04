goog.provide('og.shaderProgram.billboard');
goog.provide('og.shaderProgram.billboard_p');

goog.require('og.shaderProgram');
goog.require('og.shaderProgram.ShaderProgram');
goog.require('og.shaderProgram.types');
goog.require('og.utils');

og.shaderProgram.billboard = function () {
    return new og.shaderProgram.ShaderProgram("billboard", {
        uniforms: {
            u_texture: { type: og.shaderProgram.types.SAMPLER2D },
            uPMatrix: { type: og.shaderProgram.types.MAT4 },
            uMVMatrix: { type: og.shaderProgram.types.MAT4 },
            uCamPos: { type: og.shaderProgram.types.VEC3 },
            uViewAngle: { type: og.shaderProgram.types.FLOAT },
            uXRatio: { type: og.shaderProgram.types.FLOAT }
        },
        attributes: {
            a_vertices: { type: og.shaderProgram.types.VEC2, enableArray: true },
            a_texCoord: { type: og.shaderProgram.types.VEC2, enableArray: true },
            a_positions: { type: og.shaderProgram.types.VEC3, enableArray: true },
            a_size: { type: og.shaderProgram.types.VEC2, enableArray: true },
            a_offset: { type: og.shaderProgram.types.VEC3, enableArray: true },
            a_rgba: { type: og.shaderProgram.types.VEC4, enableArray: true },
            a_rotation: { type: og.shaderProgram.types.FLOAT, enableArray: true },
            a_alignedAxis: { type: og.shaderProgram.types.VEC3, enableArray: true }
        },
        vertexShader: og.utils.readTextFile(og.shaderProgram.SHADERS_URL + "billboard_vs.txt"),
        fragmentShader: og.utils.readTextFile(og.shaderProgram.SHADERS_URL + "billboard_fs.txt")
    });
};

//og.shaderProgram.billboard = function () {
//    return new og.shaderProgram.ShaderProgram("billboard_p", {
//        uniforms: {
//            uPMatrix: { type: og.shaderProgram.types.MAT4 },
//            uMVMatrix: { type: og.shaderProgram.types.MAT4 },
//            uCamPos: { type: og.shaderProgram.types.VEC3 },
//            uViewAngle: { type: og.shaderProgram.types.FLOAT },
//            uXRatio: { type: og.shaderProgram.types.FLOAT }
//        },
//        attributes: {
//            a_vertices: { type: og.shaderProgram.types.VEC2, enableArray: true },
//            a_positions: { type: og.shaderProgram.types.VEC3, enableArray: true },
//            a_size: { type: og.shaderProgram.types.VEC2, enableArray: true },
//            a_offset: { type: og.shaderProgram.types.VEC3, enableArray: true },
//            a_color: { type: og.shaderProgram.types.VEC3, enableArray: true },
//            a_rotation: { type: og.shaderProgram.types.FLOAT, enableArray: true },
//            a_alignedAxis: { type: og.shaderProgram.types.VEC3, enableArray: true }
//        },
//        vertexShader: og.utils.readTextFile(og.shaderProgram.SHADERS_URL + "billboard_p_vs.txt"),
//        fragmentShader: og.utils.readTextFile(og.shaderProgram.SHADERS_URL + "billboard_p_fs.txt")
//    });
//};