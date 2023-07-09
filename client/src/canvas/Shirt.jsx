/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import { useSnapshot } from "valtio";
import state from "../store";
import { Decal, useGLTF, useTexture } from "@react-three/drei";
import { easing } from "maath";
import { useFrame } from "@react-three/fiber";

const Shirt = () => {
  const snap = useSnapshot(state);
  const { nodes, materials } = useGLTF("/shirt_baked.glb");
  const logoTexture = useTexture(snap.logoDecal);
  const fullTexture = useTexture(snap.fullDecal);
  return (
    <group>
      <mesh
        castShadow
        geometry={nodes.T_Shirt_male.geometry}
        material={materials.lambert1}
        material-roughness={1}
        dispose={null}></mesh>
    </group>
  );
};

export default Shirt;
